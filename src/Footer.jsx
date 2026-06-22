export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-gst">GSTIN: 32ASGPR5532C1Z1</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#terms">Terms</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Sreeram Enterprises. All Rights Reserved.</p>
      </div>
    </footer>
  );
}