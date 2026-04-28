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

        /* Header — left-aligned, editorial */
        .df-head {
          max-width: 720px;
          margin: 0 0 64px;
          text-align: left;
        }
        .df-head .eyebrow { display: block; margin-bottom: 16px; }
        .df-headline {
          font-family: var(--font-sans);
          font-weight: 800;
          font-size: clamp(40px, 5vw, 68px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--navy);
          margin: 0 0 20px;
          text-wrap: balance;
        }
        .df-lede {
          font-size: 19px;
          line-height: 1.6;
          color: var(--muted);
          margin: 0;
          max-width: 56ch;
        }

        /* Tighter editorial grid */
        .df-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 980px;
          margin: 0;
          column-gap: 80px;
          row-gap: 56px;
        }
        .df-cell {
          display: flex;
          flex-direction: column;
          padding: 0;
          background: none;
          border: none;
          position: relative;
        }

        /* Subtle divider — only between row 1 and row 2, partial width */
        .df-cell:nth-child(-n+2)::after {
          content: '';
          position: absolute;
          left: 0;
          width: 64%;
          bottom: -28px;
          height: 1px;
          background: rgba(31,42,68,0.08);
        }

        /* Number — small marker, faded */
        .df-num {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: var(--coral);
          opacity: 0.5;
          margin: 0 0 8px;
        }
        /* Title baseline (right column reference) */
        .df-title {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: clamp(19px, 2vw, 24px);
          line-height: 1.25;
          letter-spacing: -0.02em;
          color: var(--navy);
          margin: 0 0 18px;
          text-wrap: balance;
        }
        /* Left column dominance — titles ~7-8% larger */
        .df-cell:nth-child(2n+1) .df-title {
          font-size: clamp(22px, 2.4vw, 28px);
        }
        /* Body — lighter for stronger title↔body contrast */
        .df-body {
          font-size: 15px;
          line-height: 1.7;
          color: var(--muted);
          opacity: 0.85;
          margin: 0;
          max-width: 44ch;
        }

        @media (max-width: 980px) {
          .df-grid { column-gap: 56px; row-gap: 44px; }
          .df-cell:nth-child(-n+2)::after { bottom: -22px; }
        }
        @media (max-width: 720px) {
          .df-head { margin-bottom: 44px; }
          .df-grid {
            grid-template-columns: 1fr;
            row-gap: 36px;
            max-width: 100%;
          }
          /* Drop the desktop divider on single-column mobile */
          .df-cell:nth-child(-n+2)::after { display: none; }
          /* Reset left-column dominance on single-column mobile */
          .df-cell .df-title,
          .df-cell:nth-child(2n+1) .df-title {
            font-size: clamp(19px, 5.4vw, 23px);
          }
          .df-title { margin-bottom: 14px; }
        }
      `}</style>
    </section>
  );
}
