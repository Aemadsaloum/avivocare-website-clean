const pillars: [string, string, string][] = [
  ['01', 'Var lagras informationen?', 'Data ska hanteras inom EU och hos svenska leverantörer som kan redovisa tydliga rutiner för säkerhet, åtkomst och efterlevnad.'],
  ['02', 'Vem kan komma åt den?', 'Åtkomst ska vara begränsad, spårbar och styrd av behörighet. Det ska vara tydligt vem som ser vad, när och varför.'],
  ['03', 'Vad händer över tid?', 'Kommunen ska kunna behålla kontroll över sin information, även vid byte av leverantör, avslutat avtal eller förändrade behov.'],
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
              I LSS handlar data inte bara om drift och teknik. Det handlar om personer i en utsatt situation, sekretess och kommunens ansvar att välja lösningar som är trygga, begripliga och långsiktigt hållbara.
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
