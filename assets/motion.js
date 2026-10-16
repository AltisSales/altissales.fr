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

  // "How it works" : chaque étape est une flèche du schéma. Visite automatique (flèches l'une après l'autre)
  // jusqu'au premier survol ou clic ; l'étape choisie s'allume et son détail s'affiche dans le panneau en dessous.
  const how = document.querySelector(".how-diagram");
  if (how) {
    const steps = [...how.querySelectorAll(".how-step")];
    const links = [...how.querySelectorAll(".how-link")];
    const pulse = how.querySelector(".how-pulse");
    let frame = 0;
    let timer = 0;
    let touring = true;
    const runPulse = (link) => {
      cancelAnimationFrame(frame);
      if (reduceMotion) {
        return;
      }
      const length = link.getTotalLength();
      const both = link.dataset.step === "4";
      const started = performance.now();
      const step = (now) => {
        const t = ((now - started) % 1800) / 1800;
        // Étape 4 (accord direct) : le point fait l'aller-retour entre acheteur et fabricant.
        const at = both ? (t < 0.5 ? t * 2 : 2 - (t * 2)) : t;
        const point = link.getPointAtLength(length * at);
        pulse.setAttribute("cx", point.x);
        pulse.setAttribute("cy", point.y);
        frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };
    const select = (n, focus) => {
      steps.forEach((button) => {
        const on = button.dataset.step === String(n);
        button.setAttribute("aria-selected", String(on));
        button.tabIndex = on ? 0 : -1;
        if (on && focus) {
          button.focus();
        }
      });
      links.forEach((link) => link.classList.toggle("is-active", link.dataset.step === String(n)));
      how.dataset.active = String(n);
      runPulse(links[n - 1]);
    };
    const stopTour = () => {
      touring = false;
      clearTimeout(timer);
    };
    const tour = (n) => {
      if (!touring) {
        return;
      }
      select(n, false);
      timer = setTimeout(() => tour((n % steps.length) + 1), 3200);
    };
    steps.forEach((button, index) => {
      const n = index + 1;
      button.addEventListener("click", () => {
        stopTour();
        select(n, false);
      });
      button.addEventListener("mouseenter", () => {
        stopTour();
        select(n, false);
      });
      // Souris partie : l'étape ne reste pas allumée, la visite reprend à l'étape suivante.
      button.addEventListener("mouseleave", () => {
        if (touring) {
          return;
        }
        touring = true;
        clearTimeout(timer);
        timer = setTimeout(() => tour((n % steps.length) + 1), 900);
      });
      button.addEventListener("keydown", (event) => {
        const move = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
        if (move) {
          event.preventDefault();
          stopTour();
          select(((index + move + steps.length) % steps.length) + 1, true);
        }
      });
    });
    select(1, false);
    // Vue acheteur / vue fabricant : les flèches du haut changent de sens, les étapes 01 et 02 changent de côté.
    const viewButtons = [...document.querySelectorAll(".how-view-btn")];
    viewButtons.forEach((button) => button.addEventListener("click", () => {
      const view = button.dataset.view;
      viewButtons.forEach((other) => other.setAttribute("aria-pressed", String(other === button)));
      how.classList.toggle("is-maker-view", view === "maker");
      links.forEach((link) => {
        if (link.dataset[view]) {
          link.setAttribute("d", link.dataset[view]);
          link.classList.remove("is-redraw");
          // Relance l'animation de tracé de la flèche.
          link.getBoundingClientRect();
          link.classList.add("is-redraw");
        }
      });
      select(Number(how.dataset.active || 1), false);
    }));
    // Bulles d'info des icônes : survol ou focus (CSS) ; au toucher, un appui ouvre la bulle, un autre la ferme.
    const hits = [...how.querySelectorAll(".how-hit")];
    hits.forEach((hit) => hit.addEventListener("click", () => {
      const open = !hit.classList.contains("is-open");
      hits.forEach((other) => other.classList.remove("is-open"));
      hit.classList.toggle("is-open", open);
    }));
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".how-hit")) {
        hits.forEach((hit) => hit.classList.remove("is-open"));
      }
    });
    const start = () => {
      how.classList.add("is-drawn");
      timer = setTimeout(() => tour(1), reduceMotion ? 0 : 2000);
    };
    if ("IntersectionObserver" in window && !reduceMotion) {
      new IntersectionObserver(([entry], observer) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      }, { threshold: 0.35 }).observe(how);
    }
    else {
      how.classList.add("is-drawn");
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
