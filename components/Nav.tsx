import Logo from './Logo';

interface NavProps {
  variant?: 'editorial' | 'bold';
}

export default function Nav({ variant = 'editorial' }: NavProps) {
  const onDark = variant === 'bold';
  const navStyle = onDark ? {
    background: 'rgba(42,59,101,0.6)',
    borderColor: 'rgba(255,255,255,0.18)',
    boxShadow: 'none',
  } : {};
  const linkColor = onDark ? 'rgba(255,255,255,0.85)' : undefined;

  return (
    <nav className="nav" style={navStyle}>
      <div style={{ position: 'relative', width: 200, height: 24, flexShrink: 0 }}>
        <div style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)' }}>
          <Logo size="lg" color={onDark ? 'white' : 'navy'} />
        </div>
      </div>
      <div className="nav-links">
        <a className="nav-link" style={{ color: linkColor }} href="#produkt">Produkt</a>
        <a className="nav-link" style={{ color: linkColor }} href="#fordelar">Fördelar</a>
        <a className="nav-link" style={{ color: linkColor }} href="#om">Om oss</a>
        <a className="nav-link" style={{ color: linkColor }} href="#kontakt">Kontakt</a>
      </div>
      <div className="nav-cta">
        <a className="nav-demo" href="mailto:info@avivocare.com?subject=Boka%20demo">Boka demo</a>
      </div>
    </nav>
  );
}
