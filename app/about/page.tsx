import React from 'react';

export default function AboutPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="container">
        <div className="section-header">
          <h2>About ZED MOBILES</h2>
          <p>Your Trusted Tech Partner</p>
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Welcome to ZED MOBILES, your ultimate destination for premium gadgets, computers, and top-tier tech solutions. Founded with a passion for technology and a commitment to customer satisfaction, we aim to provide an unparalleled shopping experience.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Whether you are looking for the latest smartphone releases, custom-built gaming PCs, ultra-slim productivity laptops, or smart wearables, we have a curated selection to meet your needs. We partner with top brands like Apple, Samsung, Asus, Dell, and many more to bring you only the best and 100% genuine products.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            But we are more than just a retail store. Our expert technicians are always ready to assist you with comprehensive repair services, system upgrades, and professional tech support. At ZED MOBILES, we believe in building lasting relationships with our customers through trust, quality, and exceptional service.
          </p>
            <p>
              Visit our store today or explore our online catalog to discover the future of technology, brought right to your fingertips.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '2rem', marginTop: '4rem', marginBottom: '4rem' }}>
            <div style={{ padding: '2rem', background: 'var(--color-bg-accent-card)', border: '1px solid var(--color-border-subtle)', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏆</div>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-gold)' }}>5+ Years Experience</h3>
              <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Serving customers since 2019</p>
            </div>
            <div style={{ padding: '2rem', background: 'var(--color-bg-accent-card)', border: '1px solid var(--color-border-subtle)', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛠️</div>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-gold)' }}>1000+ Devices Repaired</h3>
              <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Mobiles, laptops, tablets and more</p>
            </div>
            <div style={{ padding: '2rem', background: 'var(--color-bg-accent-card)', border: '1px solid var(--color-border-subtle)', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-gold)' }}>Same-Day Service</h3>
              <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Most repairs done within 24 hours</p>
            </div>
          </div>

          <div style={{ marginTop: '4rem', width: '100%', height: '400px', background: 'var(--color-bg-card)', border: '1px dashed var(--color-border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)' }}>
            {/* TODO: Add real ZED Mobiles team photo here */}
            <p>Image Placeholder: ZED Mobiles team</p>
          </div>
        </div>
      </div>
  );
}
