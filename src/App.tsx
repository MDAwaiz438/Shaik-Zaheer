import React, { useState } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="logo">
          <div className="logo-icon">Z</div>
          <div className="logo-text">ZED<span>MOBILES</span></div>
        </a>
        
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#featured">Featured</a>
          <a href="#contact">Contact</a>
          <a href="#quote" className="btn btn-primary" style={{marginLeft: '1rem'}}>Shop Now</a>
        </nav>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Your Trusted <span>Tech Partner</span></h1>
          <p>Mobiles. Computers. Solutions. Discover the latest premium gadgets, laptops, and expert repair services all in one place.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#categories" className="btn btn-primary">Explore Products</a>
            <a href="#contact" className="btn" style={{ border: '1px solid #e2e8f0' }}>Contact Support</a>
          </div>
        </div>
        <div className="hero-visuals">
          <div className="blob-bg"></div>
          <img src="/laptop.png" alt="Premium Laptop" className="main-img" />
          <img src="/smartphone.png" alt="Modern Smartphones" className="secondary-img" />
        </div>
      </div>
    </section>
  )
}

function TrustBadges() {
  return (
    <section className="features">
      <div className="container features-grid">
        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <div className="feature-info">
            <h3>100% Genuine</h3>
            <p>Authentic Products</p>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🏷️</div>
          <div className="feature-info">
            <h3>Best Prices</h3>
            <p>Guaranteed Savings</p>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-icon">👨‍💻</div>
          <div className="feature-info">
            <h3>Expert Support</h3>
            <p>You Can Trust</p>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔧</div>
          <div className="feature-info">
            <h3>Services & Repairs</h3>
            <p>For All Brands</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Brands() {
  const brands = ["Apple", "Samsung", "MI", "Oppo", "Vivo", "HP", "Dell", "Asus", "Lenovo"];
  
  return (
    <section className="brands">
      <div className="marquee-container">
        {/* Double the list for infinite scrolling effect */}
        <div>
          {brands.map((b, i) => <span key={i}>{b}</span>)}
        </div>
        <div>
          {brands.map((b, i) => <span key={i + brands.length}>{b}</span>)}
        </div>
      </div>
    </section>
  )
}

function Categories() {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <p>Find exactly what you're looking for, from the newest mobile releases to high-performance computing power.</p>
        </div>
        
        <div className="categories-grid">
          <div className="category-card">
            <div className="cat-icon-container">
              <img src="/smartphone.png" alt="Mobiles" />
            </div>
            <h3>Mobiles</h3>
            <p>Latest brands & best prices on iOS and Android devices.</p>
            <a href="#" className="btn" style={{ color: 'var(--zed-bright-blue)', fontWeight: '600' }}>View Collection →</a>
          </div>
          
          <div className="category-card">
            <div className="cat-icon-container">
              <img src="/laptop.png" alt="Computers" />
            </div>
            <h3>Computers</h3>
            <p>Laptops, desktops & accessories for work and gaming.</p>
            <a href="#" className="btn" style={{ color: 'var(--zed-bright-blue)', fontWeight: '600' }}>View Collection →</a>
          </div>
          
          <div className="category-card">
            <div className="cat-icon-container">
              <div className="cat-icon-fallback">⚙️</div>
            </div>
            <h3>Solutions</h3>
            <p>Professional repairs, upgrades & comprehensive tech support.</p>
            <a href="#" className="btn" style={{ color: 'var(--zed-bright-blue)', fontWeight: '600' }}>Learn More →</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedProducts() {
  return (
    <section className="featured" id="featured">
      <div className="container">
        <div className="section-header">
          <h2>Featured Tech</h2>
          <p>Upgrade your setup with our top-rated accessories and performance machines.</p>
        </div>
        
        <div className="featured-grid">
          <div className="product-card">
            <div className="product-image">
              <img src="/gaming_pc.png" alt="Gaming PC" />
            </div>
            <h3>Custom Gaming PC</h3>
            <div className="price">Starting at $999</div>
            <button className="btn btn-primary" style={{ width: '100%' }}>View Details</button>
          </div>
          
          <div className="product-card">
            <div className="product-image">
              <img src="/smartwatch.png" alt="Smartwatch" />
            </div>
            <h3>Premium Smartwatch</h3>
            <div className="price">$249.99</div>
            <button className="btn btn-primary" style={{ width: '100%' }}>View Details</button>
          </div>
          
          <div className="product-card">
            <div className="product-image">
              <img src="/headphones.png" alt="Wireless Headphones" />
            </div>
            <h3>Pro Wireless Headphones</h3>
            <div className="price">$199.99</div>
            <button className="btn btn-primary" style={{ width: '100%' }}>View Details</button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-text">ZED<span>MOBILES</span></div>
            <p>Your one-stop destination for the latest mobiles, computers, and trusted repair solutions. Experience technology with unparalleled support.</p>
          </div>
          
          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#categories">Shop Categories</a>
              <a href="#featured">Featured Tech</a>
              <a href="#services">Repair Services</a>
            </div>
          </div>
          
          <div>
            <h4>Customer Care</h4>
            <div className="footer-links">
              <a href="#">Track Order</a>
              <a href="#">Return Policy</a>
              <a href="#">FAQ</a>
              <a href="#">Support Center</a>
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
  )
}

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Brands />
        <Categories />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  )
}

export default App
