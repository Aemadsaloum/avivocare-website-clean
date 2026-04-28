import Logo from './Logo';

export default function About() {
  return (
    <section className="section" id="om">
      <div className="container">
        <div className="ab-grid">
          <div>
            <span className="eyebrow">OM BOLAGET</span>
            <h2 className="h-1" style={{ marginTop: 16, marginBottom: 28 }}>Om AvivoCare</h2>
            <div className="ab-body">
              <p>
                AvivoCare är ett svenskt bolag som utvecklar Rutina för stöd och omsorg.
                Bolaget grundades av Imad Saloum, med lång erfarenhet från kommunal LSS verksamhet
                och ledning av stöd och omsorgsverksamheter.
              </p>
              <p>
                Idén bakom Rutina kommer från en konkret erfarenhet: i omsorgen finns ofta mycket
                struktur, men den är sällan samlad i ett levande flöde när vardagen förändras.
                Planering, riskbedömningar, genomförandeplaner, bemanning och uppföljning finns,
                men de hjälper inte alltid personal, brukare och ledning i stunden.
              </p>
              <p>
                Med Rutina utvecklar vi ett gemensamt digitalt operativt system som gör förändringar
                synliga i realtid. Målet är att ge brukare mer förutsägbarhet, personal bättre stöd
                i vardagen och ledning en tydligare operativ överblick.
              </p>
              <p>
                AvivoCare byggs nära verksamhetens verkliga behov, med respekt för lagstiftning,
                yrkesroller och offentlig sektors ansvar. Vi bygger långsiktigt, med fokus på
                tillit, stabilitet och faktisk nytta i vardagen.
              </p>
            </div>
          </div>
          <div className="ab-photo-wrap" style={{ width: '100%' }}>
            <div
              className="ab-photo"
              style={{
                width: '100%',
                aspectRatio: '4 / 3',
                minHeight: 360,
                position: 'relative',
                overflow: 'hidden',
                background: 'transparent',
                border: 'none',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/about-photo.jpg"
                alt="Personal och brukare i samtal"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <Logo size="xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
