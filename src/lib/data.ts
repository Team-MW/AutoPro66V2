export const PHONE = "06 61 58 41 42";
export const PHONE_HREF = "tel:+33661584142";

// Replace with the "Ask for reviews" link from the Google Business Profile (https://g.page/r/...)
export const GOOGLE_REVIEW_URL = "https://www.google.com/search?q=Auto+Pro+66+Saint-Cyprien";

// Placeholder reviews: replace with real Google reviews before going live (fake reviews are illegal in France).
export const reviews = [
  { name: "Sophie M.", date: "il y a 2 semaines", text: "Julien est venu changer mes plaquettes directement devant chez moi à Saint-Cyprien. Ponctuel, efficace et très pédagogue. Je recommande !" },
  { name: "Thierry B.", date: "il y a 1 mois", text: "En panne de batterie avec notre camping-car sur l'aire d'Argelès. Intervention le jour même, prix honnête. Merci encore !" },
  { name: "Nadia R.", date: "il y a 1 mois", text: "Vidange et révision faites pendant que je télétravaillais. Plus besoin de perdre une demi-journée au garage. Super service." },
  { name: "Laurent P.", date: "il y a 2 mois", text: "Diagnostic clair sur un voyant moteur, explications au top et réparation rapide. Un vrai pro, je garde le numéro." },
  { name: "Céline G.", date: "il y a 3 mois", text: "Très sympa et arrangeant. Il m'a expliqué tout ce qu'il faisait et le travail est propre. 5 étoiles méritées." },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  includes: string[];
  signs: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "entretien-vidange",
    title: "Entretien & vidange",
    short: "Révision complète et entretien général : huile, filtres, bougies et niveaux, faits chez vous.",
    intro:
      "Un entretien régulier, c'est la meilleure façon d'éviter les grosses pannes. Julien réalise la vidange et la révision de votre véhicule directement devant chez vous, avec des huiles et pièces conformes aux préconisations constructeur.",
    includes: [
      "Vidange huile moteur et remplacement du filtre à huile",
      "Remplacement des filtres à air, habitacle et carburant",
      "Remplacement des bougies d'allumage ou de préchauffage",
      "Contrôle et mise à niveau des liquides (refroidissement, lave-glace, direction)",
      "Contrôle visuel des courroies, durites, pneus et éclairage",
      "Remise à zéro de l'indicateur d'entretien",
    ],
    signs: [
      "Le témoin d'entretien s'allume au tableau de bord",
      "Votre dernière vidange date de plus d'un an ou 15 000 km",
      "Le moteur consomme ou fume plus que d'habitude",
    ],
    faq: [
      {
        q: "Est-ce que ça garde ma garantie constructeur ?",
        a: "Oui. Depuis la réglementation européenne, vous pouvez faire entretenir votre véhicule par le professionnel de votre choix, tant que les préconisations constructeur sont respectées.",
      },
      {
        q: "Où sont jetés l'huile et les filtres usagés ?",
        a: "Julien récupère tous les déchets et les dépose dans une filière de recyclage agréée. Rien ne reste chez vous.",
      },
    ],
  },
  {
    slug: "depannage",
    title: "Dépannage",
    short: "Véhicule en panne chez vous, au travail ou sur une aire : Julien vient sur place.",
    intro:
      "Votre véhicule ne démarre plus ou s'est arrêté là où il est garé ? Auto Pro 66 se déplace pour le dépanner sur place, du lundi au vendredi. Julien diagnostique la panne et la répare quand elle peut l'être sans atelier.",
    includes: [
      "Déplacement sur le lieu de la panne : domicile, travail, parking ou aire de camping-car",
      "Diagnostic de la panne immobilisante",
      "Réparation sur place quand la pièce et l'accès le permettent",
      "Batterie, démarrage et pannes courantes traités dans la foulée",
      "Explication claire si l'intervention doit être reportée ou faite en atelier",
    ],
    signs: [
      "Le véhicule refuse de démarrer",
      "Il s'est arrêté et ne repart plus",
      "Un voyant s'allume et la voiture passe en mode dégradé",
      "Vous êtes en vacances avec un camping-car immobilisé sur une aire",
    ],
    faq: [
      {
        q: "Faites-vous du remorquage ?",
        a: "Non. Julien vient avec son véhicule équipé et répare sur place. Il ne dépanne pas par remorquage vers un garage.",
      },
      {
        q: "Intervenez-vous le week-end ou la nuit ?",
        a: "Non. Le dépannage se fait du lundi au vendredi, de 8h à 18h. Appelez dès que la panne se déclare pour être calé au plus vite.",
      },
    ],
  },
  {
    slug: "freinage",
    title: "Freinage",
    short: "Plaquettes, disques, liquide de frein. Contrôle et remplacement sur place.",
    intro:
      "Les freins sont l'élément de sécurité numéro un de votre véhicule. Julien contrôle l'usure de l'ensemble du système et remplace les pièces nécessaires sur place, sans que vous ayez à rouler avec des freins fatigués jusqu'à un garage.",
    includes: [
      "Remplacement des plaquettes de frein avant et arrière",
      "Remplacement des disques de frein",
      "Remplacement des mâchoires et tambours",
      "Purge et remplacement du liquide de frein",
      "Contrôle des flexibles, étriers et du frein à main",
    ],
    signs: [
      "Bruit de grincement ou de frottement au freinage",
      "La pédale de frein est molle ou s'enfonce",
      "Le véhicule tire d'un côté quand vous freinez",
      "Vibrations dans le volant ou la pédale",
    ],
    faq: [
      {
        q: "Tous les combien changer les plaquettes ?",
        a: "En moyenne tous les 30 000 à 40 000 km, mais cela dépend beaucoup de votre conduite. Un contrôle permet de savoir précisément où vous en êtes.",
      },
      {
        q: "Combien de temps dure l'intervention ?",
        a: "Comptez environ 1 heure pour un remplacement de plaquettes sur un essieu, un peu plus si les disques sont aussi à changer.",
      },
    ],
  },
  {
    slug: "diagnostic",
    title: "Diagnostic électronique",
    short: "Recherche de panne : lecture des défauts à la valise et identification du problème.",
    intro:
      "Un voyant allumé au tableau de bord ? Julien se déplace avec sa valise de diagnostic multimarque pour lire les codes défauts, identifier l'origine du problème et vous expliquer clairement ce qu'il faut faire.",
    includes: [
      "Lecture et effacement des codes défauts",
      "Diagnostic moteur, ABS, airbag, boîte de vitesses",
      "Contrôle des capteurs et sondes",
      "Recherche de panne électrique",
      "Explication claire du problème et devis avant réparation",
    ],
    signs: [
      "Voyant moteur, ABS ou airbag allumé",
      "Perte de puissance ou passage en mode dégradé",
      "Ratés, à-coups ou ralenti instable",
    ],
    faq: [
      {
        q: "Le diagnostic suffit-il à réparer ?",
        a: "Le diagnostic identifie la panne. Dans la majorité des cas, la réparation peut ensuite être faite sur place, le jour même ou lors d'un second passage avec la pièce.",
      },
    ],
  },
  {
    slug: "batterie-demarrage",
    title: "Batterie & démarrage",
    short: "Test, remplacement de batterie, démarreur et alternateur.",
    intro:
      "Votre véhicule ne démarre plus ? C'est précisément là qu'un mécanicien à domicile prend tout son sens. Julien vient tester votre circuit de charge et remplace la pièce défaillante sur place.",
    includes: [
      "Test de la batterie et du circuit de charge",
      "Remplacement de la batterie (y compris Start & Stop)",
      "Remplacement du démarreur",
      "Remplacement de l'alternateur",
      "Recherche de consommation anormale à l'arrêt",
    ],
    signs: [
      "Le moteur tourne lentement au démarrage ou plus du tout",
      "Voyant batterie allumé en roulant",
      "La batterie se décharge en quelques jours",
    ],
    faq: [
      {
        q: "Ma voiture ne démarre pas, pouvez-vous venir ?",
        a: "Oui, c'est l'intervention type. Appelez Julien en décrivant les symptômes : il vous dira rapidement s'il peut intervenir et quand.",
      },
    ],
  },
  {
    slug: "distribution-embrayage",
    title: "Courroies & embrayage",
    short: "Distribution, courroie d'accessoires et embrayage, selon le véhicule.",
    intro:
      "Certaines interventions plus lourdes peuvent aussi être réalisées à domicile selon le modèle de votre véhicule et l'accès disponible. Julien évalue la faisabilité avec vous avant de se déplacer.",
    includes: [
      "Remplacement de la courroie d'accessoires et du galet",
      "Remplacement du kit de distribution et pompe à eau",
      "Remplacement du kit d'embrayage (selon véhicule)",
      "Contrôle des supports moteur",
    ],
    signs: [
      "Sifflement ou claquement côté moteur",
      "Échéance de distribution atteinte (voir carnet d'entretien)",
      "La pédale d'embrayage patine ou devient dure",
    ],
    faq: [
      {
        q: "Est-ce faisable sur un parking ?",
        a: "Il faut un sol plat et un minimum d'espace. Julien vous le confirme au téléphone selon votre véhicule et votre lieu de stationnement.",
      },
    ],
  },
  {
    slug: "pneus-suspension",
    title: "Suspension & direction",
    short: "Amortisseurs, rotules, biellettes, silentblocs.",
    intro:
      "Une suspension usée dégrade la tenue de route et use vos pneus prématurément. Julien contrôle les trains roulants et remplace les éléments fatigués.",
    includes: [
      "Remplacement des amortisseurs et coupelles",
      "Remplacement des rotules et biellettes",
      "Remplacement des silentblocs",
      "Contrôle des roulements de roue",
    ],
    signs: [
      "Claquements sur les bosses ou dos-d'âne",
      "Usure irrégulière des pneus",
      "Le véhicule rebondit ou tangue en virage",
    ],
    faq: [
      {
        q: "Faut-il faire la géométrie après ?",
        a: "Après certaines pièces de direction, un réglage du parallélisme est conseillé. Julien vous l'indique si c'est nécessaire.",
      },
    ],
  },
];

export const faqs = {
  home: [
    {
      q: "Qu'est-ce qu'un mécanicien à domicile ?",
      a: "C'est un mécanicien qui n'a pas d'atelier et qui se déplace avec son matériel là où se trouve votre véhicule : chez vous, sur votre lieu de travail ou sur une aire de camping-car. Auto Pro 66 intervient ainsi autour de Saint-Cyprien et Perpignan.",
    },
    {
      q: "Quels véhicules prenez-vous en charge ?",
      a: "Voitures particulières toutes marques (essence, diesel, hybride pour la partie mécanique), petits utilitaires et camping-cars sur base de fourgon (Fiat Ducato, Ford Transit, Renault Master, Mercedes Sprinter…).",
    },
    {
      q: "Est-ce moins cher qu'un garage ?",
      a: "Sans atelier à payer, les frais de structure sont réduits. Vous économisez aussi le temps et les trajets pour déposer et récupérer votre véhicule. Julien vous donne le prix au téléphone avant de venir.",
    },
    {
      q: "Quels sont vos horaires ?",
      a: "Auto Pro 66 intervient du lundi au vendredi, de 8h à 18h. Vous pouvez appeler ou envoyer un SMS au 06 61 58 41 42.",
    },
    {
      q: "Dans quelles villes intervenez-vous ?",
      a: "Principalement Saint-Cyprien, Perpignan, Canet-en-Roussillon, Argelès-sur-Mer, Elne et les communes voisines des Pyrénées-Orientales (66).",
    },
  ],
  services: [
    {
      q: "Quelles réparations peuvent être faites à domicile ?",
      a: "La grande majorité : révision, entretien, distribution, embrayage, dépannage, freins, suspension, batterie et recherche de panne. Seules les opérations nécessitant un pont élévateur ou un banc spécifique doivent être faites en garage.",
    },
    {
      q: "Fournissez-vous les pièces ?",
      a: "Oui, Julien commande des pièces de qualité équivalente à l'origine. Vous pouvez aussi fournir vos propres pièces après en avoir parlé avec lui.",
    },
    {
      q: "Faut-il un endroit particulier pour l'intervention ?",
      a: "Un sol plat et un minimum d'espace autour du véhicule suffisent : une cour, une allée, un parking privé ou un emplacement de camping.",
    },
    {
      q: "Est-ce que vous faites un devis avant ?",
      a: "Oui. Après avoir échangé sur le problème, Julien vous annonce le prix de l'intervention. Aucun travail supplémentaire n'est fait sans votre accord.",
    },
  ],
  campingCars: [
    {
      q: "Pouvez-vous intervenir sur une aire de camping-car ?",
      a: "Oui, c'est l'une des spécialités d'Auto Pro 66. Julien se déplace sur les aires et campings de Saint-Cyprien, Argelès, Canet et des environs.",
    },
    {
      q: "Réparez-vous la cellule du camping-car ?",
      a: "Non. Julien intervient sur la mécanique du porteur (moteur, freins, batterie moteur, courroies, suspension). Le gaz, l'eau et l'électricité de la cellule relèvent d'un spécialiste.",
    },
    {
      q: "Je suis en vacances et ne connais personne dans le 66, comment faire ?",
      a: "Appelez simplement le 06 61 58 41 42 en indiquant le modèle du porteur et le nom de votre aire ou camping. Julien vous dit rapidement quand il peut passer.",
    },
    {
      q: "Mon camping-car est trop lourd pour un garage classique, est-ce un problème ?",
      a: "Non, puisque l'intervention se fait sur place, la taille et le poids du véhicule ne posent pas de problème d'accès à un atelier.",
    },
  ],
  zone: [
    {
      q: "Y a-t-il des frais de déplacement ?",
      a: "Selon la distance, des frais de déplacement peuvent s'appliquer. Ils vous sont toujours annoncés au téléphone avant l'intervention.",
    },
    {
      q: "Intervenez-vous à Perpignan centre ?",
      a: "Oui, à condition de pouvoir stationner le véhicule dans un endroit adapté (parking, cour, garage privé).",
    },
    {
      q: "Ma commune n'est pas dans la liste, pouvez-vous venir ?",
      a: "La liste n'est pas exhaustive. Appelez Julien pour vérifier s'il peut se déplacer chez vous.",
    },
  ],
  apropos: [
    {
      q: "Qui est derrière Auto Pro 66 ?",
      a: "Julien, mécanicien installé dans les Pyrénées-Orientales, qui a choisi de travailler en mobile pour être au plus près de ses clients.",
    },
    {
      q: "Quels avis laissent les clients ?",
      a: "Auto Pro 66 a une note de 4,8/5 sur Google avec 15 avis, saluant le sérieux, la ponctualité et la clarté des explications.",
    },
    {
      q: "Avec quel matériel travaillez-vous ?",
      a: "Un véhicule d'intervention équipé de l'outillage nécessaire, d'une valise de diagnostic multimarque et de pièces d'usure courantes.",
    },
  ],
  contact: [
    {
      q: "Comment prendre rendez-vous ?",
      a: "Par téléphone ou SMS au 06 61 58 41 42, du lundi au vendredi de 8h à 18h.",
    },
    {
      q: "Julien ne répond pas, que faire ?",
      a: "Il est probablement en intervention. Laissez un message avec votre nom, votre véhicule et le problème : il vous rappelle dès que possible.",
    },
    {
      q: "Quel délai pour une intervention ?",
      a: "Cela dépend du planning et de la disponibilité des pièces. Pour les pannes immobilisantes, Julien fait au plus vite.",
    },
    {
      q: "Comment payer ?",
      a: "Le règlement se fait à la fin de l'intervention. Demandez à Julien les moyens de paiement acceptés lors de la prise de rendez-vous.",
    },
  ],
};

export const villes = [
  "Saint-Cyprien",
  "Perpignan",
  "Canet-en-Roussillon",
  "Argelès-sur-Mer",
  "Elne",
  "Alénya",
  "Latour-Bas-Elne",
  "Saint-Nazaire",
  "Cabestany",
  "Bompas",
];
