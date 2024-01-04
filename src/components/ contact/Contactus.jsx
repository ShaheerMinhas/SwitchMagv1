import React ,{useRef,useState} from 'react';
import './index.css'; // You can create and import a CSS file for styling

const ContactUs = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "", 
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-us-section">
      <div className="contact-form">
        <h2>Contact Us</h2>

        <form name="contact" method="POST">
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email..." className="feedback-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea id="feedback" name="feedback" value={form.message} onChange={handleChange} placeholder="Your feedback..." className="feedback-input" required></textarea>

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
