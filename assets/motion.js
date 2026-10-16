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

  // "How it works" : la route se trace quand elle devient visible, un point la parcourt,
  // et chaque arrêt (placé sur la route) affiche qui fait quoi.
  const route = document.querySelector(".route");
  if (route) {
    const road = route.querySelector("#road");
    const svg = route.querySelector(".route-svg");
    const stops = [...route.querySelectorAll(".stop")];
    const placeStops = () => {
      const box = svg.viewBox.baseVal;
      const length = road.getTotalLength();
      stops.forEach((stop) => {
        const point = road.getPointAtLength(length * Number(stop.dataset.at));
        stop.style.left = `${(point.x / box.width) * 100}%`;
        stop.style.top = `${(point.y / box.height) * 100}%`;
      });
    };
    placeStops();
    route.classList.add("is-placed");
    function selectStop(stop, focus) {
      stops.forEach((other) => {
        const selected = other === stop;
        other.setAttribute("aria-selected", String(selected));
        other.tabIndex = selected ? 0 : -1;
        const card = document.getElementById(other.getAttribute("aria-controls"));
        card.hidden = !selected;
        card.classList.toggle("is-shown", selected);
      });
      if (focus) {
        stop.focus();
      }
    }
    stops.forEach((stop, index) => {
      stop.addEventListener("keydown", (event) => {
        const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
        if (step) {
          event.preventDefault();
          selectStop(stops[(index + step + stops.length) % stops.length], true);
        }
      });
    });
    selectStop(stops[0], false);

    // Le point parcourt la route : il s'arrête à chaque étape et ouvre sa carte (visite guidée).
    // Un clic sur un arrêt l'y envoie et arrête la visite ; "Replay" la relance.
    const traveller = route.querySelector(".traveller");
    const length = road.getTotalLength();
    let position = 0;
    let frame = 0;
    let touring = false;
    const moveTo = (fraction) => {
      position = fraction;
      const point = road.getPointAtLength(length * fraction);
      traveller.setAttribute("cx", point.x);
      traveller.setAttribute("cy", point.y);
    };
    const glide = (target, done) => {
      cancelAnimationFrame(frame);
      const from = position;
      const duration = reduceMotion ? 0 : Math.max(250, Math.abs(target - from) * 2600);
      const started = performance.now();
      const step = (now) => {
        const t = duration ? Math.min((now - started) / duration, 1) : 1;
        const eased = t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2;
        moveTo(from + (target - from) * eased);
        if (t < 1) {
          frame = requestAnimationFrame(step);
        }
        else if (done) {
          done();
        }
      };
      frame = requestAnimationFrame(step);
    };
    const goToStop = (index, fromTour) => {
      if (!fromTour) {
        touring = false;
      }
      const stop = stops[index];
      selectStop(stop, false);
      glide(Number(stop.dataset.at));
    };
    const tour = (index = 0) => {
      touring = true;
      const visit = (i) => {
        if (!touring) {
          return;
        }
        if (i >= stops.length) {
          glide(1, () => { touring = false; });

          return;
        }
        glide(Number(stops[i].dataset.at), () => {
          if (!touring) {
            return;
          }
          selectStop(stops[i], false);
          setTimeout(() => visit(i + 1), 2200);
        });
      };
      moveTo(0);
      visit(index);
    };
    stops.forEach((stop, index) => stop.addEventListener("click", () => goToStop(index, false)));
    const current = () => stops.findIndex((stop) => stop.getAttribute("aria-selected") === "true");
    route.querySelector(".js-prev").addEventListener("click", () => goToStop((current() + stops.length - 1) % stops.length, false));
    route.querySelector(".js-next").addEventListener("click", () => goToStop((current() + 1) % stops.length, false));
    route.querySelector(".js-replay").addEventListener("click", () => tour());

    const start = () => {
      route.classList.add("is-drawn");
      setTimeout(() => tour(), reduceMotion ? 0 : 1600);
    };
    if ("IntersectionObserver" in window && !reduceMotion) {
      new IntersectionObserver(([entry], observer) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      }, { threshold: 0.35 }).observe(route);
    }
    else {
      route.classList.add("is-drawn");
      moveTo(Number(stops[0].dataset.at));
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
