'use client'
import Image from 'next/image'
import Link from 'next/link'

const css = `
  .dw-section {
    background: #fff;
    padding: 100px var(--site-px);
    box-sizing: border-box;
  }

  .dw-inner {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 96px;
    align-items: start;
  }

  .dw-eyebrow {
    font-size: 10px;
    font-family: var(--font-syne);
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--vert);
    margin-bottom: 10px;
    display: block;
  }

  .dw-line {
    width: 48px;
    height: 2px;
    background: var(--vert);
    margin-bottom: 28px;
  }

  .dw-photo-wrap {
    width: 100%;
    aspect-ratio: 4/5;
    position: relative;
    overflow: hidden;
  }

  .dw-sig {
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid #e8e8e8;
  }

  .dw-name {
    font-size: 14px;
    font-weight: 700;
    font-family: var(--font-syne);
    color: var(--encre);
    letter-spacing: 0.02em;
  }

  .dw-role {
    font-size: 10px;
    color: #888;
    font-family: var(--font-syne);
    margin-top: 4px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .dw-right {
    padding-top: 52px;
  }

  .dw-quote-mark {
    font-size: 80px;
    line-height: 0.6;
    color: var(--vert);
    font-family: Georgia, serif;
    opacity: 0.25;
    display: block;
    margin-bottom: 20px;
    user-select: none;
  }

  .dw-quote {
    font-size: clamp(20px, 2vw, 28px);
    font-weight: 700;
    font-family: var(--font-syne);
    color: var(--encre);
    line-height: 1.35;
    letter-spacing: -0.01em;
    margin: 0 0 28px 0;
    border-left: 3px solid var(--vert);
    padding-left: 24px;
  }

  .dw-sep {
    width: 40px;
    height: 1px;
    background: #e0e0e0;
    margin-bottom: 28px;
  }

  .dw-body {
    font-size: 15px;
    color: #555;
    line-height: 1.9;
    font-family: var(--font-syne);
    max-width: 540px;
    margin-bottom: 16px;
  }

  .dw-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 13px 28px;
    background: var(--vert);
    color: #fff;
    font-family: var(--font-syne);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-decoration: none;
    text-transform: uppercase;
    transition: background 0.25s, gap 0.25s;
    margin-top: 32px;
  }
  .dw-btn:hover {
    background: var(--encre);
    gap: 16px;
  }

  @media (max-width: 900px) {
    .dw-inner { grid-template-columns: 1fr; gap: 48px; }
    .dw-right { padding-top: 0; }
    .dw-section { padding: 64px var(--site-px); }
  }
`

export default function DirectorWord() {
  return (
    <section className="dw-section">
      <style>{css}</style>
      <div className="dw-inner">

        {/* LEFT */}
        <div>
          <span className="dw-eyebrow">Mot du Directeur</span>
          <div className="dw-line" />
          <div className="dw-photo-wrap">
            <Image
              src="/directeurINJS.jpg"
              alt="Ali Chahidi Mohamed, Directeur Général de l'INJS Comores"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
            />
          </div>
          <div className="dw-sig">
            <div className="dw-name">Ali Chahidi Mohamed</div>
            <div className="dw-role">Directeur Général — INJS Comores</div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="dw-right">
          <span className="dw-quote-mark">&ldquo;</span>
          <blockquote className="dw-quote">
            Les Comores entrent dans une nouvelle ère sportive.
            L&apos;INJS se donne les outils pour être à la hauteur de cette ambition.
          </blockquote>
          <div className="dw-sep" />
          <p className="dw-body">
            Les Jeux des Îles de l&apos;Océan Indien 2027 représentent une opportunité historique
            pour notre pays. Nous travaillons chaque jour à structurer le sport comorien —
            ses fédérations, ses athlètes, ses infrastructures — pour que les Comores se
            présentent à cette échéance avec la dignité et l&apos;organisation qu&apos;elle mérite.
          </p>
          <p className="dw-body">
            L&apos;INJS s&apos;engage à accompagner chaque fédération, chaque jeune talent et chaque
            partenaire dans cette dynamique nationale. Ensemble, nous bâtirons un sport
            comorien fort, visible et reconnu à l&apos;échelle de la région.
          </p>
          <Link href="/institution/direction" className="dw-btn">
            Lire le message complet →
          </Link>
        </div>

      </div>
    </section>
  )
}
