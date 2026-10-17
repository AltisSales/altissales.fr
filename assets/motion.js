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

  // "How it works" : vue acheteur ou fabricant (une seule à la fois). Étapes 01-02 sur les flèches, 03-04 sous ALTIS SALES.
  // Visite automatique des 4 étapes ; survol, clic ou clavier choisissent une étape (le point continue de bouger).
  const flow = document.querySelector(".fl");
  if (flow) {
    const viewButtons = [...document.querySelectorAll(".how-view-btn")];
    const steps = () => ({
      1: flow.dataset.view === "buyer" ? flow.querySelector(".fl-step-left") : flow.querySelector(".fl-step-right"),
      2: flow.dataset.view === "buyer" ? flow.querySelector(".fl-step-right") : flow.querySelector(".fl-step-left"),
      3: flow.querySelector(".fl-step-3"),
      4: flow.querySelector(".fl-step-4")
    });
    let timer = 0;
    let touring = true;
    const select = (n) => {
      flow.dataset.active = String(n);
      Object.entries(steps()).forEach(([k, button]) => button.setAttribute("aria-pressed", String(Number(k) === n)));
    };
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
    const stepOf = (button) => Number(Object.entries(steps()).find(([, b]) => b === button)?.[0] ?? 1);
    flow.querySelectorAll(".fl-step").forEach((button) => {
      button.addEventListener("mouseenter", () => pause(stepOf(button)));
      button.addEventListener("mouseleave", () => resume(stepOf(button)));
      button.addEventListener("focus", () => pause(stepOf(button)));
      button.addEventListener("click", () => pause(stepOf(button)));
      button.addEventListener("keydown", (event) => {
        const move = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
        if (move) {
          event.preventDefault();
          const next = ((stepOf(button) - 1 + move + 4) % 4) + 1;
          steps()[next].focus();
        }
      });
    });
    // Choix de la vue, gardé pendant la visite (session du navigateur).
    const setView = (view) => {
      flow.dataset.view = view;
      viewButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.view === view)));
      select(Number(flow.dataset.active || 1));
      try {
        sessionStorage.setItem("altis-how-view", view);
      }
      catch {
        // Navigation privée : le choix n'est pas gardé.
      }
    };
    viewButtons.forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
    let savedView = null;
    try {
      savedView = sessionStorage.getItem("altis-how-view");
    }
    catch {
      savedView = null;
    }
    setView(savedView === "maker" ? "maker" : "buyer");
    // Bulles d'info au toucher : un appui ouvre, un autre (ou ailleurs) ferme.
    const nodes = [...flow.querySelectorAll(".fl-node")];
    nodes.forEach((nodeButton) => nodeButton.addEventListener("click", () => {
      const open = !nodeButton.classList.contains("is-open");
      nodes.forEach((other) => other.classList.remove("is-open"));
      nodeButton.classList.toggle("is-open", open);
    }));
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".fl-node")) {
        nodes.forEach((nodeButton) => nodeButton.classList.remove("is-open"));
      }
    });
    if ("IntersectionObserver" in window && !reduceMotion) {
      new IntersectionObserver(([entry], observer) => {
        if (entry.isIntersecting) {
          flow.classList.add("is-drawn");
          timer = setTimeout(() => tour(1), 1200);
          observer.disconnect();
        }
      }, { threshold: 0.35 }).observe(flow);
    }
    else {
      flow.classList.add("is-drawn");
    }
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
