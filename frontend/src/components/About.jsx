import React from 'react';
import './About.css';
import circleIcon from '../assets/circle.jpeg'; // Import your small picture here
import Dots from './Dots';
const About = () => {
  return (
    <section id="about" style={{ marginTop: '-20px' }}>
      <Dots/>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' , fontSize: '2.5em'}}>
  <span style={{ color: 'white' }}>About</span> <span style={{ color:'#00aaff' }}>Us</span>
</h1>
      <div className="content-wrapper">
        <div className="content-box">
          <div className="circle-icon">
            <img src={circleIcon} alt="Circle Icon" />
          </div>
          <h2>Our Mission</h2>
          <p>We are committed to providing top-notch educational resources to help you excel in your learning journey.</p>
        </div>
        <div className="content-box">
          <div className="circle-icon">
            <img src={circleIcon} alt="Circle Icon" />
          </div>
          <h2>Our Vision</h2>
          <p>Our vision is to empower individuals with the knowledge and skills they need to succeed in their academic and professional lives.</p>
        </div>
        <div className="content-box">
          <div className="circle-icon">
            <img src={circleIcon} alt="Circle Icon" />
          </div>
          <h2>Our Values</h2>
          <p>We value integrity, excellence, and innovation in everything we do. We strive to create a supportive and inclusive learning environment for all.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
