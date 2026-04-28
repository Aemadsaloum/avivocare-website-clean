'use client';

import { useRef, useEffect, useState } from 'react';
import React from 'react';

const slides: { headline: React.ReactNode; lede: React.ReactNode }[] = [
  {
    headline: (
      <>
        Omsorgen är byggd för<br />
        <span className="accent-italic">människor</span>. Verktygen är inte det.
      </>
    ),
    lede: (
      <>
        Tre strukturella problem skapar onödig stress för personal, otydlighet
        för brukaren och osynlighet för ledningen.
      </>
    ),
  },
  {
    headline: (
      <>
        Brukarens <span className="accent-italic">röst</span> kan inte vara något som &ldquo;läggs till&rdquo;.
      </>
    ),
    lede: <>Den måste finnas i systemet — annars försvinner den i vardagen.</>,
  },
  {
    headline: (
      <>
        Arbetsmiljö avgörs inte i <span className="accent-italic">policys</span>.
      </>
    ),
    lede: <>Den avgörs i mötet mellan behov och bemanning — varje dag.</>,
  },
];

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
  const [slideIdx, setSlideIdx] = useState(0);
  const [slideVisible, setSlideVisible] = useState(true);
  // tick is bumped on manual navigation to restart the auto-rotate interval
  const [tick, setTick] = useState(0);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Auto-rotate the headline/intro slide every 5s with a soft fade.
  // Restarts whenever `tick` changes (i.e. after a manual dot click).
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideVisible(false);
      fadeTimeoutRef.current = setTimeout(() => {
        setSlideIdx((i) => (i + 1) % slides.length);
        setSlideVisible(true);
      }, 360);
    }, 5000);
    return () => {
      clearInterval(interval);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, [tick]);

  const goToSlide = (i: number) => {
    if (i === slideIdx) return;
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    setSlideVisible(false);
    fadeTimeoutRef.current = setTimeout(() => {
      setSlideIdx(i);
      setSlideVisible(true);
    }, 360);
    // restart the auto-rotate timer so the user gets a full 5s before next auto-advance
    setTick((t) => t + 1);
  };

  return (
    <section className="section ch-section" id="utmaningar" ref={sectionRef}>
      <div className="ch-bg-num" aria-hidden="true">01</div>

      <div className="container">
        <header className="ch-head">
          <div className="ch-eyebrow">
            <span className="ch-eyebrow-line" />
            <span>UTMANINGEN</span>
          </div>
          <div className={`ch-slide${slideVisible ? '' : ' ch-slide--hidden'}`}>
            <h2 className="ch-headline">{slides[slideIdx].headline}</h2>
            <p className="ch-lede">{slides[slideIdx].lede}</p>
          </div>
          <div className="ch-slide-dots" role="tablist" aria-label="Utmaningen — bildspel">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-label={`Visa bild ${i + 1} av ${slides.length}`}
                aria-selected={i === slideIdx}
                className={`ch-slide-dot${i === slideIdx ? ' is-active' : ''}`}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>
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

        /* Headline/intro slide rotator — soft fade */
        .ch-slide {
          transition: opacity 360ms ease, transform 360ms ease;
          opacity: 1;
          transform: translateY(0);
        }
        .ch-slide.ch-slide--hidden {
          opacity: 0;
          transform: translateY(6px);
        }
        @media (prefers-reduced-motion: reduce) {
          .ch-slide { transition: opacity 200ms ease; transform: none; }
          .ch-slide.ch-slide--hidden { transform: none; }
        }
        .ch-slide-dots {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 28px;
        }
        .ch-slide-dot {
          appearance: none;
          -webkit-appearance: none;
          border: 0;
          margin: 0;
          padding: 0;
          font: inherit;
          cursor: pointer;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(31,42,68,0.18);
          position: relative;
          transition: background 360ms ease, transform 360ms ease;
        }
        /* invisible expanded hit area so the dot is comfortable to tap */
        .ch-slide-dot::before {
          content: '';
          position: absolute;
          inset: -10px;
        }
        .ch-slide-dot:hover {
          background: rgba(31,42,68,0.4);
        }
        .ch-slide-dot:focus-visible {
          outline: 2px solid var(--coral);
          outline-offset: 4px;
        }
        .ch-slide-dot.is-active {
          background: var(--coral);
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
