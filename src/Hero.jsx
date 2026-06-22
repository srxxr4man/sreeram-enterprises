export default function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* Visual background layers */}
      <div className="hero-ambient-glow"></div>
      <div className="hero-grid-pattern"></div>

      <div className="container">
        {/* Main interactive showcase frame */}
        <div className="hero-container-centered">
          
          <div className="hero-brand-heading">
            <img 
              src="/images/sreeram-logo.png" 
              className="hero-logo-mark" 
              alt="Sreeram Enterprises" 
            />
            <h1 className="hero-main-title">SREERAM</h1>
            <h2 className="hero-main-title">ENTERPRISES</h2>
          </div>

          {/* New aesthetic geometric separator */}
          <div className="title-divider">
            <div className="title-divider-line"></div>
            <div className="title-divider-diamond"></div>
            <div className="title-divider-line"></div>
          </div>

          <p className="hero-description-centered">
            Trusted Business Solutions for Growth, Quality &amp; Reliability. 
            Sustaining industrial scale with precision engineering frameworks.
          </p>

          <div className="hero-action-row-centered">
            <a href="#contact" className="btn-primary-cyan">
              Contact Us →
            </a>
            <a href="#services" className="btn-secondary-glass">
              Our Services
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}