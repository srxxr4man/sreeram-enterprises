export default function Footer() {
  return (
    <footer className="footer" style={{ borderTop: '1px solid var(--glass-border)', padding: '50px 24px', background: 'rgba(2, 6, 23, 0.9)', backdropFilter: 'blur(16px)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="footer-gst" style={{ color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.05em' }}>
          GSTIN: <span style={{ fontFamily: 'monospace' }}>32ASGPR5532C1Z1</span>
        </p>
        <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '28px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
          <a href="#terms">Terms</a>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Sreeram Enterprises. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}