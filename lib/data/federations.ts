export type FedStatus = 'ok' | 'pending'

export interface Federation {
  code: string
  name: string
  disciplines: string
  status: FedStatus
  jioi: boolean
  slug: string
}

export const federations: Federation[] = [
  {
    code: 'FCF',
    name: 'Fédération Comorienne de Football',
    disciplines: 'Football · Futsal',
    status: 'ok',
    jioi: true,
    slug: 'football',
  },
  {
    code: 'FCA',
    name: "Fédération Comorienne d'Athlétisme",
    disciplines: 'Course · Saut · Lancer',
    status: 'ok',
    jioi: true,
    slug: 'athletisme',
  },
  {
    code: 'FCB',
    name: 'Fédération Comorienne de Boxe',
    disciplines: 'Boxe anglaise · Kick-boxing',
    status: 'ok',
    jioi: true,
    slug: 'boxe',
  },
  {
    code: 'FCBK',
    name: 'Fédération Comorienne de Basketball',
    disciplines: 'Basketball 5×5 · 3×3',
    status: 'ok',
    jioi: true,
    slug: 'basketball',
  },
  {
    code: 'FCE',
    name: "Fédération Comorienne d'Échecs",
    disciplines: 'Échecs classique · Blitz · Rapide',
    status: 'pending',
    jioi: false,
    slug: 'echecs',
  },
  {
    code: 'FCJ',
    name: 'Fédération Comorienne de Judo',
    disciplines: 'Judo · Arts martiaux',
    status: 'pending',
    jioi: false,
    slug: 'judo',
  },
]
