export default function Terms() {
  return (
    <section id="terms" className="terms-section">
      <div className="container terms-container-centered">
        
        <div className="section-header-centered" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-tagline" style={{ color: 'var(--accent-cyan)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>Regulatory Compliance</span>
          <h2 className="section-title gradient-text" style={{ fontSize: '2.5rem' }}>Terms &amp; Conditions</h2>
          <div className="title-accent-bar" style={{ margin: '16px auto 0 auto' }}></div>
        </div>

        <div className="terms-document-card glass-card" style={{ padding: '48px' }}>
          <p className="terms-intro-text" style={{ fontSize: '1.05rem', lineHeight: '1.65', color: 'var(--text-main)', marginBottom: '40px' }}>
            Welcome to <b>Sreeram Enterprises</b>. By accessing or utilizing our corporate web portal 
            and associated commercial services, you explicitly agree to comply with and be bound by 
            the following operational terms and conditions.
          </p>

          <div className="terms-grid-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px' }}>
            
            <div className="terms-clause-node">
              <div className="clause-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span className="clause-index">01</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>Use of Website</h3>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                The digital content hosted across this portal is provided strictly for general commercial 
                information and vendor verification purposes. Asset details and structural metrics are subject to updates.
              </p>
            </div>

            <div className="terms-clause-node">
              <div className="clause-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span className="clause-index">02</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>Services Execution</h3>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                All structural engineering, heavy fabrication, plant erection, and chemical supply allocations 
                are subject to explicit agreements detailed in signed project contracts.
              </p>
            </div>

            <div className="terms-clause-node">
              <div className="clause-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span className="clause-index">03</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>User Responsibilities</h3>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                Interacting parties agree not to misuse this portal or engage in digital activities that disrupt 
                the computational integrity or legal frameworks of the enterprise.
              </p>
            </div>

            <div className="terms-clause-node">
              <div className="clause-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span className="clause-index">04</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>Limitation of Liability</h3>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                Sreeram Enterprises, its management, and operating engineers shall not be held liable 
                for any direct or indirect operational disruptions arising out of web transmission errors.
              </p>
            </div>

            <div className="terms-clause-node">
              <div className="clause-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span className="clause-index">05</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>Changes to Terms</h3>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                The enterprise retains full executive rights to modify these regulatory conditions at any time. 
                Continued interactions indicate implicit acceptance.
              </p>
            </div>

            <div className="terms-clause-node">
              <div className="clause-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span className="clause-index">06</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>Corporate Desk Contact</h3>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                For direct formal clarifications regarding these terms, please submit your inquiries 
                directly to our engineering administration team using the dedicated contact module.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}