import React from 'react';

const items = [
  {
    n: '01',
    tag: 'DELAKTIGHET',
    t: 'Brukaren saknar bild av sin egen dag.',
    b: 'När planer ändras manuellt hinner informationen sällan fram. Resultatet: oro, frågor och en vardag utan översikt.',
    stat: { num: '7', label: 'av 10 LSS-brukare\nupplever bristande information', source: 'IVO' },
  },
  {
    n: '02',
    tag: 'ADMINISTRATION',
    t: 'Tre system för att svara på en fråga.',
    b: 'Dokumentation, schema, avvikelser, kommunikation. Personal hoppar mellan verktyg som inte pratar med varandra.',
    stat: { num: '40%', label: 'av personalens tid\ngår till administration', source: 'SKR 2023' },
  },
  {
    n: '03',
    tag: 'VERKTYG',
    t: 'Planen är digital. Verkligheten är inte det.',
    b: 'Befintliga system visar hur stödet planerats, inte hur det faktiskt utförs. När förutsättningarna ändras blir realtid en gissning.',
    stat: { num: '0', label: 'system byggda\nspecifikt för LSS', source: '' },
  },
];

export default function Challenges() {
  return (
    <section className="section ch-section" id="utmaningar">
      <div className="ch-bg-num" aria-hidden="true">01</div>
      <div className="container">
        <header className="ch-head">
          <div className="ch-eyebrow">
            <span className="ch-eyebrow-line" />
            <span>UTMANINGEN</span>
          </div>
          <h2 className="ch-headline">
            Omsorgen är byggd för<br />
            <span className="accent-italic">människor</span>. Verktygen är inte det.
          </h2>
          <p className="ch-lede">
            Tre strukturella problem skapar onödig stress för personal, otydlighet
            för brukaren och osynlighet för ledningen.
          </p>
        </header>

        <div className="ch-list">
          {items.map((it, i) => (
            <article key={i} className="ch-row">
              <div className="ch-num-col">
                <span className="ch-num">{it.n}</span>
                <span className="ch-tag">{it.tag}</span>
              </div>
              <div className="ch-text-col">
                <h3 className="ch-row-title">{it.t}</h3>
                <p className="ch-row-body">{it.b}</p>
              </div>
              <div className="ch-stat-col">
                <div className="ch-stat-num">{it.stat.num}</div>
                <div className="ch-stat-label">
                  {it.stat.label.split('\n').map((l, j) => (
                    <React.Fragment key={j}>{l}{j === 0 && <br />}</React.Fragment>
                  ))}
                </div>
                {it.stat.source && <div className="ch-stat-source">Källa: {it.stat.source}</div>}
              </div>
            </article>
          ))}
        </div>

        <aside className="ch-consequence">
          <div className="ch-cons-quote-mark">&ldquo;</div>
          <blockquote className="ch-cons-text">
            Resultatet är högre stress, sämre kontinuitet och en vardag som är
            <span className="accent-italic"> svårare än den behöver vara</span>, för alla inblandade.
          </blockquote>
          <div className="ch-cons-attr">
            <span className="ch-cons-line" />
            <span>Det här är problemet vi bygger Rutina för att lösa.</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
