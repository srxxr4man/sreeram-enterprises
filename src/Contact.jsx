import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceType: "Engineers",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState(""); // Handles: "Sending...", "Success", "Error", or "ValidationError"

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Custom Validation: Ensure at least a Name OR a Company Name is provided
    if (!formData.name.trim() && !formData.company.trim()) {
      setFormStatus("ValidationError");
      return;
    }

    setFormStatus("Sending...");

    // Live configuration payload for Web3Forms API
    const payload = {
      access_key: "875f9873-02b6-4434-a8db-e1bbe218ea75", 
      cc: "asreeram8a@gmail.com", 
      subject: `New Business Inquiry from ${formData.name || formData.company} [${formData.serviceType}]`,
      from_name: "Sreeram Enterprises Web Portal",
      
      Name: formData.name || "Not Provided (Company-only submission)",
      Email: formData.email,
      Company: formData.company || "Not Provided (Individual submission)",
      Capability_Requirement: formData.serviceType,
      Message: formData.message
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus("Success");
        setFormData({ name: "", email: "", company: "", serviceType: "Engineers", message: "" });
        e.target.reset();
      } else {
        setFormStatus("Error");
      }
    } catch (error) {
      console.error("Form transmission failed:", error);
      setFormStatus("Error");
    }
  };

  return (
    <section id="contact" className="contact-section" aria-label="Contact and Corporate Details">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-left">
          <span className="section-tagline">Corporate Desk Connection</span>
          <h2 className="section-title">Contact Our Team</h2>
          <div className="title-accent-line"></div>
        </div>
        
        <div className="contact-wrapper">
          {/* Left Side: Complete Corporate Credentials Panel */}
          <div className="contact-info">
            <h3 className="info-brand-title">Sreeram Enterprises</h3>
            <p className="contact-subtitle">Engineers • Contractors • Fabricators • Erectors</p>
            
            <div className="contact-meta-details">
              <div className="meta-contact-item">
                <b className="meta-contact-label">📍 Registered Office</b>
                <p className="meta-contact-value">10/397, Chelakkavazhy</p>
                <p className="meta-contact-value">Eroor South P.O, Tripunithura</p>
                <p className="meta-contact-value">Ernakulam, Kerala - 682 306</p>
              </div>

              <div className="meta-contact-item">
                <b className="meta-contact-label">📞 Telecommunications</b>
                <p className="meta-contact-value">Primary: <a href="tel:+918547102556" className="contact-link">+91 85471 02556</a></p>
                <p className="meta-contact-value">Secondary: <a href="tel:+919387381780" className="contact-link">+91 93873 81780</a></p>
              </div>

              <div className="meta-contact-item">
                <b className="meta-contact-label">✉️ Electronic Mail</b>
                <p className="meta-contact-value"><a href="mailto:sreeramenterprises12@gmail.com" className="contact-link">sreeramenterprises12@gmail.com</a></p>
                <p className="meta-contact-value"><a href="mailto:asreeram8a@gmail.com" className="contact-link">asreeram8a@gmail.com</a></p>
              </div>

              <div className="meta-contact-item">
                <b className="meta-contact-label">💼 Tax Registration</b>
                <p className="meta-contact-value">GSTIN: <span className="gst-code-badge">32ASGPR5532C1Z1</span></p>
              </div>
            </div>
            
            <small className="commercial-note">
              * Official commercial project estimates, chemical supply volumes, and vendor verification invoices are handled in strict accordance with state and central GST frameworks.
            </small>
          </div>

          {/* Right Side: Interactive Live Form Sheet */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <p className="form-requirement-hint">
                * Please provide either your Full Name or Company Name so we can process your requirement.
              </p>

              <input 
                type="text" 
                name="name"
                value={formData.name}
                placeholder="Full Name" 
                onChange={handleChange}
                className="form-input-field"
              />
              
              <input 
                type="text" 
                name="company"
                value={formData.company}
                placeholder="Company Name" 
                onChange={handleChange}
                className="form-input-field"
              />
              
              <input 
                type="email" 
                name="email"
                value={formData.email}
                placeholder="Business Email Address" 
                required 
                onChange={handleChange}
                className="form-input-field"
              />

              <select 
                name="serviceType"
                value={formData.serviceType}
                className="form-select-dropdown"
                onChange={handleChange}
              >
                <option value="Engineers">Industrial Engineering / Process Design</option>
                <option value="Contractors">Turnkey Project Contracting</option>
                <option value="Fabricators">Custom Structural Steel Fabrication</option>
                <option value="Erectors">Mechanical Plant Erection</option>
                <option value="Chemicals">Water Treatment Chemicals Supply</option>
                <option value="Purifiers">Industrial Water Purification Systems</option>
              </select>

              <textarea 
                name="message"
                value={formData.message}
                placeholder="Describe your project, chemical volume requirements, or equipment specifications..." 
                rows="5"
                required
                onChange={handleChange}
                className="form-textarea-field"
              ></textarea>

              <button 
                type="submit" 
                className="form-submit-action-btn"
                disabled={formStatus === "Sending..."}
              >
                {formStatus === "Sending..." ? "Transmitting Details..." : "Submit Requirement"}
              </button>
            </form>

            {/* Dynamic Status Notifications */}
            <div className="status-message-wrapper">
              {formStatus === "ValidationError" && (
                <div className="form-status status-error" role="alert">
                  ⚠️ Identification Required: Please complete either the "Full Name" or "Company Name" field.
                </div>
              )}
              {formStatus === "Success" && (
                <div className="form-status status-success" role="alert">
                  ✓ Message successfully transmitted to our engineering desk. We will review your requirements shortly.
                </div>
              )}
              {formStatus === "Error" && (
                <div className="form-status status-error" role="alert">
                  ✕ Transmission failed. Please verify your connection or email us directly.
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}