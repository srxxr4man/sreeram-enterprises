export default function Product() {
  const products = [
    { 
      name: "Industrial RO Unit", 
      desc: "High-capacity water purification systems made of Stainless Steel.", 
      category: "Purification",
      img: "/images/Steel RO.jpeg" 
    },
    { 
      name: "Pressure Vessel", 
      desc: "Custom fabricated Polyglass Vessel with suitable specifications and size.", 
      category: "Pressure Filtering Units",
      img: "/images/Pressure Filter.jpeg" 
    },
    { 
      name: "Prolife Domestic RO Unit", 
      desc: "High-capacity water purification systems which includes 5 stages of purification with UV,UF and alkaline.", 
      category: "Industrial Purification",
      img: "/images/Prolife.jpeg"
    },
    { 
      name: "XPria Domestic RO Unit", 
      desc: "Catalogue for OEM Brands.", 
      category: "Purification",
      img: "/images/XPria.jpeg"
    },
    { 
      name: "Aqua Innovica Domestic RO Unit", 
      desc: "High-capacity water purification systems which includes 5 stages of purification.", 
      category: "Purification",
      img: "/images/Aqua Innovica.jpeg"
    },
    { 
      name: "Aqua X Domestic RO Unit", 
      desc: "High-capacity water purification systems which includes 6 stages of purification with UV, UF, Copper and Alkaline.", 
      category: "Purification",
      img: "/images/Aqua X.jpeg"
    },
    { 
      name: "A V3 Domestic RO Unit", 
      desc: "Simplest Water Purification System without collection tank.", 
      category: "Purification",
      img: "/images/A V3 RO.jpeg"
    },
    { 
      name: "WaterPia Purifier", 
      desc: "High-capacity water purification systems which includes 4 stages of purification without RO.", 
      category: "Purification",
      img: "/images/Waterpia.jpeg"
    },
    { 
      name: "Water Treatment Chemicals", 
      desc: "Effluent/Swage Treatment Chemicals of all kinds for Industrial and Domestic Applications.", 
      category: "Purification/Treatment",
      img: "/images/WTC.png"
    },
    { 
      name: "Biogas Plant", 
      desc: "Errection and Installation of Biogas Plant for Industrial/DomesticApplications.", 
      category: "Industrial/Domestic Applications and Errection",
      img: "/images/biogasplant.jpg"
    },
    {
      name: "Furnace and Chimney Errections", 
      desc: "Errection and Installation of Furnace and Chimney for Industrial Applications.", 
      category: "Industrial Applications and Errection",
      img: "/images/chimney.jpg"
    },
    {
      name: "Service and Maintenance", 
      desc: "Service and Maintenance of all kinds of Water Purification Systems, Biogas Plants, Furnace and Chimney.", 
      category: "Service and Maintenance",
      img: "/images/service.jpg"
    }
  ];

  return (
    <section id="products" className="services-section" aria-label="Product Solutions Inventory">
      <div className="container">
        
        <div className="section-header-centered" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-tagline" style={{ color: 'var(--accent-purple)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>Our Inventory</span>
          <h2 className="section-title gradient-text" style={{ fontSize: '2.5rem' }}>Product Solutions</h2>
          <div className="title-accent-bar" style={{ margin: '16px auto 0 auto', background: 'linear-gradient(90deg, #8b5cf6, #c084fc)' }}></div>
        </div>

        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {products.map((product, index) => (
            <div key={index} className="service-card glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
              <div className="service-card-glow"></div>
              
              {/* Image Container with clean contrast framing */}
              <div style={{ 
                width: '100%', 
                height: '210px', 
                marginBottom: '20px', 
                overflow: 'hidden', 
                borderRadius: '10px', 
                background: 'rgba(255, 255, 255, 0.04)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '14px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="product-card-image" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.4s ease' }}
                  loading="lazy"
                />
              </div>

              <h3 className="service-card-title" style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>{product.name}</h3>
              <p className="service-card-description" style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-muted)', flex: 1, marginBottom: '16px' }}>{product.desc}</p>
              
              <div style={{ marginTop: 'auto' }}>
                <span className="pillar" style={{ display: 'inline-block', fontSize: '0.8rem', color: '#c084fc', background: 'rgba(192, 132, 252, 0.08)', border: '1px solid rgba(192, 132, 252, 0.2)', padding: '4px 10px', borderRadius: '4px' }}>{product.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}