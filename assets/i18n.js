// Version française du site : bouton EN / FR dans l'en-tête. Le texte anglais reste dans la page ;
// ce dictionnaire remplace chaque texte (et les attributs utiles) par sa traduction. Choix mémorisé dans le navigateur ;
// sans choix, un navigateur réglé en français ouvre le site en français.
(() => {
  const fr = {
    // En-tête, accroche
    "Buyers & manufacturers": "Acheteurs & fabricants",
    "How it works": "Fonctionnement",
    "About": "À propos",
    "FAQ": "FAQ",
    "Contact us": "Nous contacter",
    "Independent Industrial Sourcing & B2B Business Development Partner": "Partenaire indépendant en sourcing industriel & développement commercial B2B",
    "Connecting Industrial Buyers &": "Relier acheteurs industriels &",
    "Manufacturers Worldwide": "fabricants du monde entier",
    "Industrial sourcing for CNC machining, precision manufacturing, mold components and tooling: we find and check qualified manufacturers for buyers, and help suppliers find industrial buyers in Europe and beyond. You then work directly together.": "Sourcing industriel en usinage CNC, fabrication de précision, composants de moules et outillages : nous trouvons et vérifions des fabricants qualifiés pour les acheteurs, et aidons les fournisseurs à trouver des acheteurs industriels en Europe et au-delà. Vous travaillez ensuite en direct.",
    "Find a manufacturer": "Trouver un fabricant",
    "Find industrial buyers": "Trouver des acheteurs industriels",
    "Not a manufacturer, not a reseller": "Ni fabricant, ni revendeur",
    "Direct contract between you": "Contrat direct entre vous",
    "NDA on request": "Accord de confidentialité sur demande",
    "French & English": "Français & anglais",
    "BUYERS": "ACHETEURS",
    "MANUFACTURERS": "FABRICANTS",
    "We find, check and introduce. You agree directly.": "Nous trouvons, vérifions et présentons. Vous vous accordez en direct.",
    // Bandeau
    "Industrial sourcing": "Sourcing industriel",
    "Buyers ↔ manufacturers": "Acheteurs ↔ fabricants",
    "Supplier sourcing": "Recherche de fournisseurs",
    "Checked before any introduction": "Vérifiés avant toute mise en relation",
    "Second source": "Seconde source",
    "Mediation until you agree": "Médiation jusqu'à l'accord",
    "Direct contracts between you": "Contrats directs entre vous",
    "No fee for buyers": "Gratuit pour les acheteurs",
    "Commission only on business brought": "Commission uniquement sur les affaires apportées",
    "Independent": "Indépendant",
    // Deux côtés
    "Two sides, one introducer": "Deux côtés, un seul interlocuteur",
    "What we do for each side": "Ce que nous faisons pour chacun",
    "For buyers": "Pour les acheteurs",
    "Supplier sourcing: manufacturers matched to your parts, including a second source": "Recherche de fournisseurs : des fabricants adaptés à vos pièces, y compris une seconde source",
    "Help on drawings, quantities, tolerances and lead times": "Aide sur les plans, quantités, tolérances et délais",
    "Quotation and order directly with the manufacturer": "Devis et commande en direct avec le fabricant",
    "For manufacturers": "Pour les fabricants",
    "Industrial buyer acquisition and European market entry": "Acquisition d'acheteurs industriels et accès au marché européen",
    "Qualified RFQ opportunities with drawings and key requirements": "Demandes de devis (RFQ) qualifiées, avec plans et exigences clés",
    "Commercial relationship development, towards recurring business": "Développement de la relation commerciale, vers des affaires récurrentes",
    "Commission agreed in advance, only on business we bring": "Commission convenue à l'avance, uniquement sur les affaires apportées",
    // Domaines
    "Fields we cover": "Nos domaines",
    "Click a field to see what's inside": "Cliquez sur un domaine pour voir le détail",
    "CNC machined parts": "Pièces usinées CNC",
    "Mold components": "Composants de moules",
    "Tooling & special parts": "Outillages & pièces spéciales",
    "Precision CNC machined parts": "Pièces usinées CNC de précision",
    "Precision manufacturing: milled and turned parts to drawing, from prototypes to series.": "Fabrication de précision : pièces fraisées et tournées sur plan, du prototype à la série.",
    "Typical parts": "Pièces types",
    "Shafts, axles, pins": "Arbres, axes, goupilles",
    "Housings, plates, brackets": "Carters, plaques, supports",
    "Flanges, rings, bushings": "Brides, bagues, douilles",
    "Processes & materials": "Procédés & matières",
    "Milling 3–5 axes, turning": "Fraisage 3 à 5 axes, tournage",
    "Aluminium, steel, stainless, brass, titanium": "Aluminium, acier, inox, laiton, titane",
    "POM, PA, PEEK": "POM, PA, PEEK",
    "For:": "Pour :",
    "machine builders, engineering, maintenance": "constructeurs de machines, bureaux d'études, maintenance",
    "Find a manufacturer for this": "Trouver un fabricant",
    "Mold components & standard parts": "Composants de moules & pièces standards",
    "Mold and tooling components, compatible with common catalog standards.": "Composants de moules et d'outillages, compatibles avec les standards catalogue courants.",
    "Ejector pins and sleeves": "Éjecteurs et douilles d'éjection",
    "Guide pillars and bushings": "Colonnes et bagues de guidage",
    "Inserts, cores, centering rings": "Inserts, noyaux, bagues de centrage",
    "Hardened tool steels": "Aciers à outils trempés",
    "Precision grinding": "Rectification de précision",
    "Small series, replacements": "Petites séries, pièces de rechange",
    "mold makers, plastics processors": "moulistes, plasturgistes",
    "Custom tooling & special parts": "Outillages sur mesure & pièces spéciales",
    "Tooling, spare and special parts from a drawing, a 3D model or a sample.": "Outillages, pièces de rechange et pièces spéciales sur plan, modèle 3D ou échantillon.",
    "Fixtures, jigs, gauges": "Montages, gabarits, calibres",
    "Wear and spare parts": "Pièces d'usure et de rechange",
    "Parts copied from a sample": "Pièces reproduites d'après échantillon",
    "Machining, grinding, treatments": "Usinage, rectification, traitements",
    "Single parts to small series": "De la pièce unique à la petite série",
    "Reverse engineering": "Rétro-ingénierie",
    "industrial manufacturers, maintenance": "industriels, maintenance",
    // Fonctionnement
    "Four stops from your need to an agreement": "Quatre étapes, de votre besoin à l'accord",
    "Three sides, one agreement": "Trois parties, un accord",
    "Checked manufacturers": "Fabricants vérifiés",
    "Independent business introducer": "Apporteur d'affaires indépendant",
    "Selects & checks manufacturers": "Sélectionne & vérifie les fabricants",
    "Introduces both sides": "Met les deux parties en relation",
    "Mediates until agreement": "Facilite jusqu'à l'accord",
    "Your company": "Votre entreprise",
    "Drawings, quantities, lead time": "Plans, quantités, délai",
    "Orders & pays the manufacturer": "Commande & paie le fabricant",
    "Checked partner": "Partenaire vérifié",
    "Quotes you directly": "Vous chiffre en direct",
    "Direct contract": "Contrat direct",
    "ALTIS SALES": "ALTIS SALES",
    "DIRECT CONTRACT": "CONTRAT DIRECT",
    "BUYER": "ACHETEUR",
    "MANUFACTURER": "FABRICANT",
    "Request": "Demande",
    "Selection": "Sélection",
    "Introduction": "Mise en relation",
    "Agreement": "Accord",
    "Buyer": "Acheteur",
    "Manufacturer": "Fabricant",
    "Sends drawings, quantities, lead time": "Envoie plans, quantités, délai",
    "Clarifies the need, NDA if wanted": "Précise le besoin, accord de confidentialité si souhaité",
    "Selects and checks manufacturers": "Sélectionne et vérifie les fabricants",
    "Shares capabilities and references": "Partage ses capacités et références",
    "Meets the manufacturer": "Rencontre le fabricant",
    "Puts you in touch, shares the files": "Vous met en relation, transmet les fichiers",
    "Quotes the buyer directly": "Chiffre directement pour l'acheteur",
    "Orders and pays the manufacturer": "Commande et paie le fabricant",
    "Mediates until you agree": "Facilite l'échange jusqu'à l'accord",
    "Produces, invoices, delivers": "Produit, facture, livre",
    "← Previous": "← Précédent",
    "Replay the route": "Rejouer le parcours",
    "Next →": "Suivant →",
    // Fichiers
    "Start with what you have": "Partez de ce que vous avez",
    "A drawing, a 3D model or a sample is enough": "Un plan, un modèle 3D ou un échantillon suffit",
    "Shared only with the manufacturers we introduce you to.": "Transmis uniquement aux fabricants que nous vous présentons.",
    "Photos": "Photos",
    "Sample": "Échantillon",
    "Send my request": "Envoyer ma demande",
    // À propos
    "About ALTIS SALES": "À propos d'ALTIS SALES",
    "An independent B2B intermediary": "Un intermédiaire B2B indépendant",
    "Based in France, ALTIS SALES is an independent industrial sourcing and B2B business development partner, tied to no manufacturer: for each request we suggest those that best fit the specification, quantities, budget and lead time.": "Basée en France, ALTIS SALES est un partenaire indépendant en sourcing industriel et développement commercial B2B, lié à aucun fabricant : pour chaque demande, nous proposons ceux qui correspondent le mieux au cahier des charges, aux quantités, au budget et au délai.",
    "We never buy, resell or invoice parts.": "Nous n'achetons, ne revendons et ne facturons jamais de pièces.",
    "Price, quality and delivery are agreed directly between buyer and manufacturer.": "Prix, qualité et livraison se décident directement entre acheteur et fabricant.",
    "We work with": "Nous travaillons avec",
    "Procurement and purchasing": "Les services achats",
    "Engineering and R&D": "Les bureaux d'études et la R&D",
    "Mold makers and plastics processors": "Les moulistes et plasturgistes",
    "Machine builders": "Les constructeurs de machines",
    "Manufacturers seeking European customers": "Les fabricants qui cherchent des clients en Europe",
    // FAQ
    "Frequently asked questions": "Questions fréquentes",
    "Are you a manufacturer or a reseller?": "Êtes-vous fabricant ou revendeur ?",
    "Neither. We find, introduce and mediate. We don't make, buy or resell parts.": "Ni l'un ni l'autre. Nous trouvons, présentons et facilitons. Nous ne fabriquons, n'achetons et ne revendons pas de pièces.",
    "Who do I sign the contract with?": "Avec qui est signé le contrat ?",
    "The manufacturer. Quotation, order, invoice and delivery are between you.": "Avec le fabricant. Devis, commande, facture et livraison se font entre vous.",
    "How are you paid?": "Comment êtes-vous rémunérés ?",
    "A commission agreed in advance with the manufacturer, only on business we introduced. No fee for buyers.": "Par une commission convenue à l'avance avec le fabricant, uniquement sur les affaires apportées. Gratuit pour les acheteurs.",
    "How do you choose the manufacturers?": "Comment choisissez-vous les fabricants ?",
    "By part, quantity and requirements. Each one is checked first: real production, equipment, references, export experience.": "Selon la pièce, les quantités et les exigences. Chacun est vérifié avant : production réelle, équipement, références, expérience export.",
    "Will my drawings stay confidential?": "Mes plans restent-ils confidentiels ?",
    "Yes. Shared only with the manufacturers we introduce, under NDA if you wish.": "Oui. Ils ne sont transmis qu'aux fabricants présentés, sous accord de confidentialité si vous le souhaitez.",
    "Which files can I send?": "Quels fichiers puis-je envoyer ?",
    "PDF, DWG/DXF, STEP, IGES, STL, SolidWorks, photos or a sample. Large files via a transfer link.": "PDF, DWG/DXF, STEP, IGES, STL, SolidWorks, photos ou un échantillon. Les gros fichiers via un lien de transfert.",
    "I'm a manufacturer: can you help me find industrial buyers?": "Je suis fabricant : pouvez-vous m'aider à trouver des acheteurs industriels ?",
    "Yes. Present your capabilities with \"Find industrial buyers\": we look for manufacturing business opportunities that match them, in Europe and internationally, and agree on a commission before any introduction.": "Oui. Présentez vos capacités avec « Trouver des acheteurs industriels » : nous cherchons des opportunités d'affaires qui y correspondent, en Europe et à l'international, et convenons d'une commission avant toute mise en relation.",
    // Contact
    "Contact": "Contact",
    "Looking for a manufacturer or industrial buyers?": "Vous cherchez un fabricant ou des acheteurs industriels ?",
    "A few lines are enough. We reply quickly, with no obligation.": "Quelques lignes suffisent. Réponse rapide, sans engagement.",
    "Founder, ALTIS SALES": "Fondateur, ALTIS SALES",
    "I personally handle every request.": "Je traite personnellement chaque demande.",
    "Connect on LinkedIn": "Me suivre sur LinkedIn",
    "Show phone number": "Afficher le téléphone",
    // Pied de page, mentions légales
    "Legal notice & privacy": "Mentions légales & confidentialité",
    // Formulaires
    "Leave your details and we will get back to you shortly.": "Laissez vos coordonnées, nous revenons vers vous rapidement.",
    "I am": "Je suis",
    "looking for a manufacturer": "à la recherche d'un fabricant",
    "a manufacturer": "fabricant",
    "Company *": "Entreprise *",
    "Business email *": "E-mail professionnel *",
    "Phone": "Téléphone",
    "Country *": "Pays *",
    "Your need": "Votre besoin",
    "Your capabilities": "Vos capacités",
    "You can send drawings, 3D models or your company presentation in reply to our email. Your details are used only to answer your request.":
      "Vous pourrez envoyer plans, modèles 3D ou présentation de votre entreprise en réponse à notre e-mail. Vos coordonnées servent uniquement à répondre à votre demande.",
    "Send": "Envoyer",
    "A quick check to protect this number from automated bots.": "Une vérification rapide pour protéger ce numéro des robots.",
    "Part type, material, quantity, target lead time…": "Type de pièce, matière, quantité, délai souhaité…",
    "Processes, machines, materials, certifications, export experience…": "Procédés, machines, matières, certifications, expérience export…",
    "Sending…": "Envoi…",
    "Thank you! Your request has been sent. We will get back to you shortly.": "Merci ! Votre demande est envoyée. Nous revenons vers vous rapidement.",
    "Sending failed": "Échec de l'envoi",
    "Please try again in a moment.": "Réessayez dans un instant.",
    "Checking…": "Vérification…",
    "Loading the check…": "Chargement de la vérification…",
    "Please complete the check above the Send button.": "Merci de valider la vérification au-dessus du bouton Envoyer.",
    "LinkedIn profile": "Profil LinkedIn",
    "A quick check against bots, then the link to the profile appears.": "Une vérification rapide contre les robots, puis le lien vers le profil s'affiche.",
    "Open the LinkedIn profile": "Ouvrir le profil LinkedIn",
    "LinkedIn": "LinkedIn",
    "B2B business development": "Développement commercial B2B",
    "European market entry": "Accès au marché européen",
    "Checked CNC machining suppliers and tooling suppliers": "Fournisseurs en usinage CNC et en outillage vérifiés",
    "We support manufacturers in developing long-term commercial relationships with industrial buyers through qualified business opportunities and ongoing sales coordination.": "Nous accompagnons les fabricants dans le développement de relations commerciales durables avec des acheteurs industriels, grâce à des opportunités d'affaires qualifiées et une coordination commerciale suivie.",
    "I'm a buyer": "Je suis acheteur",
    "Presentation": "Présentation",
    "I'm a manufacturer": "Je suis fabricant",
    "Buyer search": "Recherche d'acheteurs",
    "Qualified buyers": "Acheteurs qualifiés",
    // Attributs (aria-label, alt, title)
    "Point of view": "Point de vue",
    "Close": "Fermer",
    "Previous stage": "Étape précédente",
    "Next stage": "Étape suivante",
    "Stages": "Étapes",
    "What ALTIS SALES does": "Ce que fait ALTIS SALES",
    "ALTIS SALES on LinkedIn": "ALTIS SALES sur LinkedIn",
    "A buyer and a manufacturer shaking hands after agreeing": "Un acheteur et un fabricant se serrent la main après un accord"
  };

  const meta = {
    en: {
      title: document.title,
      description: document.querySelector("meta[name=description]")?.content ?? ""
    },
    fr: {
      title: "ALTIS SALES | Sourcing industriel & développement commercial B2B",
      description: "ALTIS SALES met en relation les acheteurs industriels avec des fabricants qualifiés et aide les fournisseurs à développer leurs opportunités commerciales en Europe et au-delà."
    }
  };

  const squash = (text) => text.replace(/\s+/g, " ").trim();
  const nodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => (node.parentElement?.closest("script, style") || !fr[squash(node.nodeValue)] ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT)
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const original = node.nodeValue;
    const [, before, after] = original.match(/^(\s*)[\s\S]*?(\s*)$/);
    nodes.push({ node, en: original, fr: before + fr[squash(original)] + after });
  }
  const attributes = [];
  document.querySelectorAll("[placeholder], [aria-label], [alt], [title]").forEach((element) => {
    for (const name of ["placeholder", "aria-label", "alt"]) {
      const value = element.getAttribute(name);
      if (value && fr[value]) {
        attributes.push({ element, name, en: value, fr: fr[value] });
      }
    }
  });

  let current = "en";
  const listeners = [];
  // Utilisé par contact.js pour ses messages (envoi du formulaire, vérification du téléphone).
  window.altisT = (text) => (current === "fr" && fr[text] ? fr[text] : text);
  window.altisLang = () => current;
  window.altisOnLang = (callback) => listeners.push(callback);

  const toggle = document.querySelector(".lang-switch");
  function apply(lang, remember) {
    current = lang;
    document.documentElement.lang = lang;
    nodes.forEach((item) => { item.node.nodeValue = item[lang]; });
    attributes.forEach((item) => item.element.setAttribute(item.name, item[lang]));
    document.title = meta[lang].title;
    document.querySelector("meta[name=description]")?.setAttribute("content", meta[lang].description);
    toggle?.setAttribute("aria-checked", String(lang === "fr"));
    listeners.forEach((callback) => callback(lang));
    if (!remember) {
      return;
    }
    // Préférence choisie par le visiteur (exemptée de consentement par la CNIL) ; rien n'est envoyé au serveur.
    try {
      localStorage.setItem("altis-lang", lang);
    }
    catch {
      // Navigation privée : le choix n'est simplement pas mémorisé.
    }
  }

  let saved = null;
  try {
    saved = localStorage.getItem("altis-lang");
  }
  catch {
    saved = null;
  }
  const initial = saved ?? (/^fr\b/i.test(navigator.language ?? "") ? "fr" : "en");
  if (initial === "fr") {
    apply("fr");
  }
  toggle?.addEventListener("click", () => apply(current === "fr" ? "en" : "fr", true));
})();
