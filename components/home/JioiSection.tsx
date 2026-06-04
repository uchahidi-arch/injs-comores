'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const JIOI_DATE = new Date('2027-08-23T00:00:00')

function useCountdown(target: Date) {
  const [diff, setDiff] = useState(0)
  useEffect(() => {
    const tick = () => setDiff(Math.max(0, target.getTime() - Date.now()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])
  const s = Math.floor(diff / 1000)
  return {
    days:    Math.floor(s / 86400),
    hours:   Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  }
}

const css = `
  .jioi-section {
    background: #fff;
    padding: 100px var(--site-px);
    box-sizing: border-box;
    border-top: 1px solid #eee;
  }

  .jioi-inner {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  /* LEFT — image */
  .jioi-img-wrap {
    position: relative;
    aspect-ratio: 4/3;
    overflow: hidden;
  }

  /* RIGHT — contenu */
  .jioi-eyebrow {
    font-size: 10px;
    font-family: var(--font-syne);
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--vert);
    margin-bottom: 10px;
    display: block;
  }

  .jioi-line {
    width: 48px;
    height: 2px;
    background: var(--vert);
    margin-bottom: 28px;
  }

  .jioi-title {
    font-size: clamp(28px, 3vw, 42px);
    font-family: var(--font-syne);
    font-weight: 800;
    color: var(--encre);
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin: 0 0 20px;
  }

  .jioi-sub {
    font-size: 15px;
    font-family: var(--font-syne);
    color: #555;
    line-height: 1.8;
    margin-bottom: 40px;
    max-width: 480px;
  }

  /* Countdown */
  .jioi-countdown {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    margin-bottom: 40px;
  }

  .jioi-unit {
    background: #f7f7f7;
    border: 1px solid #eee;
    padding: 24px 12px 18px;
    text-align: center;
  }

  .jioi-num {
    font-size: clamp(28px, 3vw, 44px);
    font-family: var(--font-syne);
    font-weight: 800;
    color: var(--encre);
    line-height: 1;
    letter-spacing: -0.02em;
    display: block;
    margin-bottom: 8px;
  }

  .jioi-label {
    font-size: 8px;
    font-family: var(--font-syne);
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #999;
    display: block;
  }

  .jioi-ctas {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .jioi-cta-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: var(--vert);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    font-family: var(--font-syne);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    transition: opacity 0.2s;
  }
  .jioi-cta-primary:hover { opacity: 0.85; }

  .jioi-cta-ghost {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border: 1px solid #ccc;
    color: var(--encre);
    font-size: 12px;
    font-weight: 600;
    font-family: var(--font-syne);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-decoration: none;
    transition: border-color 0.2s, background 0.2s;
  }
  .jioi-cta-ghost:hover { border-color: var(--encre); background: #f5f5f5; }

  @media (max-width: 900px) {
    .jioi-inner { grid-template-columns: 1fr; gap: 48px; }
    .jioi-section { padding: 64px var(--site-px); }
  }
`

export default function JioiSection() {
  const { days, hours, minutes, seconds } = useCountdown(JIOI_DATE)
  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <section className="jioi-section">
      <style>{css}</style>
      <div className="jioi-inner">

        {/* LEFT — image */}
        <div className="jioi-img-wrap">
          <Image
            src="/mascotte_comores.jpg"
            alt="Jeux des Îles de l'Océan Indien 2027 — Comores"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        {/* RIGHT — contenu */}
        <div>
          <span className="jioi-eyebrow">JIOI 2027</span>
          <div className="jioi-line" />
          <h2 className="jioi-title">
            Les Comores accueillent<br />les Jeux des Îles
          </h2>
          <p className="jioi-sub">
            Pour la première fois de leur histoire, les Comores organisent les Jeux des Îles
            de l&apos;Océan Indien. Un défi national, une fierté collective, une opportunité
            historique pour le sport comorien.
          </p>

          <div className="jioi-countdown">
            {[
              { val: pad(days),    label: 'Jours' },
              { val: pad(hours),   label: 'Heures' },
              { val: pad(minutes), label: 'Minutes' },
              { val: pad(seconds), label: 'Secondes' },
            ].map(({ val, label }) => (
              <div key={label} className="jioi-unit">
                <span className="jioi-num">{val}</span>
                <span className="jioi-label">{label}</span>
              </div>
            ))}
          </div>

          <div className="jioi-ctas">
            <Link href="/jioi-2027" className="jioi-cta-primary">Découvrir les Jeux →</Link>
            <Link href="/jeunesse/volontariat" className="jioi-cta-ghost">Devenir bénévole</Link>
          </div>
        </div>

      </div>
    </section>
  )
}
