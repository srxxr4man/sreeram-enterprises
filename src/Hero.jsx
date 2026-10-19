export default function Hero() {
  return (
    <section className="hero-section" id="home" style={{ 
      position: 'relative', 
      minHeight: '94vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '140px 0 80px 0',
      overflow: 'hidden',
      background: '#150836' // <-- ADD IT RIGHT HERE
    }}>
      {/* Inline Styles for Keyframe Animations */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-25px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.08); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .hero-badge {
          animation: fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero-title {
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
          opacity: 0;
        }
        .hero-divider {
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
          opacity: 0;
        }
        .hero-desc {
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
          opacity: 0;
        }
        .hero-buttons {
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
          opacity: 0;
        }
        .hero-metrics {
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .hero-glow-bg {
          animation: pulseGlow 6s ease-in-out infinite;
        }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-3px);
        }
      `}</style>

      {/* Animated Background Glow Orbs */}
      <div className="hero-glow-bg" style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '500px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(56,189,248,0.05) 60%, transparent 100%)',
        filter: 'blur(60px)',
        zIndex: 1,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ 
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          
          {/* Top Location & Status Badge */}
          <div className="hero-badge" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            background: 'rgba(139, 92, 246, 0.12)', 
            border: '1px solid rgba(139, 92, 246, 0.35)', 
            padding: '6px 18px', 
            borderRadius: '30px', 
            marginBottom: '28px',
            color: '#d8b4fe',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            boxShadow: '0 0 25px rgba(139, 92, 246, 0.25)'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 10px #38bdf8' }}></span>
            <span>TRIPUNITHURA, KERALA • INDUSTRIAL ENGINEERING &amp; ERECTION</span>
          </div>

          {/* Main Title */}
          <div className="hero-brand-heading hero-title" style={{ marginBottom: '16px' }}>
            <h1 className="hero-main-title gradient-text" style={{ 
              fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)', 
              fontWeight: 900, 
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
              background: 'linear-gradient(135deg, #ffffff 20%, #c084fc 70%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '4px'
            }}>
              SREERAM ENTERPRISES
            </h1>
          </div>

          {/* Decorative Divider */}
          <div className="hero-divider" style={{ margin: '20px auto 24px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', maxWidth: '300px' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(192,132,252,0.5))' }}></div>
            <div style={{ width: '6px', height: '6px', transform: 'rotate(45deg)', background: '#c084fc', boxShadow: '0 0 12px #c084fc' }}></div>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(192,132,252,0.5), transparent)' }}></div>
          </div>

          {/* Subtitle / Description */}
          <p className="hero-desc" style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '700px', lineHeight: '1.7', margin: '0 auto 36px auto' }}>
            Trusted Business Solutions for Growth, Quality &amp; Reliability. 
            Delivering precision engineering frameworks, custom fabrication, heavy plant erection, and advanced water purification systems.
          </p>

          {/* Action Buttons Row */}
          <div className="hero-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            <a href="#contact" className="hover-lift" style={{ 
              background: 'linear-gradient(135deg, #8b5cf6, #c084fc)', 
              color: '#fff', 
              border: 'none', 
              padding: '14px 32px', 
              borderRadius: '30px', 
              fontWeight: 700,
              boxShadow: '0 10px 25px rgba(139, 92, 246, 0.4)',
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              Get in Touch →
            </a>
            <a href="#services" className="hover-lift" style={{ 
              background: 'rgba(255, 255, 255, 0.04)', 
              border: '1px solid rgba(255, 255, 255, 0.15)', 
              padding: '14px 32px', 
              borderRadius: '30px', 
              color: '#fff', 
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              Explore Core Sectors
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hero-metrics hover-lift" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '16px', 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
            paddingTop: '24px',
            background: 'rgba(10, 6, 20, 0.3)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            padding: '20px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', letterSpacing: '0.05em', marginBottom: '4px' }}>OPERATION MANDATE</span>
              <strong style={{ fontSize: '0.95rem', color: '#c084fc' }}>Turnkey Execution</strong>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', letterSpacing: '0.05em', marginBottom: '4px' }}>TAX REGISTRATION</span>
              <strong style={{ fontSize: '0.95rem', color: '#38bdf8', fontFamily: 'monospace' }}>GSTIN Verified</strong>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', letterSpacing: '0.05em', marginBottom: '4px' }}>SPECIALIZATIONS</span>
              <strong style={{ fontSize: '0.95rem', color: '#f8fafc' }}>6 Core Sectors</strong>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}