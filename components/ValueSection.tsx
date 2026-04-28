'use client';

import { useRef, useState, useEffect } from 'react';
import React from 'react';
import DesktopMock from './DesktopMock';
import PhoneMock from './PhoneMock';

const cols = [
  {
    key: 'individ',
    n: '01',
    meta: 'För individen',
    headline: 'Min röst,\nmin dag.',
    body: 'Förutsägbarhet, översikt och en vardag som faktiskt stämmer — formad tillsammans med personalen.',
  },
  {
    key: 'personal',
    n: '02',
    meta: 'För personalen',
    headline: 'Tid till\nmänniskor.',
    body: 'Mindre dubbeldokumentation, tydlig dagöverblick i fält, smidig överlämning. Frigjord tid går tillbaka till bemötandet.',
  },
  {
    key: 'ledning',
    n: '03',
    meta: 'För ledningen',
    headline: 'Insyn utan\nextra arbete.',
    body: 'Levande KPI:er på enhets- och kommunnivå, strukturerade avvikelser, underlag för systematiskt kvalitetsarbete.',
  },
];

const sharedItems = [
  { lab: 'Genomförandeplan', col: 0 },
  { lab: 'Metodblad', col: 0 },
  { lab: 'Riskbedömning', col: 1 },
  { lab: 'Schema', col: 1 },
  { lab: 'Mål & uppföljning', col: 2 },
  { lab: 'Helhetsblick', col: 2 },
];

export default function ValueSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);
  const [flowing, setFlowing] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const els = sectionRef.current.querySelectorAll('[data-vs5-reveal]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('vs5-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!flowRef.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setFlowing(true);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    io.observe(flowRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section vs5-section" id="fordelar" ref={sectionRef}>
      <div className="container">
        <header className="vs5-head" data-vs5-reveal>
          <div className="vs5-eyebrow-row">
            <span className="vs5-rom">III</span>
            <span className="vs5-line" />
            <span className="vs5-mono">VÄRDE</span>
          </div>
          <h2 className="vs5-headline">
            En produkt.<br />
            <span className="accent-italic">Tre perspektiv.</span><br />
            En sanning.
          </h2>
          <p className="vs5-lede">
            Individens delaktighet, personalens tid och ledningens insyn växer ur
            samma data, i samma stund.
          </p>
        </header>

        <div className={`vs5-diagram ${flowing ? 'is-flowing' : ''}`} ref={flowRef}>
          <div className="vs5-cols">
            {cols.map((c, i) => (
              <article key={c.key} className="vs5-col" style={{ '--col-i': i } as React.CSSProperties}>
                <div className="vs5-col-meta">
                  <span className="vs5-col-num">{c.n}</span>
                  <span className="vs5-col-role">{c.meta}</span>
                </div>
                <h3 className="vs5-col-headline">
                  {c.headline.split('\n').map((line, j) => (
                    <React.Fragment key={j}>
                      {line}{j < 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="vs5-col-body">{c.body}</p>
              </article>
            ))}
          </div>

          <div className="vs5-flow" aria-hidden="true">
            <svg className="vs5-flow-svg" viewBox="0 0 1200 320" preserveAspectRatio="none">
              <defs>
                <linearGradient id="vs5-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(31,42,74,0)" />
                  <stop offset="50%" stopColor="rgba(31,42,74,0.22)" />
                  <stop offset="100%" stopColor="rgba(217,109,94,0.4)" />
                </linearGradient>
              </defs>
              <path d="M 200 0 L 200 140 Q 200 200 350 230 L 540 260" stroke="url(#vs5-grad)" strokeWidth="1.5" fill="none" />
              <path d="M 600 0 L 600 260" stroke="rgba(31,42,74,0.28)" strokeWidth="1.5" fill="none" />
              <path d="M 1000 0 L 1000 140 Q 1000 200 850 230 L 660 260" stroke="url(#vs5-grad)" strokeWidth="1.5" fill="none" />
              {flowing && (
                <>
                  {[0, 1, 2].map(col => (
                    [0, 1].map(i => (
                      <circle
                        key={`${col}-${i}`}
                        className={`vs5-packet vs5-packet-c${col}`}
                        r="5"
                        fill="var(--coral)"
                        style={{ animationDelay: `${col * 0.5 + i * 1.8}s` }}
                      />
                    ))
                  ))}
                </>
              )}
            </svg>
            <div className="vs5-data-labels">
              {sharedItems.map((it, idx) => (
                <span
                  key={idx}
                  className="vs5-data-pill"
                  style={{ '--col': it.col, '--idx': idx } as React.CSSProperties}
                >
                  {it.lab}
                </span>
              ))}
            </div>
          </div>

          <div className="vs5-anchor-wrap">
            <div className="vs5-anchor" data-vs5-reveal style={{ '--d': '320ms' } as React.CSSProperties}>
              <div className="vs5-mocks" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <div style={{ width: 234, height: 180, position: 'relative', zIndex: 1, overflow: 'visible' }}>
                  <div style={{ width: 520, transformOrigin: 'top left', transform: 'scale(0.45)' }}>
                    <DesktopMock theme="light" />
                  </div>
                </div>
                <div style={{ width: 110, height: 222, position: 'relative', marginLeft: -32, zIndex: 2, pointerEvents: 'none', overflow: 'visible' }}>
                  <div style={{ width: 260, transformOrigin: 'top left', transform: 'scale(0.42)' }}>
                    <PhoneMock />
                  </div>
                </div>
              </div>
              <div className="vs5-anchor-label">
                <span className="vs5-anchor-eyebrow">SAMMA SANNING</span>
                <span className="vs5-anchor-word">i samma stund</span>
              </div>
            </div>
          </div>
        </div>

        <p className="vs5-foot" data-vs5-reveal style={{ '--d': '500ms' } as React.CSSProperties}>
          <span className="accent-italic">En sanning.</span> Tre vinklar att se den från.
        </p>
      </div>
    </section>
  );
}
