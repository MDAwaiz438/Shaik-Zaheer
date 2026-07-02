import Link from 'next/link';

export default function ServicesPage() {
  const allServices = [
    {
      id: 'screen-replacement',
      title: 'Screen Replacement',
      desc: 'Got a cracked screen? We offer high-quality, genuine screen replacements for all major smartphone and tablet brands within 60 minutes.',
      image: '/images/services/service_screen_final.png',
      startingPrice: '₹1499'
    },
    {
      id: 'battery-replacement',
      title: 'Battery Replacement',
      desc: 'Is your device draining too fast? Get a fresh, original battery installed quickly to restore your full day of usage.',
      image: '/images/services/service_battery_final.png',
      startingPrice: '₹899'
    },
    {
      id: 'data-recovery',
      title: 'Data Recovery',
      desc: 'Accidentally deleted photos or broken phone? Our expert technicians can safely recover your precious data, contacts, and media.',
      image: '/images/services/service_data_final.png',
      startingPrice: '₹1999'
    },
    {
      id: 'software-virus',
      title: 'Software Issues & Virus Removal',
      desc: 'Device running slow or crashing? We handle OS reinstalls, malware removal, and software optimization for phones and PCs.',
      image: '/images/services/service_software_final.png',
      startingPrice: '₹499'
    },
    {
      id: 'laptop-pc-repair',
      title: 'Laptop / PC Repair',
      desc: 'From motherboard repairs and keyboard replacements to RAM/SSD upgrades. We fix all Windows and Mac machines.',
      image: '/images/services/service_laptop_final.png',
      startingPrice: '₹999'
    },
    {
      id: 'accessories-parts',
      title: 'Accessories & Spare Parts',
      desc: 'We stock genuine chargers, cables, protective cases, tempered glass, and internal spare parts for all major tech brands.',
      image: '/images/services/service_accessories_final.png',
      startingPrice: '₹199'
    },
    {
      id: 'routers-networking',
      title: 'Routers & Networking',
      desc: 'Wi-Fi dead zones? We install, configure, and troubleshoot routers, mesh networks, and range extenders for flawless connectivity.',
      image: '/images/services/service_router_final.png',
      startingPrice: '₹499'
    },
    {
      id: 'cctv-installation',
      title: 'CCTV Installation & Service',
      desc: 'Secure your home or business. We provide end-to-end CCTV camera installation, DVR setup, and maintenance services.',
      image: '/images/services/service_cctv_final.png',
      startingPrice: '₹1499'
    },
    {
      id: 'printer-repair',
      title: 'Printer Service & Repair',
      desc: 'Inkjet or Laserjet issues? We fix paper jams, connectivity issues, and provide ink/toner replacement and regular maintenance.',
      image: '/images/services/service_printer_final.png',
      startingPrice: '₹599'
    }
  ];

  return (
    <div className="app-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="noise-overlay"></div>
      
      {/* Decorative Blobs for Glassmorphism Background */}
      <div style={{ position: 'absolute', top: '15%', left: '-5%', width: '400px', height: '400px', background: '#3c3fde', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.15, zIndex: 0, pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '20%', right: '-5%', width: '500px', height: '500px', background: 'var(--color-blue)', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.2, zIndex: 0, pointerEvents: 'none' }}></div>

      <main style={{ paddingTop: '80px', paddingBottom: '80px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-block', background: 'rgba(37, 99, 235, 0.08)', color: 'var(--color-blue)', padding: '0.4rem 1rem', borderRadius: '9999px', fontWeight: '600', marginBottom: '1.5rem', border: '1px solid rgba(37, 99, 235, 0.2)', fontSize: 'clamp(0.8rem, 4vw, 0.95rem)', whiteSpace: 'nowrap', backdropFilter: 'blur(8px)' }}>
              🚚 Doorstep Service Available
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Expert Services</h1>
            <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>Professional repair and maintenance solutions for all your tech devices. Quick turnaround, trusted parts, and guaranteed satisfaction.</p>
          </div>

          <div className="featured-grid">
            {allServices.map(service => (
              <div key={service.id} className="product-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="product-image" style={{ width: '100%', height: '220px', marginBottom: '1.5rem', overflow: 'hidden', borderRadius: '12px' }}>
                  <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="product-info" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.4rem' }}>{service.title}</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>{service.desc}</p>
                  <Link href="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }}>Get a Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
