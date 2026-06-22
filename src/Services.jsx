export default function Services() {
  const specializedServices = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      title: "Engineers",
      description: "Custom hydraulic process design, structural layout calculations, and fluid dynamics analysis tailored for large-scale purification networks."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 1 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="9" y1="16" x2="15" y2="16" />
        </svg>
      ),
      title: "Contractors",
      description: "End-to-end turnkey project management, regulatory environmental compliance alignment, material procurement, and field coordination."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      title: "Fabricators",
      description: "Precision heavy equipment tailoring, including custom storage tanks, skid mounts, manifolds, and rugged stainless-steel framing systems."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 0-7.94-7.94L3.66 11.5a2.5 2.5 0 0 0 0 3.54l3.3 3.3a2.5 2.5 0 0 0 3.54 0l7.94-7.94a6 6 0 0 0-7.94-7.94L6.74 6.3" />
        </svg>
      ),
      title: "Erectors",
      description: "Rigorous on-site heavy-machinery positioning, foundational leveling, structural plant mounting, and complex pipeline network assembly."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v8L4.36 20.64A1 1 0 0 0 5.23 22h13.54a1 1 0 0 0 .87-1.36L14 10V2" />
          <line x1="6" y1="18" x2="18" y2="18" />
          <line x1="9" y1="2" x2="15" y2="2" />
        </svg>
      ),
      title: "Water Treatment Chemicals",
      description: "Bulk distribution of high-grade formulations, custom coagulants, disinfectants, and specialized pH conditioners for industrial plants."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z" />
        </svg>
      ),
      title: "Water Purifiers",
      description: "Integration of commercial-grade multi-stage purification units, Reverse Osmosis (RO) systems, softeners, and ultrafiltration loops."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        
        <div className="section-header-centered">
          <span className="section-tagline">Core Infrastructure Operations</span>
          <h2 className="section-title">Our Capabilities</h2>
          <div className="title-accent-bar"></div>
          <p className="services-subtitle">
            Sreeram Enterprises delivers seamless execution across major engineering, manufacturing, and supply sectors.
          </p>
        </div>

        <div className="services-grid">
          {specializedServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-glow"></div>
              <div className="service-icon-frame">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}