export default function Product() {
  const products = [
    { 
      name: "Industrial RO Unit", 
      desc: "High-capacity water purification systems made of Stainless Steel.", 
      category: "Purification",
      img: "/images/Steel RO.jpeg" // Ensure this file exists in public/images/
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
    <section id="products" className="services-section">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-tagline">Our Inventory</span>
          <h2 className="section-title">Product Solutions</h2>
          <div className="title-accent-bar"></div>
        </div>

        <div className="services-grid">
          {products.map((product, index) => (
            <div key={index} className="service-card">
              <div className="service-card-glow"></div>
              
              {/* Image Rendering */}
              <img 
                src={product.img} 
                alt={product.name} 
                className="product-card-image" 
                loading="lazy"
              />

              <h3 className="service-card-title">{product.name}</h3>
              <p className="service-card-description">{product.desc}</p>
              
              <div style={{ marginTop: '16px' }}>
                <span className="pillar">{product.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}