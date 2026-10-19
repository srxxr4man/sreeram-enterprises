import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-frame ${isScrolled ? "navbar-scrolled" : ""}`} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 2000,
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(5, 9, 20, 0.9)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      padding: isScrolled ? '14px 0' : '22px 0'
    }}>
      <div className="container navbar-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Full Logo Branding */}
        <a href="#home" className="navbar-logo" style={{ textDecoration: 'none' }}>
          <span className="logo-main-text gradient-text" style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '0.05em' }}>SREERAM</span>
          <span className="logo-sub-text" style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent-cyan)', letterSpacing: '0.2em' }}>ENTERPRISES</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="navbar-navigation-links" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#home" className="nav-item-link">Home</a>
          <a href="#about" className="nav-item-link">About</a>
          <a href="#services" className="nav-item-link">Services</a>
          <a href="#products" className="nav-item-link">Products</a>
          <a href="#proprietor" className="nav-item-link">Proprietor</a>
          <a href="#contact" className="nav-cta-button btn-glow" style={{ padding: '10px 22px', background: 'linear-gradient(135deg, #38bdf8, #0ea5e9)', color: '#020617', fontWeight: 700, borderRadius: '6px', textDecoration: 'none' }}>Contact Us</a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button 
          className={`navbar-hamburger-trigger ${isMobileMenuOpen ? "trigger-active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        {/* Mobile Drawer */}
        <div className={`mobile-menu-drawer ${isMobileMenuOpen ? "mobile-menu-active" : ""}`}>
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
          <a href="#proprietor" onClick={() => setIsMobileMenuOpen(false)}>Proprietor</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
        </div>

      </div>
    </nav>
  );
}