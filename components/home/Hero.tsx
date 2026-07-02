import Link from 'next/link';
import GlobalCanvas from './GlobalCanvas';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <div style={{ display: 'inline-block', background: 'rgba(37, 99, 235, 0.08)', color: 'var(--color-blue)', padding: '0.4rem 1rem', borderRadius: '9999px', fontWeight: '600', marginBottom: '1rem', border: '1px solid rgba(37, 99, 235, 0.2)', fontSize: 'clamp(0.75rem, 4vw, 0.9rem)', whiteSpace: 'nowrap', backdropFilter: 'blur(8px)' }}>
            🚚 Doorstep Service Available
          </div>
          <h1>Fast. Reliable. <span>Trusted Tech Repairs.</span></h1>
          <p>Screen replacement, battery swap, data recovery & more — all brands, all devices.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Book a Repair</Link>
            <a href="https://wa.me/918309909248" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'white' }}>WhatsApp Us</a>
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