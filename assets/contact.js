// Contact : formulaire de devis (enregistré dans le CRM ALTIS), e-mail et numéro affichés au clic.
(function () {
  // Application Web du CRM (Google Apps Script) qui reçoit le formulaire.
  const endpoint = "https://script.google.com/macros/s/" +
    "AKfycbz1GV4N_X34Xch09_MTEreutfh-hVlmaRDlEsdObf5DVzdYNLvhGsOp02c1vYFNWenh/exec";

  // Formulaire de devis dans une fenêtre
  const dialog = document.getElementById("quote-dialog");
  const form = document.getElementById("quote-form");
  const status = form.querySelector(".form-status");
  const submit = form.querySelector("button[type=submit]");

  document.querySelectorAll(".js-quote").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      dialog.showModal();
    });
  });
  form.querySelector(".js-close").addEventListener("click", function () {
    dialog.close();
  });
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    submit.disabled = true;
    status.textContent = "Envoi en cours…";
    // Requête "simple" (formulaire encodé) : pas de pré-vérification CORS bloquée par Google.
    fetch(endpoint, { method: "POST", body: new URLSearchParams(new FormData(form)) })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        if (!result.ok) {
          throw new Error(result.error || "Erreur");
        }
        form.reset();
        status.textContent = "Merci ! Votre demande est envoyée, nous revenons vers vous rapidement.";
      })
      .catch(function (error) {
        status.textContent = "L'envoi a échoué (" + error.message + "). Réessayez dans un instant.";
      })
      .finally(function () {
        submit.disabled = false;
      });
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
  const mail = ["quentin", "altissales.fr"];
  document.querySelectorAll(".js-email").forEach(function (button) {
    button.addEventListener("click", function () {
      showLink(button, "mailto:" + mail.join("@"), mail.join("@"));
    });
  });

  /*
   * Numéro : absent du code du site. Après le captcha Cloudflare Turnstile, le CRM vérifie le jeton
   * et renvoie le numéro. Clé publique du site (la clé secrète est dans le CRM uniquement).
   */
  const turnstileSiteKey = "0x4AAAAAAFVDYnf6nr2fTu6Y";
  const phoneDialog = document.getElementById("phone-dialog");
  const phoneResult = phoneDialog.querySelector(".phone-result");
  let widgetId = null;
  let phoneButtons = [];

  function showPhone(phone) {
    phoneButtons.forEach(function (button) {
      showLink(button, "tel:" + phone.replace(/\s/g, ""), phone);
    });
    phoneButtons = [];
    phoneDialog.close();
  }

  function onCaptchaPassed(token) {
    phoneResult.textContent = "Vérification…";
    fetch(endpoint, { method: "POST", body: new URLSearchParams({ action: "phone", token: token }) })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        if (!result.ok) {
          throw new Error(result.error || "Erreur");
        }
        showPhone(result.phone);
      })
      .catch(function (error) {
        phoneResult.textContent = error.message;
        window.turnstile.reset(widgetId);
      });
  }

  document.querySelectorAll(".js-phone").forEach(function (button) {
    button.addEventListener("click", function () {
      phoneButtons = Array.from(document.querySelectorAll(".js-phone"));
      phoneResult.textContent = "";
      phoneDialog.showModal();
      startCaptcha();
    });
  });

  // Le script Turnstile se charge en arrière-plan : on attend qu'il soit prêt.
  function startCaptcha() {
    if (!window.turnstile) {
      phoneResult.textContent = "Chargement de la vérification…";
      setTimeout(startCaptcha, 300);

      return;
    }
    phoneResult.textContent = "";
    if (widgetId === null) {
      widgetId = window.turnstile.render("#phone-captcha", {
        sitekey: turnstileSiteKey,
        language: "fr",
        callback: onCaptchaPassed
      });
    }
    else {
      window.turnstile.reset(widgetId);
    }
  }
  phoneDialog.querySelector(".js-close").addEventListener("click", function () {
    phoneDialog.close();
  });
})();
