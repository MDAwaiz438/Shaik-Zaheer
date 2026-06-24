export default function Brands() {
  const brands = ["Apple", "Samsung", "MI", "Oppo", "Vivo", "HP", "Dell", "Asus", "Lenovo"];
  
  return (
    <section className="brands" style={{ padding: '2rem 0', textAlign: 'center' }}>
      <h3 style={{ marginBottom: '1.5rem', opacity: 0.7, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Brands We Repair</h3>
      <div className="marquee-container">
        {/* Double the list for infinite scrolling effect */}
        <div>
          {brands.map((b, i) => <span key={i}>{b}</span>)}
        </div>
        <div>
          {brands.map((b, i) => <span key={i + brands.length}>{b}</span>)}
        </div>
      </div>
    </section>
  )
}
