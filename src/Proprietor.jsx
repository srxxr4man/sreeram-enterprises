export default function Proprietor() {
  return (
    <section id="proprietor" className="proprietor-section" aria-label="Executive Leadership">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-left" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-tagline" style={{ color: '#c084fc', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Executive Leadership</span>
          <h2 className="section-title gradient-text" style={{ fontSize: '2.5rem', marginTop: '8px' }}>Proprietor</h2>
          <div className="title-accent-line" style={{ background: 'linear-gradient(90deg, #8b5cf6, #c084fc)', margin: '12px auto 0 auto' }}></div>
        </div>

        {/* Re-Architected Premium Profile Wrapper */}
        <div className="proprietor-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
          
          <div className="profile-card glass-card" style={{ border: '1px solid rgba(192, 132, 252, 0.2)' }}>
            <div className="image-container" style={{ position: 'relative', width: '100%', aspectRatio: '4/5', overflow: 'hidden', borderRadius: '14px' }}>
              <img 
                src="/images/amruthanadhan.jpg" 
                alt="R Amruthanadhan - Founder &amp; Proprietor of Sreeram Enterprises" 
                className="proprietor-photo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Ultra-Smooth SVG dynamic fallback icon if local photo asset path fails */}
              <div className="photo-fallback-icon" style={{display: 'none', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="image-overlay-glow"></div>
            </div>
          </div>

          {/* Profile Details Content Grid */}
          <div className="proprietor-content glass-card" style={{ padding: '40px', border: '1px solid rgba(192, 132, 252, 0.2)' }}>
            <h3 className="proprietor-name gradient-text" style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '4px' }}>R AMRUTHANADHAN</h3>
            <span className="proprietor-subtitle" style={{ color: '#c084fc', fontWeight: 600, display: 'block', marginBottom: '24px' }}>Founder &amp; Proprietor</span>
            
            <div className="proprietor-meta-grid" style={{ display: 'flex', gap: '16px', marginBottom: '28px', flexWrap: 'wrap' }}>
              <div className="meta-badge-item" style={{ background: 'rgba(192, 132, 252, 0.05)', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(192, 132, 252, 0.15)', flex: 1 }}>
                <span className="meta-label" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Company</span>
                <span className="meta-value" style={{ fontWeight: 600, color: 'var(--text-main)' }}>Sreeram Enterprises</span>
              </div>
              <div className="meta-badge-item" style={{ background: 'rgba(192, 132, 252, 0.05)', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(192, 132, 252, 0.15)', flex: 1 }}>
                <span className="meta-label" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Location</span>
                <span className="meta-value" style={{ fontWeight: 600, color: 'var(--text-main)' }}>Tripunithura, Kerala</span>
              </div>
            </div>

            <div className="profile-divider" style={{ height: '1px', background: 'var(--glass-border)', margin: '24px 0' }}></div>
            
            <div className="proprietor-bio">
              <h4 className="bio-title" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#c084fc', marginBottom: '12px' }}>About</h4>
              <p className="body-narrative" style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                The Proprietor is a passionate entrepreneur dedicated to building a business founded on trust, quality, and customer satisfaction.
                With a strong commitment to professionalism and continuous improvement, he strives to deliver reliable solutions that create
                lasting value for clients and stakeholders. His vision is to establish Sreeram Enterprises as a respected and dependable organization known for integrity, excellence, and long-term growth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}