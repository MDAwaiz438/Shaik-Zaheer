import Link from 'next/link';
import GlobalCanvas from './GlobalCanvas';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Your Trusted <span>Tech Partner</span></h1>
          <p>Mobiles. Computers. Solutions. Discover the latest premium gadgets, laptops, and expert repair services all in one place.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/categories" className="btn btn-primary">Explore Products</Link>
            <Link href="/contact" className="btn" style={{ border: '1px solid #e2e8f0' }}>Contact Support</Link>
          </div>
        </div>
        <div className="hero-visuals">
          <div className="blob-bg"></div>
          <GlobalCanvas />
        </div>
      </div>
    </section>
  )
}
