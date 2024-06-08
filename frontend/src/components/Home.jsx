
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Work from './Work';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import StatsSection from './StatsSection';
import './Home.css';
import image1 from '../assets/image1.jpeg';
import Dots from './Dots';
// import image2 from '../assets/image2.jpeg';

import image3 from '../assets/image2.png';
const images = [image1, image3];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(images[currentImageIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setBackgroundImage(images[currentImageIndex]);
  }, [currentImageIndex]);

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      const href = event.currentTarget.getAttribute("href");
      if (href.startsWith("#")) {
        event.preventDefault();
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth"
        });
      }
    };

    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="home-container">
      <Dots />
      <section id="home">
        <div id="image-container" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      </section>
      <hr className="line" />
      <section id="about">
        <About />
      </section>
      <hr className="line" />
      <section id="services">
        <Services />
      </section>
      <hr className="line" />
      <section id="work">
        <Work />
      </section>
      <hr className="line" />
      <section id="stats-section">
        <StatsSection />
      </section>
   <hr className="line" />
      <section id="pricing">
        <Pricing />
      </section>
      <hr className="line" />
      <section id="testimonials">
        <Testimonials />
      </section>
      <hr className="line" />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
