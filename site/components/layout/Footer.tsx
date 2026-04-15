import Image from 'next/image'

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0A1A0E',
        padding: 'clamp(28px, 5vh, 36px) clamp(16px, 3vw, 40px) clamp(16px, 3vh, 20px)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          marginBottom: '16px',
          paddingBottom: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        {/* Left: INJS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{ width: '44px', height: '44px', borderRadius: '6px', flexShrink: 0, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Image src="/logo_injs.png" alt="Logo INJS" width={34} height={34} className="object-contain" />
          </div>
          <div>
            <strong
              style={{ display: 'block', fontSize: '15px', color: '#fff', letterSpacing: '0.04em', marginBottom: '3px' }}
              className="font-[family-name:var(--font-syne)]"
            >
              INJS
            </strong>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.38)', letterSpacing: '0.02em' }}>
              Institut National de la Jeunesse et des Sports
            </span>
          </div>
        </div>

        {/* Right: Ministère + Sceau */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div>
            <strong
              style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '3px' }}
              className="font-[family-name:var(--font-syne)]"
            >
              Ministère de la Jeunesse et des Sports
            </strong>
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em' }}>
              République de l&apos;Union des Comores
            </span>
          </div>
          <div
            style={{ width: '64px', height: '64px', borderRadius: '50%', padding: '5px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
          >
            <Image src="/SEAUDeLETAT.png" alt="Sceau de l'État" width={54} height={54} className="object-contain" />
          </div>
        </div>
      </div>

      <p
        style={{ maxWidth: '1200px', fontSize: '10px', color: 'rgba(255,255,255,0.18)', margin: '0 auto' }}
      >
        © {new Date().getFullYear()} INJS — Institut National de la Jeunesse et des Sports · Comores. Tous droits réservés.
      </p>
    </footer>
  )
}
