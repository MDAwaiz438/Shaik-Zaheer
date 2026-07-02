import Link from 'next/link';

export default function FeaturedServices() {
  const services = [
    {
      id: 'screen-replacement',
      title: 'Screen Replacement',
      desc: 'Cracked screen? Get it replaced in under 60 minutes with genuine parts.',
      image: '/images/services/service_screen_repair_1782292933703.png'
    },
    {
      id: 'battery-swap',
      title: 'Battery Swap',
      desc: 'Restore your device\'s battery life with our premium battery replacements.',
      image: '/images/services/service_battery_1782292946672.png'
    },
    {
      id: 'laptop-repair',
      title: 'Laptop / PC Repair',
      desc: 'Hardware upgrades, motherboard repairs, and software troubleshooting.',
      image: '/images/services/service_laptop_1782292996305.png'
    }
  ];

  return (
    <section className="featured" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Blobs for Glassmorphism Background */}
      <div style={{ position: 'absolute', top: '20%', left: '5%', width: '300px', height: '300px', background: '#3c3fde', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.15, zIndex: 0, pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px', background: 'var(--color-blue)', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.2, zIndex: 0, pointerEvents: 'none' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Top Services</h2>
        <div className="featured-grid">
          {services.map(service => (
            <div key={service.id} className="product-card">
              <div className="product-image" style={{ width: '100%', height: '220px', marginBottom: '1.5rem', overflow: 'hidden', borderRadius: '12px' }}>
                <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="product-info">
                <h3>{service.title}</h3>
                <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '1rem' }}>{service.desc}</p>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>Get a Quote</Link>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/services" className="btn" style={{ border: '1px solid var(--color-border-subtle)' }}>View All Services</Link>
        </div>
      </div>
    </section>
  )
}
