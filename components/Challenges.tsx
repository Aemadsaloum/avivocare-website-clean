'use client';

import { useRef, useEffect } from 'react';
import React from 'react';

const items = [
  {
    n: '01',
    tag: 'DELAKTIGHET',
    t: 'Brukaren saknar bild av sin egen dag.',
    b: 'När planering och stöd förändras når informationen inte alltid fram i tid. Det påverkar förutsägbarhet, trygghet och delaktighet.',
    statText: 'Brister i information och delaktighet återkommer i tillsyn.',
    source: 'Källa: IVO',
  },
  {
    n: '02',
    tag: 'ADMINISTRATION',
    t: 'Tre system för att svara på en fråga.',
    b: 'Personal behöver ofta dubbelkolla, samordna och föra vidare information mellan flera system och arbetsflöden.',
    statText: 'Behovet av bättre samordning i vård och omsorg är tydligt.',
    source: 'Källa: SKR',
  },
  {
    n: '03',
    tag: 'VERKTYG',
    t: 'Planen är digital. Verkligheten är inte det.',
    b: 'Många system visar hur stödet är planerat, men ger inte alltid en gemensam bild av vad som faktiskt händer i stunden.',
    statText: 'Arbetssätt behöver bli mer sammanhållna och realtidsnära.',
    source: 'Källa: SKR / AvivoCare analys',
  },
];

export default function Challenges() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>('[data-ch-reveal]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('ch-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section ch-section" id="utmaningar" ref={sectionRef}>
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
            <article
              key={i}
              className="ch-row ch-row-fx"
              data-ch-reveal
              style={{ ['--ch-delay' as string]: `${i * 90}ms` } as React.CSSProperties}
            >
              <div className="ch-num-col">
                <span className="ch-num">{it.n}</span>
                <span className="ch-tag">{it.tag}</span>
              </div>
              <div className="ch-text-col">
                <h3 className="ch-row-title">{it.t}</h3>
                <p className="ch-row-body">{it.b}</p>
              </div>
              <div className="ch-stat-col ch-insight">
                <p className="ch-insight-text">{it.statText}</p>
                <div className="ch-stat-source">{it.source}</div>
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

      <style>{`
        /* Softer, more premium dividers */
        .ch-section .ch-list { border-top-color: rgba(31,42,68,0.07); }
        .ch-section .ch-row { border-bottom-color: rgba(31,42,68,0.07); }

        /* Scroll reveal + smoother row hover */
        .ch-row.ch-row-fx {
          opacity: 0;
          transform: translateY(14px);
          will-change: opacity, transform;
          transition:
            opacity 700ms cubic-bezier(0.2, 0.7, 0.2, 1),
            transform 250ms cubic-bezier(0.2, 0.7, 0.2, 1),
            background-color 250ms ease;
          transition-delay: var(--ch-delay, 0ms);
        }
        .ch-row.ch-row-fx.ch-in {
          opacity: 1;
          transform: translateY(0);
        }
        .ch-row.ch-row-fx.ch-in:hover {
          background: rgba(31,42,68,0.025);
          transform: translateY(-2px);
        }

        /* Number gets slightly more visible on hover */
        .ch-row.ch-row-fx .ch-num {
          transition: color 250ms ease, transform 250ms ease;
        }
        .ch-row.ch-row-fx:hover .ch-num {
          color: var(--coral-deep);
        }

        @media (prefers-reduced-motion: reduce) {
          .ch-row.ch-row-fx { opacity: 1; transform: none; transition: none; }
          .ch-row.ch-row-fx.ch-in:hover { transform: none; }
        }

        /* Right-side evidence block as a subtle insight card */
        .ch-row.ch-row-fx .ch-insight {
          background: rgba(31,42,68,0.025);
          border-left: none;
          border-top: none;
          border-radius: 8px;
          padding: 22px 24px;
          gap: 10px;
          transition: background 250ms ease;
        }
        .ch-row.ch-row-fx:hover .ch-insight {
          background: rgba(31,42,68,0.045);
        }
        .ch-insight-text {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.55;
          color: var(--ink-soft);
          font-weight: 500;
          margin: 0;
          text-wrap: balance;
        }
        .ch-row.ch-row-fx .ch-stat-source {
          margin-top: 0;
        }
      `}</style>
    </section>
  );
}
