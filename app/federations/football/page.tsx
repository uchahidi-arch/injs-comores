import FederationPage from '@/components/ui/FederationPage'
export const metadata = { title: "Football — INJS Comores" }
export default function FootballPage() {
  return <FederationPage data={{
    code: "FFC", slug: "football", titre: "Football",
    nomComplet: "Fédération Comorienne de Football",
    president: "Said Ali Said Athouman", fondation: "1979",
    image: "/accueil.jpg",
    presentation: [
      "Le football est le sport roi aux Comores. Pratiqué sur les trois îles, il mobilise des milliers de licenciés et passionne l'ensemble de la population comorienne. La Fédération Comorienne de Football (FFC) organise les championnats nationaux, les coupes et les sélections nationales.",
      "Les Comores ont réalisé un exploit historique en se qualifiant pour la Coupe d'Afrique des Nations 2021, première participation de leur histoire à une phase finale continentale majeure.",
    ],
    athletes: [
      { nom: "El Fardou Ben Nabouhane", discipline: "Attaquant", niveau: "International" },
      { nom: "Youssouf M'Changama", discipline: "Milieu de terrain", niveau: "International" },
      { nom: "Ali Ahamada", discipline: "Gardien de but", niveau: "International" },
      { nom: "Nassuf Abdallah", discipline: "Défenseur", niveau: "National" },
    ],
    palmares: [
      { annee: "2021", competition: "Coupe d'Afrique des Nations", resultat: "1/8 de finale — historique" },
      { annee: "2022", competition: "CAN 2023 — Qualifications", resultat: "Qualifié" },
      { annee: "2019", competition: "COSAFA Cup", resultat: "Participation" },
    ],
  }} />
}