import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get in Touch with Us
            <span className="underline"></span>
        </h2>
        <p className="section-subtitle">
          We'd love to hear from you. Reach out with any questions or to get involved.
        </p>

        <div className="contact-content">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="contact-btn"><span>Send Message</span></button>
          </form>

          <div className="contact-info">
            <h4>Contact Details</h4>
            <p><strong>Address:</strong> 123 Hope Street, Chennai, India</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> care@charitycare.org</p>
            <div className="social-icons social-row">
            <h4>Follow us on:</h4>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebookF />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                    <FaXTwitter />
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
