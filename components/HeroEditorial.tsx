import DesktopMock from './DesktopMock';

export default function HeroEditorial() {
  return (
    <section className="hero-editorial">
      <div className="container">
        <div className="he-grid">
          <div className="he-copy">
            <span className="eyebrow on-dark">VI BYGGER NÄSTA GENERATIONS LSS-STÖD</span>
            <h1 className="he-headline">
              <span className="he-italic">Rutina</span> samlar<br />
              det dagliga arbetet<br />
              på en plats.
            </h1>
            <p className="he-lede">
              All relevant information för det operativa arbetet inom LSS,
              för personal, brukare och ledning. Vi utvecklar Rutina tillsammans
              med pilotkommuner som vill forma framtidens omsorg.
            </p>
            <div className="he-actions">
              <a className="btn btn-primary" href="#demo">
                Boka demo
                <svg className="btn-arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="1" y1="7" x2="12" y2="7" /><polyline points="8 3 13 7 8 11" fill="none" />
                </svg>
              </a>
              <a className="btn he-ghost" href="#pilot">Vill du vara med som pilot?</a>
            </div>
          </div>
          <div className="he-product">
            <DesktopMock theme="dark" />
          </div>
        </div>

        <div className="he-marquee">
          <div className="he-marquee-track">
            <span>LSS</span><span className="he-bullet">•</span>
            <span>OSL</span><span className="he-bullet">•</span>
            <span>GDPR</span><span className="he-bullet">•</span>
            <span>EU-DATA</span><span className="he-bullet">•</span>
            <span>KOMMUNALT ÄGARSKAP</span><span className="he-bullet">•</span>
            <span>BYGGT MED VERKSAMHETEN</span><span className="he-bullet">•</span>
            <span>LSS</span><span className="he-bullet">•</span>
            <span>OSL</span><span className="he-bullet">•</span>
            <span>GDPR</span><span className="he-bullet">•</span>
            <span>EU-DATA</span><span className="he-bullet">•</span>
            <span>KOMMUNALT ÄGARSKAP</span><span className="he-bullet">•</span>
            <span>BYGGT MED VERKSAMHETEN</span><span className="he-bullet">•</span>
          </div>
        </div>
      </div>
    </section>
  );
}
