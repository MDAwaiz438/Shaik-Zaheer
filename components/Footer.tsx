import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo-text" style={{display: 'block', marginBottom: '1rem'}}>Zedd <span>Mobiles & Computers</span></Link>
            <p>Your one-stop destination for the latest mobiles, computers, and trusted repair solutions. Experience technology with unparalleled support.</p>
          </div>
          
          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          
          <div>
            <h4>Services</h4>
            <div className="footer-links">
              <Link href="/contact">Repair Request</Link>
              <Link href="/services">Screen Replacement</Link>
              <Link href="/services">Battery Swap</Link>
              <Link href="/services">Data Recovery</Link>
            </div>
          </div>
          
          <div className="contact-box">
            <h4>Visit Us</h4>
            <div className="contact-item">
              <i>📍</i>
              <span>{/* TODO: Replace with real Indian store address */}123 Tech Avenue, Innovation District</span>
            </div>
            <div className="contact-item">
              <i>📞</i>
              <span>+91 99498 91958</span>
            </div>
            <div className="contact-item">
              <i>✉️</i>
              <span>support@zedmobiles.in</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ZED Mobiles Computers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
