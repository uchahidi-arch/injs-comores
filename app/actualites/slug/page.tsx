import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { actualites } from '../page'

export function generateStaticParams() {
  return actualites.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = actualites.find((a) => a.slug === params.slug)
  if (!article) return {}
  return {
    title: `${article.titre} — INJS`,
    description: article.resume,
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = actualites.find((a) => a.slug === params.slug)
  if (!article) notFound()

  const autres = actualites.filter((a) => a.slug !== article.slug).slice(0, 2)

  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        /* Hero image */
        .art-hero {
          position: relative;
          width: 100%;
          height: 480px;
          overflow: hidden;
          background: #0a0a0a;
        }
        .art-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%);
          z-index: 1;
        }
        .art-hero-meta {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 780px;
          padding: 0 40px;
          z-index: 2;
        }
        .art-hero-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #fff;
          background: var(--vert);
          padding: 4px 10px;
          font-family: var(--font-syne);
          display: inline-block;
          margin-bottom: 14px;
        }
        .art-hero-titre {
          font-size: clamp(22px, 3vw, 38px);
          font-weight: 800;
          color: #fff;
          font-family: var(--font-syne);
          line-height: 1.15;
          margin: 0 0 10px;
        }
        .art-hero-date {
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          font-family: var(--font-syne);
        }

        /* Contenu */
        .art-inner {
          max-width: 780px;
          margin: 0 auto;
          padding: 56px 40px 80px;
        }

        .art-retour {
          font-size: 13px;
          font-weight: 600;
          color: var(--vert);
          font-family: var(--font-syne);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 40px;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        .art-retour:hover { border-color: var(--vert); }

        .art-contenu p {
          font-size: 16px;
          color: #444;
          line-height: 1.9;
          font-family: var(--font-syne);
          margin: 0 0 20px;
        }
        .art-contenu p:last-child { margin: 0; }

        /* Autres articles */
        .art-autres { max-width: 1100px; margin: 0 auto; padding: 0 40px 80px; }
        .art-autres-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--vert);
          font-family: var(--font-syne);
          margin-bottom: 24px;
          display: block;
          border-top: 1px solid #eee;
          padding-top: 40px;
        }
        .art-autres-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

        .art-autre-card {
          display: flex;
          gap: 16px;
          text-decoration: none;
          color: inherit;
          border: 1px solid #eee;
          border-radius: 8px;
          overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .art-autre-card:hover {
          border-color: var(--vert-2);
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
        }
        .art-autre-img {
          position: relative;
          width: 120px;
          flex-shrink: 0;
          background: #f0f0ee;
        }
        .art-autre-body { padding: 16px; display: flex; flex-direction: column; gap: 6px; }
        .art-autre-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--vert);
          font-family: var(--font-syne);
        }
        .art-autre-titre {
          font-size: 14px;
          font-weight: 800;
          color: var(--encre);
          font-family: var(--font-syne);
          line-height: 1.3;
          margin: 0;
        }
        .art-autre-date {
          font-size: 11px;
          color: #aaa;
          font-family: var(--font-syne);
          margin-top: auto;
        }

        @media (max-width: 768px) {
          .art-hero { height: 340px; }
          .art-inner { padding: 40px 20px 60px; }
          .art-autres { padding: 0 20px 60px; }
          .art-autres-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero avec photo de couverture */}
      <div className="art-hero">
        <Image src={article.image} alt={article.imageAlt} fill style={{ objectFit: 'cover' }} priority />
        <div className="art-hero-overlay" />
        <div className="art-hero-meta">
          <span className="art-hero-tag">{article.tag}</span>
          <h1 className="art-hero-titre">{article.titre}</h1>
          <span className="art-hero-date">{article.date}</span>
        </div>
      </div>

      {/* Contenu */}
      <div className="art-inner">
        <Link href="/actualites" className="art-retour">← Toutes les actualités</Link>
        <div className="art-contenu">
          {article.contenu.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      {/* Autres articles */}
      {autres.length > 0 && (
        <div className="art-autres">
          <span className="art-autres-label">À lire aussi</span>
          <div className="art-autres-grid">
            {autres.map((a) => (
              <Link key={a.slug} href={`/actualites/${a.slug}`} className="art-autre-card">
                <div className="art-autre-img">
                  <Image src={a.image} alt={a.imageAlt} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="art-autre-body">
                  <span className="art-autre-tag">{a.tag}</span>
                  <h3 className="art-autre-titre">{a.titre}</h3>
                  <span className="art-autre-date">{a.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
