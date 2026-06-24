import Link from 'next/link';
import GlobalCanvas from './GlobalCanvas';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <div style={{ display: 'inline-block', background: 'rgba(201,168,76,0.1)', color: 'var(--color-gold)', padding: '0.4rem 0.8rem', borderRadius: '30px', fontWeight: 'bold', marginBottom: '1rem', border: '1px solid var(--color-gold)', fontSize: 'clamp(0.75rem, 4vw, 0.9rem)', whiteSpace: 'nowrap' }}>
            🚚 Doorstep Service Available
          </div>
          <h1>Fast. Reliable. <span>Trusted Tech Repairs.</span></h1>
          <p>Screen replacement, battery swap, data recovery & more — all brands, all devices.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Book a Repair</Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn" style={{ border: '1px solid #e2e8f0' }}>WhatsApp Us</a>
          </div>
        </div>
        <div className="hero-visuals">
          <div className="blob-bg"></div>
          <GlobalCanvas />
        </div>
      </div>
    </section>
  );
}
