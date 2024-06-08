

import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://websitebigmac.onrender.com/contact', {
        name,
        phone,
        email,
        subject,
        message,
      });
      console.log('Message sent', response.data);
    } catch (error) {
      console.error('Error sending message', error);
    }
  };

  return (
    <section id="contact" style={{ marginTop: '10px' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;

// http://localhost:5000