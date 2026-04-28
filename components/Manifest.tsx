const pillars: [string, string, string][] = [
  ['01', 'Var lagras data fysiskt?', 'Inom EU, hos europeiska leverantörer.'],
  ['02', 'Vem har juridisk åtkomst?', 'Inga amerikanska bolag. CLOUD Act gäller även servrar i Europa.'],
  ['03', 'Vad händer om vi försvinner?', 'Data tillhör kommunen och kan lämnas ut i öppna format.'],
];

export default function Manifest() {
  return (
    <section className="section section-dark" id="manifest">
      <div className="container">
        <div className="mf-grid">
          <div>
            <span className="eyebrow on-dark">VÅR HÅLLNING</span>
            <h2 className="h-1" style={{ color: 'white', marginTop: 16, marginBottom: 28 }}>
              Vi lagrar data inom EU.<br />
              Det är inte ett tekniskt val.<br />
              Det är ett <span className="accent-italic">etiskt val.</span>
            </h2>
            <p className="lede" style={{ color: 'rgba(255,255,255,0.78)' }}>
              I LSS är data aldrig bara data. Det handlar om personer i sårbar situation,
              sekretess enligt OSL, och kommunens ansvar, inte leverantörens.
            </p>
          </div>
          <div className="mf-pillars">
            {pillars.map(([n, t, b]) => (
              <div key={n} className="mf-pillar">
                <div className="mf-pillar-num">{n}</div>
                <div>
                  <div className="mf-pillar-title">{t}</div>
                  <div className="mf-pillar-body">{b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
