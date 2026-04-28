import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="foot" id="footer">
      <div className="container">
        <div className="foot-grid">
          <div>
            <Logo color="white" size="xl" />
            <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: 16, fontSize: 14, lineHeight: 1.6, maxWidth: 360 }}>
              Digitala system för stöd och omsorg. Byggda nära verksamheten,
              med data lagrad inom EU.
            </p>
          </div>
          <div className="foot-col">
            <h5>Produkt</h5>
            <a href="#">Rutina Admin</a>
            <a href="#">Rutina App</a>
            <a href="#">Säkerhet</a>
          </div>
          <div className="foot-col">
            <h5>Bolaget</h5>
            <a href="#">Om oss</a>
          </div>
          <div className="foot-col">
            <h5>Kontakt</h5>
            <a href="mailto:info@avivocare.com">info@avivocare.com</a>
            <a href="mailto:info@avivocare.com?subject=Boka%20demo">Boka demo</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Avivo AB · Org. 559538-5260 · Stockholm, Sverige</span>
        </div>
      </div>
    </footer>
  );
}
