import Link from 'next/link';

export default function ServicesPage() {
  const allServices = [
    {
      id: 'screen-replacement',
      title: 'Screen Replacement',
      desc: 'Got a cracked screen? We offer high-quality, genuine screen replacements for all major smartphone and tablet brands within 60 minutes.',
      icon: '📱',
      startingPrice: '₹1499'
    },
    {
      id: 'battery-replacement',
      title: 'Battery Replacement',
      desc: 'Is your device draining too fast? Get a fresh, original battery installed quickly to restore your full day of usage.',
      icon: '🔋',
      startingPrice: '₹899'
    },
    {
      id: 'data-recovery',
      title: 'Data Recovery',
      desc: 'Accidentally deleted photos or broken phone? Our expert technicians can safely recover your precious data, contacts, and media.',
      icon: '💾',
      startingPrice: '₹1999'
    },
    {
      id: 'software-virus',
      title: 'Software Issues & Virus Removal',
      desc: 'Device running slow or crashing? We handle OS reinstalls, malware removal, and software optimization for phones and PCs.',
      icon: '🛡️',
      startingPrice: '₹499'
    },
    {
      id: 'laptop-pc-repair',
      title: 'Laptop / PC Repair',
      desc: 'From motherboard repairs and keyboard replacements to RAM/SSD upgrades. We fix all Windows and Mac machines.',
      icon: '💻',
      startingPrice: '₹999'
    },
    {
      id: 'accessories-parts',
      title: 'Accessories & Spare Parts',
      desc: 'We stock genuine chargers, cables, protective cases, tempered glass, and internal spare parts for all major tech brands.',
      icon: '🎧',
      startingPrice: '₹199'
    }
  ];

  return (
    <div className="app-wrapper">
      <div className="noise-overlay"></div>
      <main style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Expert Services</h1>
            <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>Professional repair and maintenance solutions for all your tech devices. Quick turnaround, trusted parts, and guaranteed satisfaction.</p>
          </div>

          <div className="product-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {allServices.map(service => (
              <div key={service.id} className="product-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="product-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', height: '200px', background: 'var(--color-bg-accent-card)', width: '100%' }}>
                  {service.icon}
                </div>
                <div className="product-info" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.4rem' }}>{service.title}</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>{service.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>Starts at {service.startingPrice}</span>
                    <Link href="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Get Quote</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
