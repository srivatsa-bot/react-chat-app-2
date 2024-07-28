import React, { useState } from 'react';
import Footer1 from './Footer1';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (name && email && message) {
      alert("Submitted!");
      // You can perform additional actions like sending the form data to a server here
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-form">
        <h2>Need any help?</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message: </label>
            <textarea id="message" cols="30" rows="4" value={formData.name} onChange={handleChange} />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer1 isVisible={true} />
    </div>
  );
}