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
    "Connecting Industrial Buyers with": "Nous connectons acheteurs industriels et",
    "Qualified Manufacturers.": "fabricants qualifiés.",
    "CNC sourcing, precision manufacturing and international B2B business development.": "Sourcing CNC, usinage de précision et développement commercial en Europe et à l'international.",
    "Find a manufacturer": "Trouver un fabricant",
    "Find industrial buyers": "Trouver des acheteurs industriels",
    "Not a manufacturer, not a reseller": "Ni fabricant, ni revendeur",
    "Direct contract between you": "Contrat direct entre vous",
    "NDA on request": "Accord de confidentialité sur demande",
    "French & English": "Français & anglais",
    "BUYERS": "ACHETEURS",
    "MANUFACTURERS": "FABRICANTS",
    "We find, assess & connect you.": "Nous trouvons, évaluons & vous mettons en relation.",
    // Bandeau
    "Industrial sourcing": "Sourcing industriel",
    "Buyers ↔ manufacturers": "Acheteurs ↔ fabricants",
    "Supplier sourcing": "Recherche de fournisseurs",
    "Manufacturers assessed against project requirements": "Fabricants évalués selon les exigences du projet",
    "Second source": "Seconde source",
    "Mediation until you agree": "Médiation jusqu'à l'accord",
    "Direct contracts between you": "Contrats directs entre vous",
    "No fee for buyers": "Gratuit pour les acheteurs",
    "Fees & commissions agreed in advance": "Honoraires & commissions convenus à l'avance",
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
    "Commission-based introductions, terms agreed in advance": "Mises en relation à la commission, conditions convenues à l'avance",
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
    "industrial manufacturers, engineering, maintenance": "fabricants industriels, bureaux d'études, maintenance",
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
    "industrial manufacturers, maintenance": "fabricants industriels, maintenance",
    // Fonctionnement
    "Four stops from your need to an agreement": "Quatre étapes, de votre besoin à l'accord",
    "Three sides, one agreement": "Trois parties, un accord",
    "Assessed manufacturers": "Fabricants évalués",
    "Independent business introducer": "Apporteur d'affaires indépendant",
    "Selects & assesses manufacturers": "Sélectionne & évalue les fabricants",
    "Introduces both sides": "Met les deux parties en relation",
    "Mediates until agreement": "Facilite jusqu'à l'accord",
    "Your company": "Votre entreprise",
    "Drawings, quantities, lead time": "Plans, quantités, délai",
    "Orders & pays the manufacturer": "Commande & paie le fabricant",
    "Assessed partner": "Partenaire évalué",
    "Quotes you directly": "Vous chiffre en direct",
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
    "Based in France, ALTIS SALES is an independent B2B intermediary specializing in industrial sourcing and international business development.": "Intermédiaire B2B indépendant basé en France, ALTIS SALES facilite le sourcing industriel et le développement commercial international.",
    "We never buy, resell or invoice parts.": "Nous n'achetons, ne revendons et ne facturons jamais de pièces.",
    "Price, quality and delivery are agreed directly between buyer and manufacturer.": "Prix, qualité et livraison se décident directement entre acheteur et fabricant.",
    "We work with": "Nous travaillons avec",
    "Procurement and purchasing": "Les services achats",
    "Engineering and R&D": "Les bureaux d'études et la R&D",
    "Mold makers and plastics processors": "Les moulistes et plasturgistes",
    "Industrial manufacturers": "Les fabricants industriels",
    "Manufacturers seeking European customers": "Les fabricants qui cherchent des clients en Europe",
    // FAQ
    "Frequently asked questions": "Questions fréquentes",
    "Are you a manufacturer or a reseller?": "Êtes-vous fabricant ou revendeur ?",
    "Neither. We find, introduce and mediate. We don't make, buy or resell parts.": "Ni l'un ni l'autre. Nous trouvons, présentons et facilitons. Nous ne fabriquons, n'achetons et ne revendons pas de pièces.",
    "Who do I sign the contract with?": "Avec qui est signé le contrat ?",
    "How are you paid?": "Comment êtes-vous rémunérés ?",
    "How do you choose the manufacturers?": "Comment choisissez-vous les fabricants ?",
    "Will my drawings stay confidential?": "Mes plans restent-ils confidentiels ?",
    "Yes. Shared only with the manufacturers we introduce, under NDA if you wish.": "Oui. Ils ne sont transmis qu'aux fabricants présentés, sous accord de confidentialité si vous le souhaitez.",
    "Which files can I send?": "Quels fichiers puis-je envoyer ?",
    "PDF, DWG/DXF, STEP, IGES, STL, SolidWorks, photos or a sample. Large files via a transfer link.": "PDF, DWG/DXF, STEP, IGES, STL, SolidWorks, photos ou un échantillon. Les gros fichiers via un lien de transfert.",
    // Contact
    "Contact": "Contact",
    "An industrial project or a business opportunity? Let's talk.": "Un projet industriel ou une opportunité commerciale ? Parlons-en.",
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
    "CNC machining and tooling suppliers": "Fournisseurs en usinage CNC et en outillage",
    "We help manufacturers connect with industrial buyers and develop long-term business partnerships.": "Nous aidons les fabricants à trouver des acheteurs industriels et à développer des partenariats durables.",
    "I'm a buyer": "Je suis acheteur",
    "Presentation": "Présentation",
    "I'm a manufacturer": "Je suis fabricant",
    "Buyer search": "Recherche d'acheteurs",
    "Qualified buyers": "Acheteurs qualifiés",
    "I'm a manufacturer. Can you help me find industrial buyers?": "Je suis fabricant. Pouvez-vous m'aider à trouver des acheteurs industriels ?",
    "Yes. We help manufacturers identify qualified industrial buyers, develop business opportunities and establish long-term partnerships across Europe and beyond.": "Oui. Nous aidons les fabricants à identifier des acheteurs industriels qualifiés, à développer des opportunités d'affaires et à construire des partenariats durables, en Europe et au-delà.",
    "Contracts are generally signed directly between buyers and manufacturers. ALTIS SALES acts as an independent intermediary.": "Les contrats sont en général signés directement entre acheteurs et fabricants. ALTIS SALES intervient en tant qu'intermédiaire indépendant.",
    "Transparent sourcing fees and commercial commissions, agreed in advance according to the services provided: industrial sourcing for buyers, introductions and business development for manufacturers.": "Honoraires de sourcing et commissions commerciales transparents, convenus à l'avance selon les services fournis : sourcing industriel pour les acheteurs, mises en relation et développement commercial pour les fabricants.",
    "We assess manufacturers based on production capabilities, equipment, quality standards, references and project requirements.": "Nous évaluons les fabricants selon leurs capacités de production, leur parc machines, leurs standards qualité, leurs références et les exigences du projet.",
    "NDA if wanted": "Confidentialité si souhaitée",
    "Qualified industrial buyers": "Acheteurs industriels qualifiés",
    "In Europe and beyond": "En Europe et au-delà",
    "Manufacturers selected & assessed": "Fabricants sélectionnés & évalués",
    "Capabilities and references": "Capacités et références",
    "Your processes, machines, certifications": "Vos procédés, machines, certifications",
    "Presented to industrial buyers": "Présentés à des acheteurs industriels",
    "We put you in touch": "Nous vous mettons en contact",
    "Files shared under NDA": "Fichiers transmis sous confidentialité",
    "Contract between buyer & manufacturer": "Contrat entre acheteur & fabricant",
    "We mediate until you agree": "Médiation jusqu'à l'accord",
    "We identify manufacturers matching your technical requirements, quantities and lead times.": "Nous identifions des fabricants adaptés à vos besoins techniques, quantités et délais.",
    "We find the right manufacturer for your parts": "Nous trouvons le bon fabricant pour vos pièces",
    "We connect both sides and follow up until agreement": "Nous relions les deux parties et suivons jusqu'à l'accord",
    "New suppliers matched to your drawings, quantities and lead times": "De nouveaux fournisseurs adaptés à vos plans, quantités et délais",
    "Capabilities, equipment, quality and references checked for your project": "Capacités, équipements, qualité et références évalués pour votre projet",
    "A backup manufacturer to secure your supply": "Un fabricant de secours pour sécuriser vos approvisionnements",
    "We help manufacturers win new industrial customers": "Nous aidons les fabricants à gagner de nouveaux porteurs de projet",
    "Industrial buyers in Europe for manufacturers based abroad": "Des acheteurs industriels en Europe pour les fabricants étrangers",
    "We stay involved until buyer and manufacturer agree": "Nous restons présents jusqu'à l'accord entre acheteur et fabricant",
    "You sign, order and invoice directly with each other": "Vous signez, commandez et facturez directement entre vous",
    "No surprises: terms set in writing before we start": "Pas de surprise : conditions fixées par écrit avant de commencer",
    "Your drawings shared only under confidentiality": "Vos plans partagés uniquement sous confidentialité",
    "Tied to no manufacturer: we suggest the best fit": "Liés à aucun fabricant : nous proposons le plus adapté",
    "We work in both languages": "Nous travaillons dans les deux langues",
    "An independent business introducer based in France. We work in French and English.": "Apporteur d'affaires indépendant basé en France. Nous travaillons en français et en anglais.",
    "Business development": "Développement commercial",
    "For buyers: we find and assess the manufacturers that fit your parts.": "Pour les acheteurs : nous trouvons et évaluons les fabricants adaptés à vos pièces.",
    "For manufacturers: we open doors to industrial buyers in Europe and beyond.": "Pour les fabricants : nous ouvrons des portes auprès d'acheteurs industriels en Europe et au-delà.",
    "Never a reseller": "Jamais revendeur",
    "We never buy, resell or invoice parts. Price, quality and delivery are agreed directly between you.": "Nous n'achetons, ne revendons et ne facturons jamais de pièces. Prix, qualité et délais se décident directement entre vous.",
    "Precision CNC machining": "Usinage CNC de précision",
    "We connect buyers of machined parts with CNC workshops that match their drawings, materials and volumes.": "Nous mettons en relation les acheteurs de pièces usinées avec des ateliers CNC adaptés à leurs plans, matières et volumes.",
    "Buyers ask for": "Les acheteurs recherchent",
    "Suppliers we introduce": "Fournisseurs que nous présentons",
    "Milled and turned parts to drawing": "Pièces fraisées et tournées sur plan",
    "Prototypes to series": "Du prototype à la série",
    "A second source": "Une seconde source",
    "3–5 axis milling, turning": "Fraisage 3 à 5 axes, tournage",
    "Metals and technical plastics": "Métaux et plastiques techniques",
    "Verifiable quality and references": "Qualité et références vérifiables",
    "I'm a manufacturer in this field": "Je suis fabricant dans ce domaine",
    "We connect mold makers and plastics processors with manufacturers of mold components compatible with catalog standards.": "Nous mettons en relation moulistes et plasturgistes avec des fabricants de composants de moules compatibles avec les standards catalogue.",
    "Ejector pins, guide pillars, inserts": "Éjecteurs, colonnes de guidage, inserts",
    "Catalog-standard parts": "Pièces aux standards catalogue",
    "Replacements at short notice": "Remplacements dans des délais courts",
    "We connect production and maintenance teams with workshops for tooling, spare and one-off parts.": "Nous mettons en relation équipes de production et de maintenance avec des ateliers pour l'outillage, les pièces de rechange et les pièces unitaires.",
    "Our services": "Nos services",
    "Independent industrial business introducer": "Apporteur d'affaires industriel indépendant",
    "The right supplier": "Le bon fournisseur",
    "for your parts.": "pour vos pièces.",
    "The right clients": "Les bons clients",
    "for your workshop.": "pour votre atelier.",
    "Industrial sourcing: we find and assess CNC machining, precision and tooling suppliers matched to your drawings. You then contract directly.": "Sourcing industriel : nous trouvons et évaluons des fournisseurs en usinage CNC, précision et outillage adaptés à vos plans. Vous contractez ensuite en direct.",
    "Business development: we introduce your workshop to qualified industrial clients in Europe and beyond, until you agree.": "Développement commercial : nous présentons votre atelier à des porteurs de projet qualifiés, en Europe et au-delà, jusqu'à l'accord.",
    "Find a supplier": "Trouver un fournisseur",
    "Find new clients": "Trouver des clients",
    "I need a supplier": "Je cherche un fournisseur",
    "I'm a supplier": "Je suis fournisseur",
    "Clients": "Porteurs de projet",
    "Suppliers": "Fournisseurs",
    "Industrial companies": "Entreprises industrielles",
    "Order and pay the supplier directly": "Commandent et paient le fournisseur en direct",
    "Selects & assesses suppliers": "Sélectionne & évalue les fournisseurs",
    "CNC, precision & tooling workshops": "Ateliers CNC, précision & outillage",
    "Assessed for each project": "Évalués pour chaque projet",
    "Quote, produce, invoice, deliver": "Chiffrent, produisent, facturent, livrent",
    "Presented to industrial clients": "Présentés à des porteurs de projet",
    "Suppliers selected & assessed": "Fournisseurs sélectionnés & évalués",
    "Prospecting": "Prospection",
    "Qualified industrial clients": "Porteurs de projet qualifiés",
    "Clients ↔ suppliers": "Porteurs de projet ↔ fournisseurs",
    "We find the right supplier for your parts": "Nous trouvons le bon fournisseur pour vos pièces",
    "Suppliers assessed against project requirements": "Fournisseurs évalués selon les exigences du projet",
    "A backup supplier to secure your supply": "Un fournisseur de secours pour sécuriser vos approvisionnements",
    "We help suppliers win new industrial clients": "Nous aidons les fournisseurs à gagner de nouveaux porteurs de projet",
    "Industrial clients in Europe for suppliers based abroad": "Des porteurs de projet en Europe pour les fournisseurs étrangers",
    "We stay involved until both sides agree": "Nous restons présents jusqu'à l'accord des deux parties",
    "Tied to no supplier: we suggest the best fit": "Liés à aucun fournisseur : nous proposons le plus adapté",
    "What we do for you": "Ce que nous faisons pour vous",
    "We identify suppliers matching your technical requirements, quantities and lead times.": "Nous identifions des fournisseurs adaptés à vos exigences techniques, quantités et délais.",
    "Supplier sourcing: workshops matched to your parts, including a second source": "Recherche de fournisseurs : des ateliers adaptés à vos pièces, y compris une seconde source",
    "Quotation and order directly with the supplier": "Devis et commande en direct avec le fournisseur",
    "We help suppliers win industrial clients and build long-term partnerships.": "Nous aidons les fournisseurs à gagner des porteurs de projet et à bâtir des partenariats durables.",
    "Industrial client acquisition and European market entry": "Conquête de porteurs de projet et accès au marché européen",
    "Are you a supplier?": "Vous êtes fournisseur ?",
    "We also help CNC, precision and tooling workshops find industrial clients.": "Nous aidons aussi les ateliers CNC, de précision et d'outillage à trouver des porteurs de projet.",
    "See the supplier side": "Voir le côté fournisseur",
    "Looking for a supplier?": "Vous cherchez un fournisseur ?",
    "We also find and assess suppliers for industrial clients.": "Nous trouvons et évaluons aussi des fournisseurs pour les porteurs de projet.",
    "See the client side": "Voir le côté client",
    "Clients ask for": "Les porteurs de projet recherchent",
    "I work in this field": "Je travaille dans ce domaine",
    "We connect mold makers and plastics processors with suppliers of mold components compatible with catalog standards.": "Nous mettons en relation moulistes et plasturgistes avec des fournisseurs en composants de moules compatibles avec les standards catalogue.",
    "For clients: we find and assess the suppliers that fit your parts.": "Pour les porteurs de projet : nous trouvons et évaluons les fournisseurs adaptés à vos pièces.",
    "For suppliers: we open doors to industrial clients in Europe and beyond.": "Pour les fournisseurs : nous ouvrons des portes auprès de porteurs de projet en Europe et au-delà.",
    "Suppliers seeking European clients": "Les fournisseurs qui cherchent des clients en Europe",
    "I'm a supplier. Can you help me find industrial clients?": "Je suis fournisseur. Pouvez-vous m'aider à trouver des porteurs de projet ?",
    "Yes. We help suppliers identify qualified industrial clients, develop business opportunities and build long-term partnerships across Europe and beyond.": "Oui. Nous aidons les fournisseurs à identifier des porteurs de projet qualifiés, à développer des opportunités commerciales et à bâtir des partenariats durables en Europe et au-delà.",
    "What do you need from me?": "De quoi avez-vous besoin ?",
    "Your company presentation: processes, machines, certifications and references.": "Votre présentation : procédés, machines, certifications et références.",
    "Contracts are generally signed directly between clients and suppliers. ALTIS SALES acts as an independent intermediary.": "Les contrats sont en général signés directement entre porteurs de projet et fournisseurs. ALTIS SALES intervient en tant qu'intermédiaire indépendant.",
    "How do you choose the suppliers?": "Comment choisissez-vous les fournisseurs ?",
    "We assess suppliers based on production capabilities, equipment, quality standards, references and project requirements.": "Nous évaluons les fournisseurs selon leurs capacités de production, équipements, normes qualité, références et les exigences du projet.",
    "Yes. Shared only with the suppliers we introduce, under NDA if you wish.": "Oui. Transmis uniquement aux fournisseurs que nous présentons, sous accord de confidentialité si vous le souhaitez.",
    "looking for a supplier": "à la recherche d'un fournisseur",
    "a supplier": "fournisseur",
    "We connect clients who need machined parts with CNC workshops that match their drawings, materials and volumes.": "Nous mettons en relation les porteurs de projet en quête de pièces usinées avec des ateliers CNC adaptés à leurs plans, matières et volumes.",
    "Transparent sourcing fees and commercial commissions, agreed in advance according to the services provided: industrial sourcing for clients, introductions and business development for suppliers.": "Honoraires de sourcing et commissions commerciales transparents, convenus à l'avance selon les services fournis : sourcing industriel pour les porteurs de projet, mises en relation et développement commercial pour les fournisseurs.",
    "CNC, precision and tooling suppliers, found and assessed for your drawings.": "Des fournisseurs CNC, précision et outillage, trouvés et évalués pour vos plans.",
    "We introduce you to qualified industrial clients, in Europe and beyond.": "Nous vous présentons des porteurs de projet qualifiés, en Europe et au-delà.",
    "CNC machining": "Usinage CNC",
    "Milled and turned parts to drawing, from prototypes to series.": "Pièces fraisées et tournées sur plan, du prototype à la série.",
    "Ejector pins, guide pillars, inserts: catalog standards and replacements.": "Éjecteurs, colonnes de guidage, inserts : standards catalogue et remplacements.",
    "Fixtures, jigs, gauges, spare parts and parts copied from a sample.": "Montages, gabarits, calibres, pièces de rechange et pièces copiées d'après échantillon.",
    "3–5 axis": "3 à 5 axes",
    "Metals": "Métaux",
    "Technical plastics": "Plastiques techniques",
    "Tool steels": "Aciers à outils",
    "One-offs": "Pièces unitaires",
    "Small series": "Petites séries",
    "Another process? Ask us: we also search beyond these fields.": "Un autre procédé ? Demandez-nous : nous cherchons aussi au-delà de ces domaines.",
    "Your workshop works in one of these fields? We present it to industrial clients.": "Votre atelier travaille dans l'un de ces domaines ? Nous le présentons à des porteurs de projet.",
    "Present my workshop": "Présenter mon atelier",
    "Fields where we make introductions": "Domaines où nous mettons en relation",
    "We connect clients who need milled or turned parts with CNC workshops.": "Nous mettons en relation les clients en quête de pièces fraisées ou tournées avec des ateliers CNC.",
    "engineering, maintenance, industrial manufacturers": "bureaux d'études, maintenance, fabricants industriels",
    "3–5 axis milling and turning workshops": "ateliers de fraisage 3 à 5 axes et de tournage",
    "We connect mold makers and plastics processors with mold component suppliers.": "Nous mettons en relation moulistes et plasturgistes avec des fournisseurs de composants de moules.",
    "makers of ejectors, guide pillars, inserts": "fabricants d'éjecteurs, colonnes de guidage, inserts",
    "We connect production and maintenance teams with tooling workshops.": "Nous mettons en relation équipes de production et de maintenance avec des ateliers d'outillage.",
    "production and maintenance teams": "équipes de production et de maintenance",
    "fixtures, spare parts, reverse engineering": "montages, pièces de rechange, rétro-ingénierie",
    "We introduce you to": "Nous vous présentons",
    "We find you": "Nous vous trouvons",
    "New projects": "De nouveaux projets",
    "We bring you qualified industrial projects, in Europe and beyond.": "Nous vous apportons des projets industriels qualifiés, en Europe et au-delà.",
    "Find new projects": "Trouver des projets",
    "Project owners": "Porteurs de projet",
    "Presented to qualified project owners": "Présentés à des porteurs de projet qualifiés",
    "Qualified project owners": "Porteurs de projet qualifiés",
    "Project owners ↔ suppliers": "Porteurs de projet ↔ fournisseurs",
    "We help suppliers win new projects": "Nous aidons les fournisseurs à gagner de nouveaux projets",
    "Project owners in Europe for suppliers based abroad": "Des porteurs de projet en Europe pour les fournisseurs étrangers",
    "We help suppliers win new projects and build long-term partnerships.": "Nous aidons les fournisseurs à gagner de nouveaux projets et à bâtir des partenariats durables.",
    "New project owners and European market entry": "Nouveaux porteurs de projet et accès au marché européen",
    "We also help CNC, precision and tooling workshops find new projects.": "Nous aidons aussi les ateliers CNC, de précision et d'outillage à trouver de nouveaux projets.",
    "We also find and assess suppliers for project owners.": "Nous trouvons et évaluons aussi des fournisseurs pour les porteurs de projet.",
    "See the project owner side": "Voir le côté porteur de projet",
    "We connect project owners needing milled or turned parts with CNC workshops.": "Nous mettons en relation les porteurs de projet en quête de pièces fraisées ou tournées avec des ateliers CNC.",
    "Your workshop works in one of these fields? We present it to qualified project owners.": "Votre atelier travaille dans l'un de ces domaines ? Nous le présentons à des porteurs de projet qualifiés.",
    "For project owners: we find and assess the suppliers that fit your parts.": "Pour les porteurs de projet : nous trouvons et évaluons les fournisseurs adaptés à vos pièces.",
    "For suppliers: we open doors to new projects in Europe and beyond.": "Pour les fournisseurs : nous ouvrons des portes vers de nouveaux projets en Europe et au-delà.",
    "Suppliers seeking projects in Europe": "Les fournisseurs qui cherchent des projets en Europe",
    "I'm a supplier. Can you help me find new projects?": "Je suis fournisseur. Pouvez-vous m'aider à trouver de nouveaux projets ?",
    "Yes. We help suppliers identify qualified project owners, develop business opportunities and build long-term partnerships across Europe and beyond.": "Oui. Nous aidons les fournisseurs à identifier des porteurs de projet qualifiés, à développer des opportunités commerciales et à bâtir des partenariats durables en Europe et au-delà.",
    "Contracts are generally signed directly between project owners and suppliers. ALTIS SALES acts as an independent intermediary.": "Les contrats sont en général signés directement entre porteurs de projet et fournisseurs. ALTIS SALES intervient en tant qu'intermédiaire indépendant.",
    "Transparent sourcing fees and commercial commissions, agreed in advance according to the services provided: industrial sourcing for project owners, introductions and business development for suppliers.": "Honoraires de sourcing et commissions commerciales transparents, convenus à l'avance selon les services fournis : sourcing industriel pour les porteurs de projet, mises en relation et développement commercial pour les fournisseurs.",
    "ALTIS SALES is an independent business introducer based in France.": "ALTIS SALES est un apporteur d'affaires indépendant basé en France.",
    "Tied to no supplier or project owner: we suggest the best fit for each project.": "Liés à aucun fournisseur ni porteur de projet : nous proposons le meilleur choix pour chaque projet.",
    "One contact, start to finish": "Un seul interlocuteur, du début à la fin",
    "The same person follows your project from the first exchange to the agreement.": "La même personne suit votre projet, du premier échange à l'accord.",
    "Europe and beyond": "Europe et international",
    "Introductions in France, across Europe and internationally, in French or English.": "Des mises en relation en France, en Europe et à l'international, en français ou en anglais.",
    "A project owner and a supplier shaking hands after agreeing": "Un porteur de projet et un fournisseur se serrent la main après un accord",
    "Request an introduction": "Demander une mise en relation",
    "The contract is signed directly between the project owner and the supplier. ALTIS SALES prepares the ground: we clarify the requirements, align both sides on price, quality and lead times, and stay involved until you agree.": "Le contrat est signé directement entre le porteur de projet et le fournisseur. ALTIS SALES prépare le terrain : nous clarifions le besoin, alignons les deux parties sur le prix, la qualité et les délais, et restons présents jusqu'à l'accord.",
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
