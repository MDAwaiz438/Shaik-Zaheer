import Link from 'next/link';

export default function FeaturedProducts() {
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
            <Link href="/products" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>View Details</Link>
          </div>
          
          <div className="product-card">
            <div className="product-image">
              <img src="/smartwatch.png" alt="Smartwatch" />
            </div>
            <h3>Premium Smartwatch</h3>
            <div className="price">$249.99</div>
            <Link href="/products" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>View Details</Link>
          </div>
          
          <div className="product-card" id="headphones-card">
            <div className="product-image" id="product-headphones">
              <img src="/headphones.png" alt="Wireless Headphones" />
            </div>
            <h3>Pro Wireless Headphones</h3>
            <div className="price">$199.99</div>
            <Link href="/products" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>View Details</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
