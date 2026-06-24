import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo-text" style={{display: 'block', marginBottom: '1rem'}}>ZED<span>MOBILES</span></Link>
            <p>Your one-stop destination for the latest mobiles, computers, and trusted repair solutions. Experience technology with unparalleled support.</p>
          </div>
          
          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/categories">Shop Categories</Link>
              <Link href="/products">Featured Tech</Link>
              <Link href="/contact">Repair Services</Link>
            </div>
          </div>
          
          <div>
            <h4>Customer Care</h4>
            <div className="footer-links">
              <Link href="/contact">Track Order</Link>
              <Link href="/contact">Return Policy</Link>
              <Link href="/about">FAQ</Link>
              <Link href="/contact">Support Center</Link>
            </div>
          </div>
          
          <div className="contact-box">
            <h4>Visit Us</h4>
            <div className="contact-item">
              <i>📍</i>
              <span>123 Tech Avenue, Innovation District, City, State 12345</span>
            </div>
            <div className="contact-item">
              <i>📞</i>
              <span>+1 (555) 123-4567</span>
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
