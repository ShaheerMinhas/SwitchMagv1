import React from 'react';
import './index.css'; // You can create and import a CSS file for styling

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior (page refresh)

    // Add code here to handle the form submission (e.g., send data to Netlify or perform other actions)
    // For demonstration purposes, you can log the form data to the console
    const formData = new FormData(event.target);
    for (let [name, value] of formData.entries()) {
      console.log(`${name}: ${value}`);
    }
  };

  return (
    <div className="contact-us-section">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form name="contact" netlify onSubmit={handleSubmit}>
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
