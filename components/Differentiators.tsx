const items = [
  {
    n: '01',
    title: 'Plan och verklighet möts',
    body: 'Rutina visar inte bara vad som var planerat, utan vad som faktiskt händer i verksamheten just nu.',
  },
  {
    n: '02',
    title: 'En gemensam lägesbild',
    body: 'Brukare, personal och ledning utgår från samma information – anpassad efter deras olika behov.',
  },
  {
    n: '03',
    title: 'Förändringar slår igenom direkt',
    body: 'När bemanning, tider eller insatser ändras uppdateras berörda vyer utan att information behöver jagas manuellt.',
  },
  {
    n: '04',
    title: 'Mindre friktion i arbetsdagen',
    body: 'Rutina minskar dubbelkoll, avbrott och osäkerhet genom att samla det som påverkar dagens stöd i ett gemensamt flöde.',
  },
];

export default function Differentiators() {
  return (
    <section className="section df-section" id="annorlunda">
      <div className="container">
        <header className="df-head">
          <span className="eyebrow">RUTINA</span>
          <h2 className="df-headline">
            Vad gör Rutina <span className="accent-italic">annorlunda</span>?
          </h2>
          <p className="df-lede">
            Rutina är inte byggt för att ersätta verksamhetens system. Det är byggt för att göra
            vardagens förändringar synliga, begripliga och hanterbara — i samma stund som de sker.
          </p>
        </header>

        <div className="df-grid">
          {items.map((it, i) => (
            <article key={i} className="df-cell">
              <span className="df-num">{it.n}</span>
              <h3 className="df-title">{it.title}</h3>
              <p className="df-body">{it.body}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .df-section { background: white; }

        .df-head {
          max-width: 760px;
          margin: 0 auto 72px;
          text-align: center;
        }
        .df-head .eyebrow { display: block; margin-bottom: 18px; }
        .df-headline {
          font-family: var(--font-sans);
          font-weight: 800;
          font-size: clamp(34px, 4.6vw, 60px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--navy);
          margin: 0 0 22px;
          text-wrap: balance;
        }
        .df-lede {
          font-size: 19px;
          line-height: 1.6;
          color: var(--muted);
          margin: 0 auto;
          max-width: 56ch;
        }

        .df-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1100px;
          margin: 0 auto;
          border-top: 1px solid rgba(31,42,68,0.08);
          border-left: 1px solid rgba(31,42,68,0.08);
        }
        .df-cell {
          padding: 44px 48px;
          border-right: 1px solid rgba(31,42,68,0.08);
          border-bottom: 1px solid rgba(31,42,68,0.08);
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: background-color 250ms ease;
        }
        .df-cell:hover {
          background: rgba(31,42,68,0.018);
        }
        .df-num {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: var(--coral);
        }
        .df-title {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: clamp(19px, 2vw, 23px);
          line-height: 1.25;
          letter-spacing: -0.015em;
          color: var(--navy);
          margin: 0;
          text-wrap: balance;
        }
        .df-body {
          font-size: 16px;
          line-height: 1.6;
          color: var(--muted);
          margin: 0;
          max-width: 46ch;
        }

        @media (max-width: 980px) {
          .df-cell { padding: 36px 32px; }
        }
        @media (max-width: 720px) {
          .df-head { margin-bottom: 48px; }
          .df-grid { grid-template-columns: 1fr; }
          .df-cell { padding: 28px 22px; gap: 10px; }
        }
      `}</style>
    </section>
  );
}
