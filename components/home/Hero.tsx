import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Fast. Reliable. <span>Trusted Tech Repairs.</span></h1>
          <p>Screen replacement, battery swap, data recovery & more — all brands, all devices.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Book a Repair</Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn" style={{ border: '1px solid #e2e8f0' }}>WhatsApp Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
