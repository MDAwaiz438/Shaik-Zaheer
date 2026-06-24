export default function Brands() {
  const brands = ["Apple", "Samsung", "MI", "Oppo", "Vivo", "HP", "Dell", "Asus", "Lenovo"];
  
  return (
    <section className="brands">
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
