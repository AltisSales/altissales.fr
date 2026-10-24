// Contact : formulaire (enregistré dans le CRM ALTIS), e-mail, numéro et lien LinkedIn affichés au clic.
// Formulaire, numéro et LinkedIn passent par un captcha Cloudflare Turnstile, vérifié côté CRM.
(() => {
  // Traduction des messages (assets/i18n.js) ; sans ce script, les textes restent en anglais.
  const t = (text) => (window.altisT ? window.altisT(text) : text);
  // Application Web du CRM (Google Apps Script) qui reçoit le formulaire.
  const endpoint = "https://script.google.com/macros/s/" +
    "AKfycbz1GV4N_X34Xch09_MTEreutfh-hVlmaRDlEsdObf5DVzdYNLvhGsOp02c1vYFNWenh/exec";
  // Clé publique du site (la clé secrète est dans le CRM uniquement).
  const turnstileSiteKey = "0x4AAAAAAFVDYnf6nr2fTu6Y";

  /** POST "simple" (formulaire encodé) : pas de pré-vérification CORS, que Google refuse. */
  async function post(fields) {
    const response = await fetch(endpoint, { method: "POST", body: new URLSearchParams(fields) });
    const result = await response.json();
    if (!result.ok) {
      throw new Error(result.error || "Error");
    }

    return result;
  }

  /** Script Cloudflare chargé seulement à la première ouverture d'une fenêtre (page plus rapide). */
  function loadTurnstile() {
    if (window.turnstile || document.getElementById("turnstile-api")) {
      return;
    }
    const script = document.createElement("script");
    script.id = "turnstile-api";
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    document.head.append(script);
  }

  /**
   * Captcha Turnstile dans un conteneur. Le script Cloudflare se charge en arrière-plan : on attend qu'il soit prêt.
   * onToken reçoit le jeton (à usage unique) ; reset() en redemande un après chaque envoi.
   */
  function captcha(selector, onToken, statusElement) {
    let widgetId = null;
    let token = "";
    const start = () => {
      loadTurnstile();
      if (!window.turnstile) {
        if (statusElement) {
          statusElement.textContent = t("Loading the check…");
        }
        setTimeout(start, 300);

        return;
      }
      if (statusElement && statusElement.textContent === t("Loading the check…")) {
        statusElement.textContent = "";
      }
      if (widgetId === null) {
        widgetId = window.turnstile.render(selector, {
          sitekey: turnstileSiteKey,
          language: window.altisLang?.() === "fr" ? "fr" : "en",
          callback: (value) => {
            token = value;
            onToken?.(value);
          },
          "expired-callback": () => {
            token = "";
          }
        });
      }
    };

    return {
      start,
      token: () => token,
      reset: () => {
        token = "";
        if (widgetId !== null) {
          window.turnstile.reset(widgetId);
        }
      }
    };
  }

  // ---------- Formulaire dans une fenêtre ----------
  const dialog = document.getElementById("quote-dialog");
  const form = document.getElementById("quote-form");
  const status = form.querySelector(".form-status");
  const submit = form.querySelector("button[type=submit]");
  const formCaptcha = captcha("#form-captcha", () => {
    status.textContent = "";
  }, status);

  // Acheteur ou fabricant : le bouton cliqué présélectionne le profil, le libellé du besoin suit.
  const needLabel = form.querySelector(".js-need-label");
  const need = form.elements.besoin;
  function showRole(role) {
    const maker = role === "Manufacturer";
    needLabel.textContent = t(maker ? "Your capabilities" : "Your need");
    need.placeholder = t(maker ? "Processes, machines, materials, certifications, export experience…" : "Part type, material, quantity, target lead time…");
  }
  window.altisOnLang?.(() => showRole(form.elements.profil.value));
  form.querySelectorAll("input[name=profil]").forEach((radio) => radio.addEventListener("change", () => showRole(radio.value)));

  document.querySelectorAll(".js-quote").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      // Sans profil sur le bouton : celui du point de vue choisi sur le site.
      const role = button.dataset.role || (document.documentElement.dataset.view === "supplier" ? "Manufacturer" : "Buyer");
      form.querySelector(`input[name=profil][value=${role}]`).checked = true;
      showRole(form.elements.profil.value);
      dialog.showModal();
      formCaptcha.start();
    });
  });
  form.querySelector(".js-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  form.addEventListener("submit", async(event) => {
    event.preventDefault();
    const token = formCaptcha.token();
    if (!token) {
      status.textContent = t("Please complete the check above the Send button.");

      return;
    }
    submit.disabled = true;
    status.textContent = t("Sending…");
    try {
      // Le CRM reçoit les mêmes champs qu'avant : le profil est ajouté en tête du besoin.
      const fields = new FormData(form);
      const role = fields.get("profil") === "Manufacturer" ? "[Manufacturer]" : "[Buyer]";
      fields.delete("profil");
      fields.delete("cf-turnstile-response");
      fields.set("besoin", `${role} ${fields.get("besoin") ?? ""}`.trim());
      fields.set("token", token);
      await post(fields);
      form.reset();
      status.textContent = t("Thank you! Your request has been sent. We will get back to you shortly.");
    }
    catch (error) {
      status.textContent = `${t("Sending failed")} (${error.message}). ${t("Please try again in a moment.")}`;
    }
    finally {
      submit.disabled = false;
      // Un jeton ne sert qu'une fois : nouveau captcha pour un éventuel second envoi.
      formCaptcha.reset();
    }
  });

  // Remplace un bouton par un lien (téléphone ou e-mail).
  function showLink(button, href, text) {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = text;
    link.className = button.classList.contains("link-button") ? "" : "phone";
    button.replaceWith(link);
  }

  // E-mail des mentions légales : pas écrit en clair dans la page (limite la collecte par les robots).
  const mail = ["quentin", "altissales.fr"].join("@");
  document.querySelectorAll(".js-email").forEach((button) => {
    button.addEventListener("click", () => showLink(button, `mailto:${mail}`, mail));
  });

  // ---------- Numéro : absent du code du site, renvoyé par le CRM après le captcha ----------
  const phoneDialog = document.getElementById("phone-dialog");
  const phoneResult = phoneDialog.querySelector(".phone-result");
  const phoneCaptcha = captcha("#phone-captcha", async(token) => {
    phoneResult.textContent = t("Checking…");
    try {
      const { phone } = await post({ action: "phone", token });
      document.querySelectorAll(".js-phone").forEach((button) => {
        showLink(button, `tel:${phone.replace(/\s/g, "")}`, phone);
      });
      phoneDialog.close();
    }
    catch (error) {
      phoneResult.textContent = error.message;
      phoneCaptcha.reset();
    }
  }, phoneResult);
  document.querySelectorAll(".js-phone").forEach((button) => {
    button.addEventListener("click", () => {
      phoneDialog.showModal();
      phoneCaptcha.start();
    });
  });
  phoneDialog.querySelector(".js-close").addEventListener("click", () => phoneDialog.close());

  // ---------- LinkedIn : lien absent du code du site, renvoyé par le CRM après le captcha ----------
  const linkedinDialog = document.getElementById("linkedin-dialog");
  const linkedinResult = linkedinDialog.querySelector(".linkedin-result");
  const linkedinOpen = linkedinDialog.querySelector(".js-linkedin-open");
  const linkedinCaptcha = captcha("#linkedin-captcha", async(token) => {
    linkedinResult.textContent = t("Checking…");
    try {
      const { url } = await post({ action: "linkedin", token });
      if (!String(url).startsWith("https://www.linkedin.com/")) {
        throw new Error("Error");
      }
      linkedinResult.textContent = "";
      linkedinOpen.href = url;
      linkedinOpen.hidden = false;
    }
    catch (error) {
      linkedinResult.textContent = error.message;
      linkedinCaptcha.reset();
    }
  }, linkedinResult);
  document.querySelectorAll(".js-linkedin").forEach((button) => {
    button.addEventListener("click", () => {
      linkedinDialog.showModal();
      linkedinCaptcha.start();
    });
  });
  linkedinOpen.addEventListener("click", () => linkedinDialog.close());
  linkedinDialog.querySelector(".js-close").addEventListener("click", () => linkedinDialog.close());
})();
