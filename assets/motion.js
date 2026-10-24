// Animations du site : apparition des blocs au défilement, barre du haut, lien actif, bouton flottant.
// Sans JavaScript (ou avec "réduire les animations"), tout le contenu reste visible.
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealed = document.querySelectorAll("[data-reveal]");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealed.forEach((element) => element.classList.add("is-visible"));
  }
  else {
    // Décalage en cascade pour les blocs voisins (cartes, étapes).
    revealed.forEach((element) => {
      const siblings = [...element.parentElement.children].filter((child) => child.hasAttribute("data-reveal"));
      element.style.setProperty("--delay", `${Math.min(siblings.indexOf(element), 5) * 90}ms`);
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    revealed.forEach((element) => observer.observe(element));
  }

  // Bandeau défilant : liste doublée pour une boucle sans à-coup.
  const track = document.querySelector(".ticker-track");
  if (track) {
    [...track.children].forEach((item) => {
      const copy = item.cloneNode(true);
      copy.setAttribute("aria-hidden", "true");
      track.append(copy);
    });
    // Bulle d'info de chaque mot-clé : posée sur la page (le bandeau la couperait), sous le mot survolé ou touché.
    const ticker = track.parentElement;
    const bubble = document.createElement("div");
    bubble.className = "ticker-bubble";
    bubble.setAttribute("role", "tooltip");
    document.body.append(bubble);
    let openItem = null;
    const hide = () => {
      bubble.classList.remove("is-on");
      openItem?.classList.remove("is-open");
      ticker.classList.remove("is-paused");
      openItem = null;
    };
    const show = (item) => {
      const text = item.querySelector(".tick-tip")?.textContent;
      if (!text) {
        return;
      }
      openItem?.classList.remove("is-open");
      openItem = item;
      item.classList.add("is-open");
      ticker.classList.add("is-paused");
      bubble.textContent = text;
      const box = item.getBoundingClientRect();
      const center = box.left + box.width / 2;
      const half = bubble.offsetWidth / 2;
      const left = Math.min(Math.max(center, half + 12), window.innerWidth - half - 12);
      bubble.style.left = `${left}px`;
      bubble.style.top = `${box.bottom + 10}px`;
      bubble.style.setProperty("--arrow", `${half + center - left}px`);
      bubble.classList.add("is-on");
    };
    track.addEventListener("mouseover", (event) => {
      const item = event.target.closest("li");
      if (item && item !== openItem) {
        show(item);
      }
    });
    track.addEventListener("mouseleave", hide);
    // Au toucher : un appui ouvre, un second appui (ou ailleurs) ferme.
    track.addEventListener("click", (event) => {
      const item = event.target.closest("li");
      if (item && item === openItem && event.pointerType !== "mouse") {
        hide();
      }
      else if (item) {
        show(item);
      }
    });
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".ticker-track")) {
        hide();
      }
    });
    window.addEventListener("scroll", hide, { passive: true });
  }

  // "Fields we cover" : un clic sur un domaine affiche son détail (flèches du clavier aussi). Sans JavaScript, tout reste affiché.
  const tabs = [...document.querySelectorAll(".field-tabs [role=tab]")];
  function selectTab(tab, focus) {
    tabs.forEach((other) => {
      const selected = other === tab;
      other.setAttribute("aria-selected", String(selected));
      other.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(other.getAttribute("aria-controls"));
      panel.hidden = !selected;
      panel.classList.toggle("is-shown", selected);
    });
    if (focus) {
      tab.focus();
    }
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(tab, false));
    tab.addEventListener("keydown", (event) => {
      const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
      if (step) {
        event.preventDefault();
        selectTab(tabs[(index + step + tabs.length) % tabs.length], true);
      }
    });
  });
  if (tabs.length) {
    selectTab(tabs[0], false);
  }

  // Point de vue du site (client industriel ou sous-traitant) : choisi dans "How it works" ou dans "Nos services",
  // gardé pendant la visite. Les blocs .only-client / .only-supplier suivent (voir style.css).
  const root = document.documentElement;
  const viewButtons = [...document.querySelectorAll(".view-btn")];
  const viewListeners = [];
  const setView = (view, remember) => {
    root.dataset.view = view;
    viewButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.view === view)));
    if (remember) {
      try {
        sessionStorage.setItem("altis-view", view);
      }
      catch {
        // Navigation privée : le choix n'est pas gardé.
      }
    }
    viewListeners.forEach((callback) => callback(view));
  };
  document.querySelectorAll(".view-btn, .js-view").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view, true)));
  setView(root.dataset.view === "supplier" ? "supplier" : "client", false);

  // "How it works" : réseau clients industriels | ALTIS SALES | sous-traitants. Les 4 étapes allument les liens tour à tour
  // et des points lumineux les parcourent dans le sens de l'étape. Visite automatique ; survol, clic ou clavier choisissent une étape.
  const nx = document.querySelector(".nx");
  if (nx) {
    const linksL = [...nx.querySelectorAll(".nx-l")];
    const linksR = [...nx.querySelectorAll(".nx-r")];
    const nodesL = [...nx.querySelectorAll(".nx-nodes-l > *")];
    const nodesR = [...nx.querySelectorAll(".nx-nodes-r > *")];
    const dotLayer = nx.querySelector(".nx-dots");
    const stepButtons = [...nx.querySelectorAll(".nx-step")];
    // Liens de gauche tracés client → ALTIS SALES, liens de droite ALTIS SALES → sous-traitant : 1 = dans ce sens, -1 = à rebours.
    const plan = (n) => {
      const client = root.dataset.view !== "supplier";
      if (n === 1) {
        return client ? { runs: linksL.map((path) => [path, 1]), lit: nodesL } : { runs: linksR.map((path) => [path, -1]), lit: nodesR };
      }
      if (n === 2) {
        return client ? { runs: linksR.map((path) => [path, 1]), lit: nodesR } : { runs: linksL.map((path) => [path, -1]), lit: nodesL };
      }
      if (n === 3) {
        return { runs: [...linksL.map((path) => [path, -1]), ...linksR.map((path) => [path, 1])], lit: [] };
      }

      // 04 : un client industriel et un sous-traitant s'accordent, le point fait l'aller-retour entre eux.
      return { pair: [linksL[1], linksR[0]], lit: [nodesL[1], nodesR[0]] };
    };
    let current = plan(1);
    let active = 1;
    let dots = [];
    let start = performance.now();
    const select = (n) => {
      active = n;
      nx.dataset.active = String(n);
      current = plan(n);
      stepButtons.forEach((button) => button.setAttribute("aria-pressed", String(Number(button.dataset.step) === n)));
      const onLinks = current.pair ?? current.runs.map(([path]) => path);
      [...linksL, ...linksR].forEach((path) => path.classList.toggle("is-on", onLinks.includes(path)));
      [...nodesL, ...nodesR].forEach((node) => node.classList.toggle("is-on", current.lit.includes(node)));
      dots = Array.from({ length: current.pair ? 1 : current.runs.length }, () => {
        const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dot.setAttribute("r", "4");

        return dot;
      });
      dotLayer.replaceChildren(...dots);
      start = performance.now();
    };
    const place = (dot, path, t) => {
      const point = path.getPointAtLength(t * path.getTotalLength());
      dot.setAttribute("cx", point.x.toFixed(1));
      dot.setAttribute("cy", point.y.toFixed(1));
    };
    // Points animés seulement quand le schéma est à l'écran.
    let visible = true;
    let running = false;
    const frame = (now) => {
      if (!visible) {
        running = false;

        return;
      }
      const s = (now - start) / 1600;
      if (current.pair) {
        const u = s % 2;
        const v = Math.floor(s / 2) % 2 === 1 ? 2 - u : u;
        place(dots[0], v < 1 ? current.pair[0] : current.pair[1], v < 1 ? v : v - 1);
      }
      else {
        current.runs.forEach(([path, direction], i) => {
          const t = (s + i * 0.18) % 1;
          place(dots[i], path, direction === 1 ? t : 1 - t);
        });
      }
      requestAnimationFrame(frame);
    };
    const run = () => {
      if (!running && !reduceMotion) {
        running = true;
        requestAnimationFrame(frame);
      }
    };
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          run();
        }
      }).observe(nx);
    }

    let timer = 0;
    let touring = true;
    const tour = (n) => {
      if (!touring) {
        return;
      }
      select(n);
      timer = setTimeout(() => tour((n % 4) + 1), 3200);
    };
    const pause = (n) => {
      touring = false;
      clearTimeout(timer);
      select(n);
    };
    const resume = (n) => {
      if (touring) {
        return;
      }
      touring = true;
      clearTimeout(timer);
      timer = setTimeout(() => tour((n % 4) + 1), 900);
    };
    stepButtons.forEach((button, index) => {
      const n = Number(button.dataset.step);
      button.addEventListener("mouseenter", () => pause(n));
      button.addEventListener("mouseleave", () => resume(n));
      button.addEventListener("focus", () => pause(n));
      button.addEventListener("blur", () => resume(n));
      button.addEventListener("click", () => pause(n));
      button.addEventListener("keydown", (event) => {
        const move = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
        if (move) {
          event.preventDefault();
          stepButtons[(index + move + 4) % 4].focus();
        }
      });
    });
    viewListeners.push(() => select(active));
    // Bulles d'info au toucher : un appui ouvre, un autre (ou ailleurs) ferme.
    const hits = [...nx.querySelectorAll(".nx-hit")];
    hits.forEach((hit) => hit.addEventListener("click", () => {
      const open = !hit.classList.contains("is-open");
      hits.forEach((other) => other.classList.remove("is-open"));
      hit.classList.toggle("is-open", open);
    }));
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".nx-hit")) {
        hits.forEach((hit) => hit.classList.remove("is-open"));
      }
    });
    select(1);
    run();
    timer = setTimeout(() => tour(2), 3200);
  }

  // Barre du haut ombrée après défilement, bouton flottant une fois l'accroche passée.
  const topbar = document.querySelector(".topbar");
  const hero = document.querySelector(".hero");
  const floating = document.querySelector(".floating-cta");
  const contact = document.getElementById("contact");
  function onScroll() {
    topbar.classList.toggle("is-scrolled", window.scrollY > 8);
    const pastHero = hero.getBoundingClientRect().bottom < 0;
    const atContact = contact.getBoundingClientRect().top < window.innerHeight;
    floating.classList.toggle("is-shown", pastHero && !atContact);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Lien du menu correspondant à la section affichée.
  const links = [...document.querySelectorAll(".topbar nav a[href^='#']:not(.btn)")];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    // L'accroche n'a pas de lien : quand elle est affichée, aucun lien n'est actif.
    [hero, ...sections].forEach((section) => spy.observe(section));
  }
})();
