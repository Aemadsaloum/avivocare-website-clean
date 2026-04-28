export default function PhoneMock() {
  return (
    <div style={{ width: '100%', maxWidth: 260, margin: '0 auto', position: 'relative' }}>
      <div style={{
        width: '100%',
        aspectRatio: '0.495',
        background: 'linear-gradient(160deg, #1a1f2e 0%, #0a0d14 100%)',
        borderRadius: 42,
        padding: 5,
        boxShadow: `0 50px 80px -20px rgba(15,23,38,0.35), 0 20px 40px -10px rgba(15,23,38,0.18), 0 0 0 1px rgba(15,23,38,0.06), inset 0 0 0 2px rgba(255,255,255,0.04)`,
        position: 'relative',
      }}>
        <div style={{ width: '100%', height: '100%', background: '#000', borderRadius: 38, padding: 3, position: 'relative' }}>
          <div style={{
            width: '100%', height: '100%',
            background: '#FBFBFD',
            borderRadius: 36,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}>
            {/* Dynamic island */}
            <div style={{
              position: 'absolute', top: 10, left: '50%',
              transform: 'translateX(-50%)',
              width: 78, height: 22, background: '#000',
              borderRadius: 14, zIndex: 5,
            }} />

            {/* Status bar */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '14px 22px 0',
              fontSize: 10, fontWeight: 600, color: '#1a1f2e',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '-0.01em',
            }}>
              <span style={{ paddingTop: 2 }}>9:41</span>
              <div style={{ display: 'flex', gap: 4, alignItems: 'center', paddingTop: 2 }}>
                <div style={{ display: 'flex', gap: 2, alignItems: 'flex-end' }}>
                  {[3, 5, 7, 9].map(h => (
                    <div key={h} style={{ width: 2.5, height: h, background: '#1a1f2e', borderRadius: 1 }} />
                  ))}
                </div>
                <div style={{
                  width: 18, height: 9, border: '1px solid #1a1f2e',
                  borderRadius: 2.5, padding: 1, marginLeft: 3, position: 'relative',
                }}>
                  <div style={{ width: '75%', height: '100%', background: '#1a1f2e', borderRadius: 1 }} />
                  <div style={{
                    position: 'absolute', right: -2.5, top: '30%',
                    width: 1.5, height: '40%', background: '#1a1f2e', borderRadius: 1,
                  }} />
                </div>
              </div>
            </div>

            {/* App header */}
            <div style={{ padding: '38px 22px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/rutina-logo.png" alt="Rutina" style={{ height: 22, width: 'auto', display: 'block' }} />
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: 'linear-gradient(135deg, #DCE5F2, #B8C8E0)',
                border: '1.5px solid white',
                boxShadow: '0 2px 6px rgba(15,23,38,0.08)',
              }} />
            </div>

            {/* Greeting */}
            <div style={{ padding: '0 22px 18px' }}>
              <div style={{ height: 5, width: 72, background: '#9CA3AF', borderRadius: 3, marginBottom: 8 }} />
              <div style={{ height: 14, width: 140, background: '#1F2A4A', borderRadius: 4 }} />
            </div>

            {/* Date strip */}
            <div style={{
              display: 'flex', gap: 8, padding: '0 22px 20px', overflowX: 'hidden',
            }}>
              {[
                { active: false, d: 'M', n: '19' },
                { active: false, d: 'T', n: '20' },
                { active: true, d: 'O', n: '21' },
                { active: false, d: 'T', n: '22' },
                { active: false, d: 'F', n: '23' },
              ].map((day, i) => (
                <div key={i} style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                  padding: '8px 10px',
                  background: day.active ? '#2A3B65' : 'transparent',
                  borderRadius: 12,
                  minWidth: 36,
                }}>
                  <span style={{ fontSize: 9, fontWeight: 600, color: day.active ? 'rgba(255,255,255,0.7)' : '#9CA3AF', letterSpacing: '0.05em' }}>{day.d}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: day.active ? 'white' : '#1F2A4A' }}>{day.n}</span>
                  {day.active && <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#D96D5E' }} />}
                </div>
              ))}
            </div>

            {/* Activity cards */}
            <div style={{ flex: 1, padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { time: '09:00', title: 60, sub: 38, color: '#34D399', tag: 28 },
                { time: '11:30', title: 80, sub: 52, color: '#D96D5E', tag: 36, highlight: true },
                { time: '14:00', title: 70, sub: 44, color: '#60A5FA', tag: 30 },
              ].map((card, i) => (
                <div key={i} style={{
                  background: card.highlight ? 'rgba(217,109,94,0.04)' : 'white',
                  border: card.highlight ? '1px solid rgba(217,109,94,0.18)' : '1px solid rgba(15,23,38,0.06)',
                  borderRadius: 14,
                  padding: '12px 14px',
                  display: 'grid',
                  gridTemplateColumns: '3px 1fr',
                  gap: 12,
                  alignItems: 'center',
                  boxShadow: card.highlight ? '0 2px 12px rgba(217,109,94,0.08)' : '0 1px 4px rgba(15,23,38,0.04)',
                }}>
                  <div style={{ width: 3, height: 32, background: card.color, borderRadius: 2 }} />
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                      <div style={{ height: 9, width: card.title, background: '#1F2A4A', borderRadius: 4 }} />
                      <div style={{
                        height: 14, width: card.tag, borderRadius: 6,
                        background: `${card.color}20`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <div style={{ height: 3, width: card.tag * 0.55, background: card.color, borderRadius: 2 }} />
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ height: 6, width: 28, background: '#9CA3AF', borderRadius: 3 }} />
                      <div style={{ width: 2, height: 2, borderRadius: '50%', background: '#D1D5DB' }} />
                      <div style={{ height: 6, width: card.sub, background: '#D1D5DB', borderRadius: 3 }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom nav */}
            <div style={{
              height: 56, background: 'white',
              borderTop: '1px solid rgba(15,23,38,0.06)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-around',
              padding: '0 8px',
              marginTop: 14,
            }}>
              {[true, false, false, false].map((active, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '6px 10px' }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: 6,
                    background: active ? '#2A3B65' : 'rgba(15,23,38,0.08)',
                  }} />
                  {active && <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#D96D5E' }} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
