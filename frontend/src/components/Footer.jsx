
import React from 'react';
import './Footer.css';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
<div className="footer-wave">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
        <path fill="url(#grad1)" fillOpacity="1" d="M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,58.7C1120,43,1280,21,1360,10.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="300%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#1d3557", stopOpacity:  0.2}} /> 
                <stop offset="100%" style={{ stopColor: "#03071e", stopOpacity: 0.2 }} /> 
            </linearGradient>
        </defs>
    </svg>
</div>


            {/* <div className="footer-wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="url(#grad1)" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,197.3C640,203,800,181,960,149.3C1120,117,1280,75,1360,53.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: "#1E3A5F", stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: "transparent", stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                </svg>
            </div> */}
            <div className="footer-container">
                <div className="footer-section">
                    <h2>Comapny.com</h2>
                    <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHI6tfMlQdoWO3jxKD-Qey_fLF9wV3lznAA&s" 
                alt="Logo" 
                className="logo" 
              />
                </div>
                <div className="footer-section">
                    <h3>CONSULTANCY</h3>
                    <ul>
                        <li>About us</li>
                        <li>Services </li>
                        <li>Projects </li>
                        <li>Testimonials  </li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Information
                    </h3>
                    <ul>
                        <li> jobs</li>
                        <li>Scheduling</li>
                        <li>Work</li>
                        <li>Talents</li>
                        <li>Enquiry Us</li>
                    </ul>
                </div>
                {/* <div className="footer-section">
                    <h3>Social Media Icons</h3>
                    <ul>
                        <li>Find jobs</li>
                        <li>AI CV</li>
                        <li>Training</li>
                        <li>Assessment</li>
                        <li>Hire talents</li>
                    </ul>
                </div> */}
                <div className="footer-section">
    <h3>SOCIALS</h3>
    <div className="social-icons">
        <FaLinkedin />
        <FaTwitter />
        <FaInstagram />
        <FaFacebook />
        <FaYoutube />
    </div>
</div>

                {/* <div className="footer-section">
                    <h3>SOCIALS</h3>
                    <div className="social-icons">
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div> */}
            </div>
        </footer>
    );
}

export default Footer;
