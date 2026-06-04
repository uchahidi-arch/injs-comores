import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'

export const metadata = {
  title: "Actualités — INJS",
  description: "Toutes les actualités de l'Institut National de la Jeunesse et des Sports des Comores.",
}

export const actualites = [
  {
    slug: 'action-citoyen-2700-jeunes',
    tag: 'Programme Action Citoyen',
    titre: '2 700 jeunes mobilisés pour les valeurs citoyennes et les JIOI 2027',
    date: '3 mars 2026',
    image: '/benevolat_2027.jpg',
    imageAlt: 'Jeunes volontaires — Programme Action Citoyen INJS',
    resume: "Le programme Ya Mkobe mobilise 2 700 jeunes comoriens autour des valeurs citoyennes en préparation des Jeux des Îles de l'Océan Indien 2027.",
    contenu: `Le programme national Ya Mkobe — Action Citoyenne franchit une étape majeure avec l'engagement de 2 700 jeunes volontaires sur les trois îles de l'archipel. Lancé par l'INJS en partenariat avec les autorités locales, ce programme vise à former une nouvelle génération de citoyens engagés, prêts à incarner les valeurs du sport et de la solidarité à l'occasion des JIOI 2027.

Les participants suivent un parcours de formation structuré autour de trois axes : l'éducation citoyenne, l'accompagnement des athlètes et l'organisation bénévole des compétitions. Répartis dans les trois îles, ils constitueront le socle humain de l'accueil des délégations étrangères lors des Jeux.

L'INJS entend faire de ce programme un héritage durable, bien au-delà de l'événement sportif lui-même.`,
  },
  {
    slug: 'cosic-jioi-2027-mascotte',
    tag: 'Actualité',
    titre: 'Les Comores choisissent la mascotte des JIOI 2027',
    date: '2 mai 2026',
    image: '/mascotte_comores.jpg',
    imageAlt: 'Mascotte officielle des JIOI 2027 — Comores',
    resume: "La mascotte officielle des Jeux des Îles de l'Océan Indien 2027 a été dévoilée, symbole de l'identité comorienne et de l'ambition sportive du pays.",
    contenu: `Les Comores ont officiellement dévoilé la mascotte des Jeux des Îles de l'Océan Indien 2027. Ce personnage emblématique, ancré dans l'identité culturelle de l'archipel, sera le visage de la compétition régionale que les Comores accueilleront pour la première fois de leur histoire.

Le choix de la mascotte a fait l'objet d'un processus de sélection impliquant des artistes et des jeunes comoriens. Elle incarne les valeurs portées par l'INJS : excellence sportive, fierté nationale et ouverture vers la région de l'océan Indien.

Sa présentation officielle marque une étape symbolique importante dans le compte à rebours vers les Jeux de 2027.`,
  },
  {
    slug: 'presentation-injs',
    tag: 'Institution',
    titre: "L'INJS au service du sport et de la jeunesse comorienne",
    date: '15 janvier 2026',
    image: '/accueil.jpg',
    imageAlt: 'Terrain sportif — Comores',
    resume: "Découvrez les missions, l'organisation et les ambitions de l'Institut National de la Jeunesse et des Sports des Comores.",
    contenu: `L'Institut National de la Jeunesse et des Sports est l'établissement public de référence chargé de la politique nationale en matière de sport, d'éducation physique et de jeunesse dans l'Union des Comores.

Depuis sa création en 1975, l'INJS coordonne les fédérations nationales, gère les infrastructures sportives et met en œuvre les programmes d'encadrement de la jeunesse sur les trois îles de l'archipel.

À l'approche des JIOI 2027, l'Institut engage une phase de structuration inédite : renforcement des effectifs, réhabilitation des sites sportifs, formation des encadrants et coordination renforcée avec les fédérations partenaires.`,
  },
]

export default function ActualitesPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .actu-inner { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; }

        .actu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .actu-card {
          display: flex;
          flex-direction: column;
          border: 1px solid #eee;
          border-radius: 8px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .actu-card:hover {
          border-color: var(--vert-2);
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
        }

        .actu-img {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          background: #f0f0ee;
        }

        .actu-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .actu-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--vert);
          font-family: var(--font-syne);
        }

        .actu-titre {
          font-size: 16px;
          font-weight: 800;
          color: var(--encre);
          font-family: var(--font-syne);
          line-height: 1.3;
          margin: 0;
        }

        .actu-resume {
          font-size: 13px;
          color: #666;
          line-height: 1.7;
          font-family: var(--font-syne);
          margin: 0;
          flex: 1;
        }

        .actu-date {
          font-size: 12px;
          color: #aaa;
          font-family: var(--font-syne);
          margin-top: 4px;
        }

        @media (max-width: 860px) { .actu-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) {
          .actu-inner { padding: 40px 20px 60px; }
          .actu-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <PageHero
        label="Actualités"
        titre="Toutes les actualités"
        description="Suivez les dernières nouvelles de l'INJS — programmes, événements, partenariats et préparation des JIOI 2027."
        image="/accueil.jpg"
        imageAlt="Actualités INJS"
      />

      <div className="actu-inner">
        <div className="actu-grid">
          {actualites.map((a) => (
            <Link key={a.slug} href={`/actualites/${a.slug}`} className="actu-card">
              <div className="actu-img">
                <Image src={a.image} alt={a.imageAlt} fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="actu-body">
                <span className="actu-tag">{a.tag}</span>
                <h2 className="actu-titre">{a.titre}</h2>
                <p className="actu-resume">{a.resume}</p>
                <span className="actu-date">{a.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
