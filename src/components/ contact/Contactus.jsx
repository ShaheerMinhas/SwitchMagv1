import React from 'react';
import './index.css'; // You can create and import a CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-us-section">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form name="contact" netlify>
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" placeholder="Your email..." className="feedback-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea id="feedback" name="feedback" placeholder="Your feedback..." className="feedback-input" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-details">
        <h2>Other Details</h2>
        {/* Other contact details */}
        <p>Address: 123 Example Street</p>
        <p>Email: example@email.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
    </div>
  );
};

export default ContactUs;
