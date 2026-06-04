import FederationPage from '@/components/ui/FederationPage'
export const metadata = { title: "Boxe — INJS Comores" }
export default function BoxePage() {
  return <FederationPage data={{
    code: "FCB", slug: "boxe", titre: "Boxe",
    nomComplet: "Fédération Comorienne de Boxe",
    president: "Loukman Azali", fondation: "1990",
    image: "/accueil.jpg",
    presentation: [
      "La boxe comorienne connaît un développement progressif depuis les années 1990. La Fédération Comorienne de Boxe structure la pratique amateur sur les trois îles et œuvre pour l'émergence de champions capables de représenter dignement les Comores à l'international.",
      "Les entraînements se déroulent principalement au Gymnase National de Moroni. La fédération organise annuellement un championnat national par catégorie de poids.",
    ],
    athletes: [
      { nom: "Bacar Youssouf", discipline: "Moins de 69kg", niveau: "International" },
      { nom: "Said Ali Combo", discipline: "Moins de 75kg", niveau: "National" },
      { nom: "Fatouma Said", discipline: "Moins de 60kg (F)", niveau: "National" },
    ],
    palmares: [
      { annee: "2023", competition: "JIOI Madagascar", resultat: "1 bronze" },
      { annee: "2019", competition: "JIOI Maurice", resultat: "Participation" },
    ],
  }} />
}