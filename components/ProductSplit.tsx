import DesktopMock from './DesktopMock';
import PhoneMock from './PhoneMock';

export default function ProductSplit() {
  return (
    <section className="section ps-section" id="produkt">
      <div className="ps-bg-num" aria-hidden="true">02</div>
      <div className="container">
        <div className="ps-head">
          <span className="eyebrow">RUTINA · TVÅ DELAR, EN HELHET</span>
          <h2 className="ps-h">
            Ett <span className="accent-italic">modernt digitalt stöd</span><br />
            för hela verksamheten.
          </h2>
          <p className="ps-lede">
            Rutina består av två delar som tillsammans skapar en enkel helhet
            för individen, personalen och ledningen.
          </p>
        </div>

        {/* Rutina Admin */}
        <article className="ps-row ps-row-admin">
          <header className="ps-row-head">
            <div className="ps-row-meta">
              <span className="ps-num">01</span>
              <span className="ps-tag">Rutina Admin</span>
            </div>
            <h3 className="ps-row-title">
              För <span className="accent-italic">personal</span> &amp; ledning.
            </h3>
            <p className="ps-row-sub">
              Webbplattform med fullständig översikt över hela verksamheten,
              planering och kvalitetsuppföljning.
            </p>
          </header>
          <div className="ps-row-body">
            <ul className="ps-bullets">
              <li>
                <span className="ps-bullet-num">01</span>
                <div>
                  <h4>Översiktlig arbetsyta</h4>
                  <p>En modern plattform som ger fullständig översikt över hela verksamheten på ett ställe.</p>
                </div>
              </li>
              <li>
                <span className="ps-bullet-num">02</span>
                <div>
                  <h4>Smidigare planering</h4>
                  <p>Administration och planering blir enklare, vilket frigör värdefull tid varje dag.</p>
                </div>
              </li>
              <li>
                <span className="ps-bullet-num">03</span>
                <div>
                  <h4>Kvalitetsarbete</h4>
                  <p>Inbyggt stöd för uppföljning, kvalitetssäkring och smidig digital kommunikation.</p>
                </div>
              </li>
            </ul>
            <div className="ps-row-mock ps-mock-desktop">
              <DesktopMock theme="light" />
            </div>
          </div>
        </article>

        <div className="ps-divider" aria-hidden="true">
          <svg
            width="100%"
            height="48"
            viewBox="0 0 1200 48"
            preserveAspectRatio="none"
            style={{ display: 'block', overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="ps-divider-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(31,42,74,0)" />
                <stop offset="50%" stopColor="rgba(31,42,74,0.22)" />
                <stop offset="100%" stopColor="rgba(31,42,74,0)" />
              </linearGradient>
            </defs>
            <path
              d="M 0 24 Q 600 40 1200 24"
              stroke="url(#ps-divider-grad)"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="600"
              cy="40"
              r="5"
              fill="var(--coral)"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(217,109,94,0.55))',
                transformOrigin: 'center',
                transformBox: 'fill-box',
                animation: 'ps-divider-pulse 2.4s ease-in-out infinite',
              }}
            />
          </svg>
          <style>{`@keyframes ps-divider-pulse {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.25); }
          }`}</style>
        </div>

        {/* Rutina App */}
        <article className="ps-row ps-row-app">
          <header className="ps-row-head">
            <div className="ps-row-meta">
              <span className="ps-num ps-num-coral">02</span>
              <span className="ps-tag ps-tag-coral">Rutina App</span>
            </div>
            <h3 className="ps-row-title">
              För <span className="accent-italic">individen</span> i vardagen.
            </h3>
            <p className="ps-row-sub">
              En mobilapp utformad för både individen och personalen, med tydlig<br />
              översikt över dagen, enkel kommunikation och praktiskt stöd.
            </p>
          </header>
          <div className="ps-row-body ps-row-body-reverse">
            <div className="ps-row-mock ps-mock-phone">
              <PhoneMock />
            </div>
            <ul className="ps-bullets">
              <li>
                <span className="ps-bullet-num">01</span>
                <div>
                  <h4>Visualiserar dagen</h4>
                  <p>Aktiviteter visas på ett enkelt och begripligt sätt.</p>
                </div>
              </li>
              <li>
                <span className="ps-bullet-num">02</span>
                <div>
                  <h4>Kommunicera enkelt</h4>
                  <p>Behov, önskemål och återkoppling, direkt i appen.</p>
                </div>
              </li>
              <li>
                <span className="ps-bullet-num">03</span>
                <div>
                  <h4>Trygghet &amp; delaktighet</h4>
                  <p>Skapar trygghet genom ökad delaktighet och transparens.</p>
                </div>
              </li>
              <li>
                <span className="ps-bullet-num">04</span>
                <div>
                  <h4>Designad för fältet</h4>
                  <p>Fungerar både för individens och personalens vardag.</p>
                </div>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
