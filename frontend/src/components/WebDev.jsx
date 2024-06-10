import React from 'react';
import './WebDev.css'; 

import image1 from '../assets/image1.jpeg';
import Dots from './Dots';
import image2 from '../assets/image2.jpeg';
import Contact from './Contact';
import image3 from '../assets/image2.png';
import { Link } from 'react-router-dom'; // Corrected import for Link

function WebDev() {
  return (
    <div className="WebDev-App">
      <Dots />
      <header className="WebDev-App-header">
        <div className="WebDev-header-image">
          <img src={image2} alt="Header" />
        </div>
        <div className="WebDev-header-content">
          <div className="WebDev-header-image-small">
            <img src={image2} alt="Design" />
          </div>
          <div className="WebDev-header-text">
            <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2.5em' }}>
              <span style={{ color: 'white' }}>Amazing and</span> <span style={{ color:'#00aaff' }}>Responsive Website Designs</span>
            </h1>
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
      <section className="WebDev-process">
        <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2.5em' }}>
          <span style={{ color: 'white' }}>Our Website </span> <span style={{ color:'#00aaff' }}>Design Process</span>
        </h1>
        <div className="WebDev-process-steps">
          <div className="WebDev-process-step">
            <h3>Consultation</h3>
            <p>We start by understanding your needs and goals.</p>
          </div>
          <div className="WebDev-process-step">
            <h3>Wireframe</h3>
            <p>Next, we create wireframes to map out the structure.</p>
          </div>
          <div className="WebDev-process-step">
            <h3>Design with WPNI</h3>
            <p>Our designers create stunning visuals that represent your brand.</p>
          </div>
          <div className="WebDev-process-step">
            <h3>Final Design</h3>
            <p>We deliver the final design, ensuring it meets your expectations.</p>
          </div>
        </div>
      </section>
      <hr className="line" />
      <section className="WebDev-portfolio">
        <h2>Our Work</h2>
        <div className="WebDev-portfolio-gallery">
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
      <div className="consultation-container">
        <div className="consultation-content">
          <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2.5em' }}>
            <span style={{ color: 'white' }}>Schedule </span> <span style={{ color:'#00aaff' }}>a Consultation</span>
          </h1>
          <p>Ready to start your project? Schedule a consultation with us today! Your vision is our starting point. We initiate the web design process with an in-depth consultation to understand your business objectives, brand identity, and target audience. This ensures our designs are in perfect alignment with your goals and aspirations.</p>
          <Link to="/enquiry-form" className="consultation-button">Enquiry Form</Link>
        </div>
        <div className="consultation-image">
          <img src={image1} alt="Consulting Image" />
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default WebDev;
