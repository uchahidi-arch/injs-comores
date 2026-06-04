import FederationPage from '@/components/ui/FederationPage'
export const metadata = { title: "Judo — INJS Comores" }
export default function JudoPage() {
  return <FederationPage data={{
    code: "FCJ", slug: "judo", titre: "Judo",
    nomComplet: "Fédération Comorienne de Judo",
    president: "José Chakrina Nourdine Abodo", fondation: "1985",
    image: "/accueil.jpg",
    presentation: [
      "Le judo est l'une des disciplines sportives les plus structurées aux Comores. Pratiqué depuis les années 1980, il compte parmi les sports où les Comores ont le mieux performé au niveau régional, notamment aux Jeux des Îles de l'Océan Indien.",
      "La Fédération Comorienne de Judo encadre la formation des jeunes judokas sur les trois îles, organise les championnats nationaux par catégorie et sélectionne les athlètes pour les compétitions africaines et les Jeux des Îles.",
    ],
    athletes: [
      { nom: "Nassuf Abdallah", discipline: "Moins de 66kg", niveau: "International" },
      { nom: "Houmadi Combo", discipline: "Moins de 73kg", niveau: "International" },
      { nom: "Mariama Moussa", discipline: "Moins de 52kg", niveau: "National" },
    ],
    palmares: [
      { annee: "2023", competition: "JIOI Madagascar", resultat: "2 médailles de bronze" },
      { annee: "2019", competition: "JIOI Maurice", resultat: "1 argent, 2 bronzes" },
      { annee: "2015", competition: "JIOI La Réunion", resultat: "3 bronzes" },
    ],
  }} />
}