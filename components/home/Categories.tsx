import Link from 'next/link';

export default function Categories() {
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
            <Link href="/products?category=mobiles" className="btn" style={{ color: 'var(--color-gold-bright)', fontWeight: '600' }}>View Collection →</Link>
          </div>
          
          <div className="category-card">
            <div className="cat-icon-container">
              <img src="/laptop.png" alt="Computers" />
            </div>
            <h3>Computers</h3>
            <p>Laptops, desktops & accessories for work and gaming.</p>
            <Link href="/products?category=computers" className="btn" style={{ color: 'var(--color-gold-bright)', fontWeight: '600' }}>View Collection →</Link>
          </div>
          
          <div className="category-card">
            <div className="cat-icon-container">
              <div className="cat-icon-fallback">⚙️</div>
            </div>
            <h3>Solutions</h3>
            <p>Professional repairs, upgrades & comprehensive tech support.</p>
            <Link href="/contact" className="btn" style={{ color: 'var(--color-gold-bright)', fontWeight: '600' }}>Learn More →</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
