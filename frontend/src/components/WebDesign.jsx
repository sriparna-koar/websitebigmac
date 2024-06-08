import React from 'react';
import './WebDesign.css'; 
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
import image1 from '../assets/image1.jpeg';
import Dots from './Dots';
import image2 from '../assets/image2.jpeg';
import Contact from './Contact';
import image3 from '../assets/image2.png';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
function WebDesign() {
  return (
    <div className="WebDesign-App">
            <Dots />
      <header className="WebDesign-App-header">
        <div className="WebDesign-header-image">
          <img src={image3} alt="Header" />
        </div>
        <div className="WebDesign-header-content">
          <div className="WebDesign-header-image-small">
            <img src={image2} alt="Design" />
          </div>
          <div className="WebDesign-header-text">
          <h1 style={{ textAlign: 'center', fontWeight: 'bold' , fontSize: '2.5em'}}>
  <span style={{ color: 'white' }}>Amazing and</span> <span style={{ color:'#00aaff' }}>Responsive Website Designs</span>
</h1>
            {/* <h1>Amazing and Responsive Website Designs</h1> */}
            <p>
              Your website should not just draw attention. The role of a website is to attract and engage the user, 
              as well as communicate your brand and raise awareness about a product or service. In the digital age, 
              the first impression is vital, and a stellar web design is the key to success. Users enjoy visiting sites 
              that are aesthetically appealing and easy to navigate.
            </p>
            <p>
              We at WP Ninja Infotech understand this. We design websites that serve as a powerhouse for your business. 
              We ensure your website becomes the hub of your online identity, giving your business a robust online presence 
              and significantly improving your connection with your customers. We deliver performance-oriented and results-driven 
              websites by integrating the latest technological advancements and innovative design ideas.
            </p>
          </div>
        </div>
     
      </header>
      <hr className="line" />
      <section className="WebDesign-process">
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' , fontSize: '2.5em'}}>
  <span style={{ color: 'white' }}>Our Website </span> <span style={{ color:'#00aaff' }}>Design Process</span>
</h1>
        {/* <h2>Our Website Design Process</h2> */}
      
        <div className="WebDesign-process-steps">
          <div className="WebDesign-process-step">
            <h3>Consultation</h3>
            <p>We start by understanding your needs and goals.</p>
          </div>
          <div className="WebDesign-process-step">
            <h3>Wireframe</h3>
            <p>Next, we create wireframes to map out the structure.</p>
          </div>
          <div className="WebDesign-process-step">
            <h3>Design with WPNI</h3>
            <p>Our designers create stunning visuals that represent your brand.</p>
          </div>
          <div className="WebDesign-process-step">
            <h3>Final Design</h3>
            <p>We deliver the final design, ensuring it meets your expectations.</p>
          </div>
        </div>
      </section>
      <hr className="line" />
      <section className="WebDesign-portfolio">
  <h2>Our Work</h2>
  <div className="WebDesign-portfolio-gallery">
    <div className="portfolio-item">
      <img src={image3} alt="Project 1" />
      <div className="portfolio-content">
        <h3>Project 1</h3>
        <p>Short description of Project 1.</p>
      </div>
    </div>
    <div className="portfolio-item">
      <img src={image2} alt="Project 2" />
      <div className="portfolio-content">
        <h3>Project 2</h3>
        <p>Short description of Project 2.</p>
      </div>
    </div>
    <div className="portfolio-item">
      <img src={image3} alt="Project 3" />
      <div className="portfolio-content">
        <h3>Project 3</h3>
        <p>Short description of Project 3.</p>
      </div>
    </div>
    <div className="portfolio-item">
      <img src={image2} alt="Project 5" />
      <div className="portfolio-content">
        <h3>Project 5</h3>
        <p>Short description of Project 5.</p>
      </div>
    </div>
  </div>
</section>


      {/* <section className="WebDesign-portfolio">
        <h2>Our Work</h2>
        <div className="WebDesign-portfolio-gallery">
          <div className="portfolio-item">
            <img src={image1} alt="Project 1" />
            <h3>Project 1</h3>
            <p>Short description of Project 1.</p>
          </div>
          <div className="portfolio-item">
            <img src={image2} alt="Project 2" />
            <h3>Project 2</h3>
            <p>Short description of Project 2.</p>
          </div>
          <div className="portfolio-item">
            <img src={image3} alt="Project 3" />
            <h3>Project 3</h3>
            <p>Short description of Project 3.</p>
          </div>
          <div className="portfolio-item">
            <img src={image1} alt="Project 4" />
            <h3>Project 4</h3>
            <p>Short description of Project 4.</p>
          </div>
          <div className="portfolio-item">
            <img src={image2} alt="Project 5" />
            <h3>Project 5</h3>
            <p>Short description of Project 5.</p>
          </div>
          <div className="portfolio-item">
            <img src={image3} alt="Project 6" />
            <h3>Project 6</h3>
            <p>Short description of Project 6.</p>
          </div>
        </div>
      </section> */}
 <div className="consultation-container">
        <div className="consultation-content">

            <h1 style={{ textAlign: 'center', fontWeight: 'bold' , fontSize: '2.5em'}}>
  <span style={{ color: 'white' }}>Schedule </span> <span style={{ color:'#00aaff' }}>a Consultation</span>
</h1>
            <p>Ready to start your project? Schedule a consultation with us today! Your vision is our starting point. We initiate the web design process with an in-depth consultation to understand your business objectives, brand identity, and target audience. This ensures our designs are in perfect alignment with your goals and aspirations.</p>
            <Link to="/enquiry-form" className="consultation-button">Enquiry Form</Link>
        </div>
        <div className="consultation-image">
            <img src={image1} alt="Consulting Image"/>
        </div>
    </div>
      {/* <section className="WebDesign-consultation">
        <h2>Schedule a Consultation</h2>
        <p>Ready to start your project? Schedule a consultation with us today!</p>
        <a href="contact.html" className="consultation-button">Contact Us</a>
      </section> */}
      <Contact />
      {/* <section className="WebDesign-contact">
        <h2>Contact Us</h2>
        <form className="WebDesign-contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section> */}

      {/* <footer className="WebDesign-App-footer">
        <p>&copy; 2024 Web Design & Development. All rights reserved.</p>
      </footer> */}
    </div>
    
  );
}

export default WebDesign;
