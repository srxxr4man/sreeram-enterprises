export default function Proprietor() {
  return (
    <section id="proprietor" className="proprietor-section" aria-label="Executive Leadership">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-left">
          <span className="section-tagline">Executive Leadership</span>
          <h2 className="section-title">Proprietor</h2>
          <div className="title-accent-line"></div>
        </div>

        {/* Re-Architected Premium Profile Wrapper */}
        <div className="proprietor-wrapper">
          
          <div className="profile-card">
            <div className="image-container">
              <img 
                src="/images/amruthanadhan.jpg" 
                alt="R Amruthanadhan - Founder &amp; Proprietor of Sreeram Enterprises" 
                className="proprietor-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Ultra-Smooth SVG dynamic fallback icon if local photo asset path fails */}
              <div className="photo-fallback-icon" style={{display: 'none'}}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="image-overlay-glow"></div>
            </div>
          </div>

          {/* Profile Details Content Grid */}
          <div className="proprietor-content">
            <h3 className="proprietor-name">R AMRUTHANADHAN</h3>
            <span className="proprietor-subtitle">Founder &amp; Proprietor</span>
            
            <div className="proprietor-meta-grid">
              <div className="meta-badge-item">
                <span className="meta-label">Company</span>
                <span className="meta-value">Sreeram Enterprises</span>
              </div>
              <div className="meta-badge-item">
                <span className="meta-label">Location</span>
                <span className="meta-value">Kerala, India</span>
              </div>
            </div>

            <div className="profile-divider"></div>
            
            <div className="proprietor-bio">
              <h4 className="bio-title">About</h4>
              <p className="body-narrative">
                The Proprietoris a passionate entrepreneur dedicated to building a business founded on trust, quality, and customer satisfaction.
                With a strong commitment to professionalism and continuous improvement, he strives to deliver reliable solutions that create
                lasting value for clients and stakeholders. His vision is to establish Sreeram Enterprises as a respected and dependable organization known for integrity, excellence,and long-term growth.

              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}