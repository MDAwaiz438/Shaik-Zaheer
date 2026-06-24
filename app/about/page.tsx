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
      </div>
    </div>
  );
}
