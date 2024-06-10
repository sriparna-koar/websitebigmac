import React from 'react';
import { Link } from 'react-router-dom';
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
                            <stop offset="0%" style={{ stopColor: "#1d3557", stopOpacity: 0.2 }} />
                            <stop offset="100%" style={{ stopColor: "#03071e", stopOpacity: 0.2 }} />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="footer-container">
                <div className="footer-section">
                    <h2>Company.com</h2>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHI6tfMlQdoWO3jxKD-Qey_fLF9wV3lznAA&s"
                        alt="Logo"
                        className="logo"
                    />
                </div>
                <div className="footer-section">
                    <h3>CONSULTANCY</h3>
                    <ul>
                        <li><Link to="/#about">About us</Link></li>
                        <li><Link to="/#services">Services</Link></li>
                        <li><Link to="/#pricing">Projects</Link></li>
                        <li><Link to="/#testimonials">Testimonials</Link></li>
                        <li><Link to="/#contact">Contact us</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Information</h3>
                    <ul>
                        <li>Jobs</li>
                        <li>Scheduling</li>
                        <li>Work</li>
                        <li>Talents</li>
                        <li><Link to="/enquiry-form">Enquiry us</Link></li>
                    </ul>
                </div>
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
            </div>
        </footer>
    );
}

export default Footer;
