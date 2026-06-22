export default function About() {
  const engineeringPillars = [
    { title: "Industrial Engineering" },
    { title: "Custom Steel Fabrication" },
    { title: "Heavy-Plant Erection" },
    { title: "Water Treatment Specialists" },
    { title: "Chimney Installation" },
    { title: "Filtering Systems" },
  ];

  return (
    <section id="about" className="about-section" aria-label="About Sreeram Enterprises">
      <div className="container">
        
        {/* Main Section Header */}
        <div className="section-header-left">
          <span className="section-tagline">Corporate Profile</span>
          <h2 className="section-title">About Us</h2>
          <div className="title-accent-line"></div>
        </div>

        <div className="about-wrapper">
          
          {/* Premium Glassmorphic Visual Card */}
          <div className="about-visual">
            <div className="visual-glass-overlay"></div>
            <div className="visual-ambient-blur"></div>
            <div className="visual-fallback-box">
              <div className="visual-brand-tag">ESTD INDUSTRIAL</div>
              <span className="visual-logo-highlight">Sreeram Enterprises</span>
              <p className="visual-logo-sub">Engineers • Contractors • Fabricators • Erectors</p>
              <p className="visual-logo-sub">• Water Treatment Chemicals • Water Treatment Systems & Purifiers</p>  
              <div className="visual-geometric-accent"></div>
            </div>
          </div>

          {/* Narrative Content Column */}
          <div className="about-content">
            <p className="lead-text">
              <strong>Sreeram Enterprises</strong> is an established, multidisciplinary industrial asset manager operating 
              simultaneously as <strong>Engineers, Contractors, Fabricators, Erectors &amp; Water Treatment Specialists</strong>.
            </p>

            <p className="body-narrative">
              We provide total lifecycle support for commercial fluid networks. Our operation covers everything from the 
              precise fabrication of infrastructure components and custom engineering assemblies to physical on-site plant erection. 
              By serving as direct contractors, we handle all moving parts of a project under a single point of accountability.
            </p>

            <p className="body-narrative">
              Additionally, our supply network provides a steady flow of high-volume water treatment chemicals and heavy-duty 
              industrial purification hardware. This ensures your facilities remain fully compliant, highly efficient, and operational 
              year-round.
            </p>
            
            {/* Extended Capabilities Matrix */}
            <div className="about-pillars" role="list">
              {engineeringPillars.map((pillar, index) => (
                <div key={index} className="pillar" role="listitem">
                  <div className="pillar-indicator-wrapper">
                    <span className="pillar-dot"></span>
                    <span className="pillar-pulse-ring"></span>
                  </div>
                  <div className="pillar-text-group">
                    <span className="pillar-main-title">{pillar.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}