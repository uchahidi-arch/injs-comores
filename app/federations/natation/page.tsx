import FederationPage from '@/components/ui/FederationPage'
export const metadata = { title: "Natation — INJS Comores" }
export default function NatationPage() {
  return <FederationPage data={{
    code: "FCN", slug: "natation", titre: "Natation",
    nomComplet: "Fédération Comorienne de Natation",
    president: "Halifa Mlamali", fondation: "2005",
    image: "/accueil.jpg",
    presentation: [
      "Paradoxe d'un pays insulaire, la natation de compétition reste une discipline en développement aux Comores. La fédération travaille à démocratiser la pratique en piscine depuis l'ouverture de la Piscine Olympique de Moroni.",
      "Les JIOI 2027 constituent une opportunité unique : accueillir les compétitions sur le sol national permettra de susciter de nouvelles vocations et d'accélérer la formation des nageurs de haut niveau.",
    ],
    athletes: [
      { nom: "Toufiki Ahmed", discipline: "100m nage libre", niveau: "International" },
      { nom: "Anziza M'Changama", discipline: "200m dos", niveau: "International" },
    ],
    palmares: [
      { annee: "2023", competition: "JIOI Madagascar", resultat: "1 bronze" },
      { annee: "2019", competition: "JIOI Maurice", resultat: "Participation" },
    ],
  }} />
}