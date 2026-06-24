import Link from 'next/link';

export default function FeaturedServices() {
  const services = [
    {
      id: 'screen-replacement',
      title: 'Screen Replacement',
      desc: 'Cracked screen? Get it replaced in under 60 minutes with genuine parts.',
      icon: '📱'
    },
    {
      id: 'battery-swap',
      title: 'Battery Swap',
      desc: 'Restore your device\'s battery life with our premium battery replacements.',
      icon: '🔋'
    },
    {
      id: 'laptop-repair',
      title: 'Laptop / PC Repair',
      desc: 'Hardware upgrades, motherboard repairs, and software troubleshooting.',
      icon: '💻'
    }
  ];

  return (
    <section className="featured">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Top Services</h2>
        <div className="product-grid">
          {services.map(service => (
            <div key={service.id} className="product-card">
              <div className="product-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', height: '220px', background: 'var(--color-bg-accent-card)' }}>
                {service.icon}
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
