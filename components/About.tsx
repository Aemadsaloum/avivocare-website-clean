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
                AvivoCare är ett svenskt bolag som utvecklar digitala system för stöd och omsorg.
                Vi arbetar med kommuner och verksamheter för att stärka förutsägbarhet, delaktighet
                och styrning i en vardag som ofta präglas av förändring och höga krav.
              </p>
              <p>
                Bolaget grundades utifrån lång erfarenhet av social omsorg och insikten att dagens
                system i stor utsträckning är byggda för planering och efterhandsuppföljning, inte
                för att ge stöd i det som faktiskt händer under dagen.
              </p>
              <p>
                Med Rutina utvecklar vi ett gemensamt digitalt planerings- och utförandelager som
                gör förändringar synliga i realtid, med gemensam överblick för brukare, personal
                och ledning.
              </p>
            </div>
          </div>
          <div className="ab-photo-wrap">
            <div className="ab-photo">
              <span>FOTO · personal &amp; brukare i samtal<br />varma toner · naturligt ljus</span>
            </div>
            <div className="ab-photo-tag">
              <Logo color="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
