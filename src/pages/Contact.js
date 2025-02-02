import React, { useState } from "react";
import "../styles/contact_styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://deemedia-backend.onrender.com/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      {/* Contact Info Section */}
      <section id="contact-info">
        <h2>Contact Us</h2>
        <p>
          We are based in the **Bellarine Surf Coast region** for those who want to work
          with us in person. However, we also offer **remote services** and will eventually
          provide **remote in-person services** as well.
        </p>
        <p><strong>Email:</strong> dan@deemedia.au</p>
        <p><strong>Phone:</strong> 0421 990 920</p>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
