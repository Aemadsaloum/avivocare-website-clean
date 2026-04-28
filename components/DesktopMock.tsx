interface DesktopMockProps {
  theme?: 'light' | 'dark';
}

export default function DesktopMock({ theme = 'light' }: DesktopMockProps) {
  return (
    <div style={{ width: '100%', maxWidth: 520, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Monitor */}
      <div style={{
        width: '100%',
        background: 'linear-gradient(180deg, #1a2238 0%, #0F1726 100%)',
        borderRadius: 12,
        padding: '10px 10px 28px',
        boxShadow: `0 50px 80px -20px rgba(15,23,38,0.35), 0 20px 40px -10px rgba(15,23,38,0.2), 0 0 0 1px rgba(15,23,38,0.08), inset 0 1px 0 rgba(255,255,255,0.06)`,
        position: 'relative',
      }}>
        {/* Screen */}
        <div style={{
          width: '100%',
          aspectRatio: '1.55',
          background: '#FBFBFD',
          borderRadius: 6,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'var(--font-sans)',
          boxShadow: 'inset 0 0 0 1px rgba(15,23,38,0.06)',
        }}>
          {/* Browser chrome */}
          <div style={{
            height: 26,
            background: '#F1F3F6',
            borderBottom: '1px solid rgba(15,23,38,0.06)',
            display: 'flex', alignItems: 'center',
            padding: '0 12px', gap: 6, flexShrink: 0,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F57' }} />
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FEBC2E' }} />
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#28C840' }} />
            <div style={{
              flex: 1, height: 14, margin: '0 60px 0 14px',
              background: 'white', borderRadius: 5,
              border: '1px solid rgba(15,23,38,0.06)',
            }} />
          </div>

          {/* App body */}
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '28% 1fr' }}>
            {/* Sidebar */}
            <div style={{
              background: 'linear-gradient(180deg, #2A3B65 0%, #1F2A4A 100%)',
              display: 'flex', flexDirection: 'column',
              padding: '16px 12px', gap: 4,
            }}>
              <div style={{ padding: '4px 6px 18px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/rutina-logo-white.png" alt="Rutina" style={{ height: 18, width: 'auto', display: 'block' }} />
              </div>
              <div style={{ height: 4, width: '40%', background: 'rgba(255,255,255,0.18)', borderRadius: 2, margin: '4px 6px 8px' }} />
              {[
                { active: true, w: '78%' },
                { active: false, w: '60%' },
                { active: false, w: '70%' },
                { active: false, w: '52%' },
                { active: false, w: '64%' },
              ].map((it, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '7px 8px',
                  background: it.active ? 'rgba(255,255,255,0.1)' : 'transparent',
                  borderRadius: 6,
                  position: 'relative',
                }}>
                  {it.active && (
                    <div style={{
                      position: 'absolute', left: -12, top: '50%',
                      transform: 'translateY(-50%)',
                      width: 3, height: 16, background: '#D96D5E',
                      borderRadius: '0 2px 2px 0',
                    }} />
                  )}
                  <div style={{
                    width: 12, height: 12, borderRadius: 3,
                    background: it.active ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.25)',
                    flexShrink: 0,
                  }} />
                  <div style={{
                    height: 5, width: it.w,
                    background: it.active ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.4)',
                    borderRadius: 3,
                  }} />
                </div>
              ))}
              <div style={{ flex: 1 }} />
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 6px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                marginTop: 8,
              }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'linear-gradient(135deg, #D96D5E, #c25749)', flexShrink: 0 }} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <div style={{ height: 4, width: '70%', background: 'rgba(255,255,255,0.7)', borderRadius: 2 }} />
                  <div style={{ height: 3, width: '45%', background: 'rgba(255,255,255,0.3)', borderRadius: 2 }} />
                </div>
              </div>
            </div>

            {/* Main content */}
            <div style={{
              display: 'flex', flexDirection: 'column',
              padding: '18px 22px', gap: 14,
              background: '#FBFBFD',
              overflow: 'hidden',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ height: 5, width: 60, background: '#9CA3AF', borderRadius: 3 }} />
                  <div style={{ height: 14, width: 130, background: '#1F2A4A', borderRadius: 4 }} />
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  <div style={{ height: 22, width: 22, background: 'white', borderRadius: 6, border: '1px solid rgba(15,23,38,0.08)' }} />
                  <div style={{ height: 22, width: 60, background: '#D96D5E', borderRadius: 6, boxShadow: '0 1px 2px rgba(217,109,94,0.25)' }} />
                </div>
              </div>

              {/* Table */}
              <div style={{
                flex: 1, background: 'white',
                border: '1px solid rgba(15,23,38,0.06)',
                borderRadius: 8,
                display: 'flex', flexDirection: 'column',
                boxShadow: '0 1px 2px rgba(15,23,38,0.03)',
                overflow: 'hidden',
              }}>
                {/* Table header */}
                <div style={{
                  display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 0.6fr',
                  gap: 8, padding: '10px 14px',
                  borderBottom: '1px solid rgba(15,23,38,0.06)',
                  background: '#F9FAFB', alignItems: 'center',
                }}>
                  {[60, 36, 44, 22].map((w, i) => (
                    <div key={i} style={{ height: 4, width: w, background: '#9CA3AF', borderRadius: 2 }} />
                  ))}
                </div>
                {/* Table rows */}
                {[
                  { color: '#34D399', name: 76, w1: 50, w2: 38 },
                  { color: '#34D399', name: 64, w1: 56, w2: 42 },
                  { color: '#D96D5E', name: 80, w1: 44, w2: 50, highlight: true },
                  { color: '#34D399', name: 70, w1: 52, w2: 36 },
                  { color: '#F59E0B', name: 58, w1: 48, w2: 44 },
                  { color: '#34D399', name: 72, w1: 54, w2: 40 },
                ].map((r, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 0.6fr',
                    gap: 8, padding: '10px 14px',
                    borderBottom: i < 5 ? '1px solid rgba(15,23,38,0.04)' : 'none',
                    alignItems: 'center',
                    background: r.highlight ? 'rgba(217,109,94,0.03)' : 'transparent',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{
                        width: 18, height: 18, borderRadius: '50%',
                        background: 'linear-gradient(135deg, #DCE5F2, #B8C8E0)',
                        flexShrink: 0, border: '1.5px solid white',
                        boxShadow: '0 1px 2px rgba(15,23,38,0.08)',
                      }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <div style={{ height: 5, width: r.name, background: '#1F2A4A', borderRadius: 2 }} />
                        <div style={{ height: 3, width: r.name * 0.55, background: '#9CA3AF', borderRadius: 2 }} />
                      </div>
                    </div>
                    <div>
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 4,
                        padding: '3px 7px', background: `${r.color}15`, borderRadius: 10,
                      }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: r.color }} />
                        <div style={{ height: 3, width: r.w1 * 0.6, background: r.color, borderRadius: 2 }} />
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <div style={{ height: 4, width: r.w2, background: '#1F2A4A', borderRadius: 2, opacity: 0.7 }} />
                      <div style={{ height: 3, width: r.w2 * 0.6, background: '#D1D5DB', borderRadius: 2 }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <div style={{ width: 4, height: 4, borderRight: '1.5px solid #9CA3AF', borderBottom: '1.5px solid #9CA3AF', transform: 'rotate(-45deg)' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* iMac chin */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: 18, display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}>
          <div style={{ fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}>RUTINA</div>
        </div>
      </div>
      {/* Stand neck */}
      <div style={{
        width: '14%', height: 28,
        background: 'linear-gradient(180deg, #0F1726 0%, #1a2238 100%)',
        clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0 100%)',
      }} />
      {/* Stand base */}
      <div style={{
        width: '46%', height: 7,
        background: 'linear-gradient(180deg, #1a2238 0%, #0F1726 100%)',
        borderRadius: '3px 3px 4px 4px',
        boxShadow: '0 12px 24px rgba(15,23,38,0.18)',
      }} />
    </div>
  );
}
