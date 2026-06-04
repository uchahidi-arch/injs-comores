import FederationPage from '@/components/ui/FederationPage'
export const metadata = { title: "Athlétisme — INJS Comores" }
export default function AthletismePage() {
  return <FederationPage data={{
    code: "FCA", slug: "athletisme", titre: "Athlétisme",
    nomComplet: "Fédération Comorienne d'Athlétisme",
    president: "Abdallah Madi", fondation: "1979",
    image: "/accueil.jpg",
    presentation: [
      "L'athlétisme est l'une des disciplines les plus représentées aux Comores en termes de licenciés. Courses, sauts et lancers sont pratiqués dès le plus jeune âge dans les établissements scolaires, ce qui en fait un vecteur naturel de détection des talents.",
      "La Fédération Comorienne d'Athlétisme organise les championnats nationaux au Stade de Malouzini et travaille en partenariat avec l'INJS pour le programme national de détection des jeunes talents sportifs.",
    ],
    athletes: [
      { nom: "Salim Mchangama", discipline: "100m / 200m", niveau: "International" },
      { nom: "Faouzia Said Omar", discipline: "400m haies", niveau: "International" },
      { nom: "Ali Hamidou", discipline: "Saut en longueur", niveau: "National" },
      { nom: "Anfya Chamou", discipline: "800m", niveau: "National" },
    ],
    palmares: [
      { annee: "2023", competition: "JIOI Madagascar", resultat: "1 or, 1 argent, 2 bronzes" },
      { annee: "2019", competition: "JIOI Maurice", resultat: "2 argents" },
      { annee: "2015", competition: "JIOI La Réunion", resultat: "3 bronzes" },
    ],
  }} />
}