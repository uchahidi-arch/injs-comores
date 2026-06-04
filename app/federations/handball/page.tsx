import FederationPage from '@/components/ui/FederationPage'
export const metadata = { title: "Handball — INJS Comores" }
export default function HandballPage() {
  return <FederationPage data={{
    code: "FCH", slug: "handball", titre: "Handball",
    nomComplet: "Fédération Comorienne de Handball",
    president: "Laithi Bacar Kassim", fondation: "1995",
    image: "/accueil.jpg",
    presentation: [
      "Le handball est un sport collectif en plein développement aux Comores. La fédération s'appuie sur un réseau de clubs actifs à Moroni, Mutsamudu et Fomboni pour structurer la pratique.",
      "La discipline ambitionne de se qualifier pour les prochains championnats africains et de réaliser une belle performance lors des JIOI 2027 à domicile.",
    ],
    athletes: [
      { nom: "Abdou Bacar", discipline: "Pivot", niveau: "National" },
      { nom: "Sitti Combo", discipline: "Ailière gauche (F)", niveau: "National" },
    ],
    palmares: [
      { annee: "2023", competition: "JIOI Madagascar", resultat: "Participation" },
      { annee: "2019", competition: "JIOI Maurice", resultat: "Participation" },
    ],
  }} />
}