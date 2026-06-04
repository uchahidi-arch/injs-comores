import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'
import CountdownBanner from '@/components/ui/CountdownBanner'

export const metadata = {
  title: "Résultats live — JIOI 2027 Comores",
  description: "Résultats en direct, tableau des médailles et classements des Jeux des Îles de l'Océan Indien 2027.",
}

const nav = [{ titre: "JIOI 2027", liens: [
  { label: "Vue d'ensemble", href: "/jioi-2027" },
  { label: "Présentation", href: "/jioi-2027/presentation" },
  { label: "Disciplines", href: "/jioi-2027/sports" },
  { label: "Calendrier", href: "/jioi-2027/calendrier" },
  { label: "Délégations", href: "/jioi-2027/delegations" },
  { label: "Athlètes qualifiés", href: "/jioi-2027/athletes-qualifies" },
  { label: "Billetterie", href: "/jioi-2027/billetterie" },
  { label: "Médias & Presse", href: "/jioi-2027/medias" },
  { label: "Résultats live", href: "/jioi-2027/resultats" },
]}]

const pays = [
  { code: "MAD", pays: "Madagascar", or: 0, argent: 0, bronze: 0 },
  { code: "MRI", pays: "Maurice", or: 0, argent: 0, bronze: 0 },
  { code: "REU", pays: "La Réunion", or: 0, argent: 0, bronze: 0 },
  { code: "COM", pays: "Comores", or: 0, argent: 0, bronze: 0 },
  { code: "SEY", pays: "Seychelles", or: 0, argent: 0, bronze: 0 },
  { code: "MAY", pays: "Mayotte", or: 0, argent: 0, bronze: 0 },
  { code: "MDV", pays: "Maldives", or: 0, argent: 0, bronze: 0 },
]

export default function JioiResultatsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .jr-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .jr-main { flex: 1; min-width: 0; }
        .jr-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .jr-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 20px; line-height: 1.15; }

        /* Bannière avant les jeux */
        .jr-avant { border: 1px solid #eee; border-radius: 8px; padding: 48px 40px; text-align: center; margin-bottom: 48px; }
        .jr-avant-icon { font-size: 40px; margin-bottom: 16px; }
        .jr-avant-titre { font-size: 22px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin-bottom: 10px; }
        .jr-avant-sub { font-size: 15px; color: #888; font-family: var(--font-syne); line-height: 1.7; max-width: 480px; margin: 0 auto; }

        /* Tableau médailles */
        .jr-medailles-title { font-size: 20px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 20px; padding-bottom: 10px; border-bottom: 2px solid var(--vert); }
        .jr-table { width: 100%; border-collapse: collapse; }
        .jr-table th { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #aaa; font-family: var(--font-syne); padding: 10px 0; text-align: left; border-bottom: 1px solid #f0f0f0; }
        .jr-table th.center { text-align: center; }
        .jr-table td { padding: 14px 0; border-bottom: 1px solid #f5f5f5; font-family: var(--font-syne); vertical-align: middle; }
        .jr-table tr:last-child td { border-bottom: none; }
        .jr-rank { font-size: 13px; font-weight: 700; color: #ccc; width: 32px; }
        .jr-pays-code { font-size: 12px; font-weight: 800; color: var(--vert); letter-spacing: 0.08em; width: 48px; }
        .jr-pays-nom { font-size: 15px; font-weight: 600; color: var(--encre); }
        .jr-medaille { text-align: center; font-size: 16px; font-weight: 800; font-family: var(--font-syne); width: 64px; }
        .jr-medaille.or { color: #b8860b; }
        .jr-medaille.argent { color: #888; }
        .jr-medaille.bronze { color: #8B4513; }
        .jr-total { text-align: center; font-size: 15px; font-weight: 700; color: #333; font-family: var(--font-syne); width: 64px; }
        .jr-note { margin-top: 32px; padding: 20px 24px; border: 1px solid #eee; border-radius: 8px; font-size: 14px; color: #888; font-family: var(--font-syne); line-height: 1.7; }

        @media (max-width: 900px) { .jr-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .jr-wrap { padding: 40px 20px 60px; } .jr-avant { padding: 32px 20px; } }
      `}</style>
      <PageHero label="JIOI 2027" titre="Résultats live" description="Tableau des médailles et résultats en direct pendant les Jeux des Îles de l'Océan Indien 2027." image="/jioi-hero.jpg" imageAlt="Résultats JIOI 2027" bandColor="#deeee3" />
      <div className="jr-wrap">
        <SectionNav blocs={[...nav, { titre: "Compte à rebours", contenu: <CountdownBanner /> }]} />
        <main className="jr-main">
          <span className="jr-label">Tableau de bord</span>
          <h2 className="jr-title">Résultats & Médailles</h2>

          <div className="jr-avant">
            <div className="jr-avant-icon">🏅</div>
            <div className="jr-avant-titre">Les Jeux n'ont pas encore commencé</div>
            <p className="jr-avant-sub">Le tableau des médailles et les résultats en direct seront disponibles à partir du 18 juillet 2027, jour d'ouverture des JIOI aux Comores.</p>
          </div>

          <h3 className="jr-medailles-title">Tableau des médailles</h3>
          <table className="jr-table">
            <thead>
              <tr>
                <th style={{ width: '32px' }}>#</th>
                <th style={{ width: '48px' }}>Code</th>
                <th>Pays</th>
                <th className="center">🥇</th>
                <th className="center">🥈</th>
                <th className="center">🥉</th>
                <th className="center">Total</th>
              </tr>
            </thead>
            <tbody>
              {pays.map((p, i) => (
                <tr key={p.code}>
                  <td className="jr-rank">{i + 1}</td>
                  <td className="jr-pays-code">{p.code}</td>
                  <td className="jr-pays-nom">{p.pays}</td>
                  <td className="jr-medaille or">—</td>
                  <td className="jr-medaille argent">—</td>
                  <td className="jr-medaille bronze">—</td>
                  <td className="jr-total">—</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="jr-note">Les résultats seront mis à jour en temps réel pendant les compétitions. Le classement au tableau des médailles est ordonné par nombre de médailles d'or, puis d'argent, puis de bronze.</div>
        </main>
      </div>
    </div>
  )
}
