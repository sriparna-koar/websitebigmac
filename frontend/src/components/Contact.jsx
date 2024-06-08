import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      toast.success('Message sent successfully!');
      console.log('Message sent', response.data);
      
      // Clear the form
      setName('');
      setPhone('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      toast.error('There is an error, please try again later.');
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
      <ToastContainer />
    </section>
  );
};

export default Contact;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './Contact.css';

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://websitebigmac.onrender.com/contact', {
//         name,
//         phone,
//         email,
//         subject,
//         message,
//       });
//       console.log('Message sent', response.data);
//     } catch (error) {
//       console.error('Error sending message', error);
//     }
//   };

//   return (
//     <section id="contact" style={{ marginTop: '10px' }}>
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit} className="contact-form">
//         <div className="form-row">
//           <div className="form-group">
//             <label>Your Name</label>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//           </div>

//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>

//         <div className="form-group">
//           <label>Message</label>
//           <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
//         </div>
//         <button type="submit">Send</button>
//       </form>
//     </section>
//   );
// };

// export default Contact;

// http://localhost:5000