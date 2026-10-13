// Contact : formulaire de devis (enregistré dans le CRM ALTIS), e-mail et numéro affichés au clic.
(() => {
  // Application Web du CRM (Google Apps Script) qui reçoit le formulaire.
  const endpoint = "https://script.google.com/macros/s/" +
    "AKfycbz1GV4N_X34Xch09_MTEreutfh-hVlmaRDlEsdObf5DVzdYNLvhGsOp02c1vYFNWenh/exec";

  /** POST "simple" (formulaire encodé) : pas de pré-vérification CORS, que Google refuse. */
  async function post(fields) {
    const response = await fetch(endpoint, { method: "POST", body: new URLSearchParams(fields) });
    const result = await response.json();
    if (!result.ok) {
      throw new Error(result.error || "Error");
    }

    return result;
  }

  // Formulaire de devis dans une fenêtre
  const dialog = document.getElementById("quote-dialog");
  const form = document.getElementById("quote-form");
  const status = form.querySelector(".form-status");
  const submit = form.querySelector("button[type=submit]");

  document.querySelectorAll(".js-quote").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      dialog.showModal();
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
    submit.disabled = true;
    status.textContent = "Sending…";
    try {
      await post(new FormData(form));
      form.reset();
      status.textContent = "Thank you! Your request has been sent. We will get back to you shortly.";
    }
    catch (error) {
      status.textContent = `Sending failed (${error.message}). Please try again in a moment.`;
    }
    finally {
      submit.disabled = false;
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

  /*
   * Numéro : absent du code du site. Après le captcha Cloudflare Turnstile, le CRM vérifie le jeton
   * et renvoie le numéro. Clé publique du site (la clé secrète est dans le CRM uniquement).
   */
  const turnstileSiteKey = "0x4AAAAAAFVDYnf6nr2fTu6Y";
  const phoneDialog = document.getElementById("phone-dialog");
  const phoneResult = phoneDialog.querySelector(".phone-result");
  let widgetId = null;

  async function onCaptchaPassed(token) {
    phoneResult.textContent = "Checking…";
    try {
      const { phone } = await post({ action: "phone", token });
      document.querySelectorAll(".js-phone").forEach((button) => {
        showLink(button, `tel:${phone.replace(/\s/g, "")}`, phone);
      });
      phoneDialog.close();
    }
    catch (error) {
      phoneResult.textContent = error.message;
      window.turnstile.reset(widgetId);
    }
  }

  // Le script Turnstile se charge en arrière-plan : on attend qu'il soit prêt.
  function startCaptcha() {
    if (!window.turnstile) {
      phoneResult.textContent = "Loading the check…";
      setTimeout(startCaptcha, 300);

      return;
    }
    phoneResult.textContent = "";
    if (widgetId === null) {
      widgetId = window.turnstile.render("#phone-captcha", {
        sitekey: turnstileSiteKey,
        language: "en",
        callback: onCaptchaPassed
      });
    }
    else {
      window.turnstile.reset(widgetId);
    }
  }

  document.querySelectorAll(".js-phone").forEach((button) => {
    button.addEventListener("click", () => {
      phoneDialog.showModal();
      startCaptcha();
    });
  });
  phoneDialog.querySelector(".js-close").addEventListener("click", () => phoneDialog.close());
})();
