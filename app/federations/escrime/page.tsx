import FederationPage from '@/components/ui/FederationPage'
export const metadata = { title: "Escrime — INJS Comores" }
export default function EscrimePage() {
  return <FederationPage data={{
    code: "FCE", slug: "escrime", titre: "Escrime",
    nomComplet: "Fédération Comorienne d'Escrime",
    president: "Fahardine Mroivili", fondation: "2001",
    image: "/accueil.jpg",
    presentation: [
      "L'escrime est une discipline en pleine émergence aux Comores. Bien que récente, la fédération a su fédérer une communauté de pratiquants passionnés, principalement à Moroni.",
      "Présente aux Jeux des Îles depuis plusieurs éditions, l'escrime comorienne vise une montée en puissance pour les JIOI 2027, où elle concourra à domicile.",
    ],
    athletes: [
      { nom: "Kamalidine Abdou", discipline: "Fleuret", niveau: "International" },
      { nom: "Nadia Youssouf", discipline: "Épée (F)", niveau: "National" },
    ],
    palmares: [
      { annee: "2019", competition: "JIOI Maurice", resultat: "1 bronze" },
      { annee: "2023", competition: "JIOI Madagascar", resultat: "Participation" },
    ],
  }} />
}