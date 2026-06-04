import FederationPage from '@/components/ui/FederationPage'
export const metadata = { title: "Basketball — INJS Comores" }
export default function BasketballPage() {
  return <FederationPage data={{
    code: "FCBB", slug: "basketball", titre: "Basketball",
    nomComplet: "Fédération Comorienne de Basketball",
    president: "Djinti Ahamada", fondation: "1995",
    image: "/accueil.jpg",
    presentation: [
      "Le basketball est en plein essor aux Comores. Pratiqué majoritairement à Moroni et dans les principales villes d'Anjouan, il attire une nouvelle génération de joueurs formés dans les académies scolaires et les clubs affiliés.",
      "La Fédération Comorienne de Basketball organise chaque année deux championnats nationaux — masculin et féminin — ainsi que des tournois inter-îles pour détecter les talents.",
    ],
    athletes: [
      { nom: "Moussa Abdallah", discipline: "Pivot", niveau: "National" },
      { nom: "Said Madi Boina", discipline: "Meneur de jeu", niveau: "National" },
      { nom: "Nadjima Youssouf", discipline: "Ailière (F)", niveau: "National" },
    ],
    palmares: [
      { annee: "2023", competition: "JIOI Madagascar", resultat: "Participation" },
      { annee: "2019", competition: "JIOI Maurice", resultat: "Participation" },
    ],
  }} />
}