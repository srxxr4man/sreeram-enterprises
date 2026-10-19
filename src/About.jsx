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
        <div className="section-header-left" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-tagline" style={{ color: 'var(--accent-purple)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Corporate Profile</span>
          <h2 className="section-title gradient-text" style={{ fontSize: '2.5rem', marginTop: '8px' }}>About Us</h2>
          <div className="title-accent-line" style={{ background: 'linear-gradient(90deg, #8b5cf6, #c084fc)', margin: '12px auto 0 auto' }}></div>
        </div>

        <div className="about-wrapper">
          
          {/* Premium Glassmorphic Visual Card */}
          <div className="about-visual glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="visual-glass-overlay"></div>
            <div className="visual-ambient-blur"></div>
            <div className="visual-fallback-box" style={{ position: 'relative', inset: 'unset', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="visual-brand-tag" style={{ marginBottom: '8px', color: '#c084fc', background: 'rgba(192, 132, 252, 0.1)', border: '1px solid rgba(192, 132, 252, 0.2)' }}>ESTD INDUSTRIAL</div>
              <span className="visual-logo-highlight gradient-text" style={{ fontSize: '1.6rem' }}>Sreeram Enterprises</span>
              <p className="visual-logo-sub" style={{ fontSize: '0.85rem' }}>Engineers • Contractors • Fabricators • Erectors</p>
              <p className="visual-logo-sub" style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '20px' }}>Water Treatment Chemicals • Systems & Purifiers</p>  
              
              {/* Balanced Space-Filling Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '12px', 
                width: '100%', 
                borderTop: '1px solid rgba(255,255,255,0.08)', 
                paddingTop: '16px',
                textAlign: 'left'
              }}>
                <div style={{ background: 'rgba(192, 132, 252, 0.04)', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(192, 132, 252, 0.15)' }}>
                  <span style={{ display: 'block', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>TAX REGISTRATION</span>
                  <strong style={{ fontSize: '11px', color: '#c084fc', fontFamily: 'monospace' }}>GSTIN VERIFIED</strong>
                </div>
                <div style={{ background: 'rgba(192, 132, 252, 0.04)', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(192, 132, 252, 0.15)' }}>
                  <span style={{ display: 'block', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>CORE MANDATE</span>
                  <strong style={{ fontSize: '11px', color: 'var(--text-main)' }}>Turnkey Assets</strong>
                </div>
              </div>

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
                <div key={index} className="pillar glass-card" role="listitem" style={{ padding: '16px' }}>
                  <div className="pillar-indicator-wrapper">
                    <span className="pillar-dot" style={{ backgroundColor: '#c084fc', boxShadow: '0 0 8px #c084fc' }}></span>
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