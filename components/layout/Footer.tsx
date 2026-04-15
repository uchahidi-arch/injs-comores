import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: '#0A1A0E' }} className="px-4 sm:px-10 pt-8 sm:pt-9 pb-5">
      <div
        style={{ maxWidth: '1200px', borderBottom: '1px solid rgba(255,255,255,0.07)', marginBottom: '16px' }}
        className="mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-7"
      >
        {/* Left: INJS */}
        <div className="flex items-center gap-3.5">
          <div
            style={{ width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            className="bg-white flex-shrink-0"
          >
            <Image src="/logo_injs.png" alt="Logo INJS" width={44} height={44} style={{ width: '44px', height: '44px', objectFit: 'contain' }} />
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
        <div className="flex items-center gap-4">
          <div className="sm:text-right">
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
            style={{ width: '64px', height: '64px', borderRadius: '50%', padding: '5px' }}
            className="bg-white flex items-center justify-center flex-shrink-0"
          >
            <Image src="/SEAUDeLETAT.png" alt="Sceau de l'État" width={54} height={54} className="object-contain" />
          </div>
        </div>
      </div>

      <p
        style={{ maxWidth: '1200px', fontSize: '10px', color: 'rgba(255,255,255,0.18)' }}
        className="mx-auto"
      >
        © {new Date().getFullYear()} INJS — Institut National de la Jeunesse et des Sports · Comores. Tous droits réservés.
      </p>
    </footer>
  )
}
