import FederationPage from '@/components/ui/FederationPage'
export const metadata = { title: "Volleyball — INJS Comores" }
export default function VolleyballPage() {
  return <FederationPage data={{
    code: "FCV", slug: "volleyball", titre: "Volleyball",
    nomComplet: "Fédération Comorienne de Volleyball",
    president: "Moustoifa Kevin Abdounourou", fondation: "1986",
    image: "/accueil.jpg",
    presentation: [
      "Le volleyball connaît un développement régulier aux Comores, porté par une pratique populaire en intérieur et sur les plages de l'archipel. La fédération encadre les clubs sur les trois îles et organise les compétitions nationales.",
      "La section féminine est particulièrement dynamique. La fédération ambitionne de développer le beach-volley en s'appuyant sur le cadre naturel exceptionnel de l'archipel.",
    ],
    athletes: [
      { nom: "Hachim Said Ali", discipline: "Pointu", niveau: "National" },
      { nom: "Zoubeida Combo", discipline: "Passeuse (F)", niveau: "National" },
    ],
    palmares: [
      { annee: "2023", competition: "JIOI Madagascar", resultat: "Participation" },
      { annee: "2019", competition: "JIOI Maurice", resultat: "Phase de groupes" },
    ],
  }} />
}