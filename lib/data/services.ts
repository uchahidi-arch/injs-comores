export type ServiceStatus = 'live' | 'soon'

export interface Service {
  num: string
  category: string
  icon: string
  title: string
  description: string
  status: ServiceStatus
  statusLabel: string
  href: string
}

export const services: Service[] = [
  {
    num: '01',
    category: 'Infrastructures',
    icon: 'CalendarCheck',
    title: 'Réserver une infrastructure nationale',
    description:
      "Stades, gymnases, dojos et terrains gérés par l'INJS. Planning visible en temps réel. Les écoles réservent leurs créneaux EPS, les clubs leurs entraînements, les fédérations leurs compétitions.",
    status: 'live',
    statusLabel: 'Disponible',
    href: '/services/infrastructure',
  },
  {
    num: '02',
    category: 'Formations',
    icon: 'GraduationCap',
    title: "S'inscrire à une formation officielle",
    description:
      "Catalogue des stages INJS — arbitres, entraîneurs, éducateurs sportifs, secouristes. Inscription en ligne et diplômes numériques officiels délivrés directement sur votre profil INJS.",
    status: 'live',
    statusLabel: 'Disponible',
    href: '/services/formations',
  },
  {
    num: '03',
    category: 'Licences',
    icon: 'IdCard',
    title: 'Demander ou renouveler une licence sportive',
    description:
      "La Carte INJS est le passeport sportif officiel de chaque athlète comorien. Certifiée, horodatée et vérifiable instantanément. Obligatoire pour représenter les Comores en compétition.",
    status: 'soon',
    statusLabel: 'Disponible à la rentrée',
    href: '/services/licences',
  },
  {
    num: '04',
    category: 'Démarches administratives',
    icon: 'FileShield',
    title: 'Déposer une demande officielle',
    description:
      "Agrément de club, demande de subvention avec dépôt de bilan obligatoire, autorisation d'organiser un événement sportif. Traitement dématérialisé, traçable et signé numériquement.",
    status: 'soon',
    statusLabel: 'Disponible à la rentrée',
    href: '/services/demarches',
  },
]
