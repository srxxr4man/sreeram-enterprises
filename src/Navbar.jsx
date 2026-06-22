import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-frame ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="logo-main-text">SREERAM</span>
          <span className="logo-sub-text">ENTERPRISES</span>
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-navigation-links">
          <a href="#home" className="nav-item-link">Home</a>
          <a href="#about" className="nav-item-link">About</a>
          <a href="#services" className="nav-item-link">Services</a>
          <a href="#products" className="nav-item-link">Products</a>
          <a href="#proprietor" className="nav-item-link">Proprietor</a>
          <a href="#contact" className="nav-cta-button">Contact Us</a>
        </div>

        {/* Hamburger Trigger */}
        <button 
          className={`navbar-hamburger-trigger ${isMobileMenuOpen ? "trigger-active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        {/* Mobile Menu Drawer */}
        <div className={`mobile-menu-drawer ${isMobileMenuOpen ? "mobile-menu-active" : ""}`}>
          <a href="#home" className="nav-item-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="nav-item-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#services" className="nav-item-link" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#products" className="nav-item-link" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
          <a href="#proprietor" className="nav-item-link" onClick={() => setIsMobileMenuOpen(false)}>Proprietor</a>
          <a href="#contact" className="nav-cta-button" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
        </div>
      </div>
    </nav>
  );
}