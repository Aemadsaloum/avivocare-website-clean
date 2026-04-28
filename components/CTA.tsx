export default function CTA() {
  return (
    <section
      className="section section-tight"
      style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--line)' }}
      id="kontakt"
    >
      <div className="container">
        <div className="cta-card">
          <div>
            <span className="eyebrow">PILOTKOMMUNER SÖKES</span>
            <h2 className="h-1" style={{ marginTop: 16, fontSize: 'clamp(32px, 4vw, 48px)' }}>
              Vill ni vara med och forma Rutina?
            </h2>
            <p className="lede" style={{ marginTop: 14 }}>
              Vi söker kommuner som vill samarbeta från början. Pilotpartners
              får inflytande över produkten och förmånliga villkor.
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href="#">Boka samtal</a>
            <a className="btn btn-ghost" href="#">Skicka ett mail</a>
          </div>
        </div>
      </div>
    </section>
  );
}
