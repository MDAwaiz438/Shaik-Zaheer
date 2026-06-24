import React from 'react';
import Link from 'next/link';

export default function CategoriesPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <section className="categories">
        <div className="container">
          <div className="section-header">
            <h2>All Categories</h2>
            <p>Browse through our wide range of technology categories.</p>
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
                <img src="/smartwatch.png" alt="Wearables" />
              </div>
              <h3>Wearables</h3>
              <p>Smartwatches, fitness trackers, and modern wearables.</p>
              <Link href="/products?category=wearables" className="btn" style={{ color: 'var(--color-gold-bright)', fontWeight: '600' }}>View Collection →</Link>
            </div>

            <div className="category-card">
              <div className="cat-icon-container">
                <img src="/headphones.png" alt="Audio" />
              </div>
              <h3>Audio</h3>
              <p>High-fidelity headphones, earbuds, and speakers.</p>
              <Link href="/products?category=audio" className="btn" style={{ color: 'var(--color-gold-bright)', fontWeight: '600' }}>View Collection →</Link>
            </div>
            
            <div className="category-card">
              <div className="cat-icon-container">
                <div className="cat-icon-fallback">⚙️</div>
              </div>
              <h3>Solutions & Services</h3>
              <p>Professional repairs, upgrades & comprehensive tech support.</p>
              <Link href="/contact" className="btn" style={{ color: 'var(--color-gold-bright)', fontWeight: '600' }}>Learn More →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
