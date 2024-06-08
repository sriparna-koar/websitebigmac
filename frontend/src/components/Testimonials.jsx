import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section" style={{ marginTop: '-5s0px' }}>
  <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>
        <span style={{ color: 'white' }}>Customer</span> <span style={{ color: '#00aaff' }}>Reviews</span>
      </h1>
      {/* <p className="section-subtitle">What our customers are saying..</p> */}
      <div className="testimonials-container">
        <div className="testimonial">
          <p className="testimonial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla, sem eros consequat tellus, quis volutpat leo enim.
          </p>
          <div className="testimonial-info">
            <img src="https://via.placeholder.com/50" alt="Lance Jarvis" className="testimonial-img"/>
            <div>
              <h3 className="testimonial-name">Lance Jarvis</h3>
              <div className="testimonial-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p className="testimonial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla, sem eros consequat tellus, quis volutpat leo enim.
          </p>
          <div className="testimonial-info">
            <img src="https://via.placeholder.com/50" alt="Ericka Lynda" className="testimonial-img"/>
            <div>
              <h3 className="testimonial-name">Ericka Lynda</h3>
              <div className="testimonial-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p className="testimonial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla, sem eros consequat tellus, quis volutpat leo enim.
          </p>
          <div className="testimonial-info">
            <img src="https://via.placeholder.com/50" alt="Neil Wilford" className="testimonial-img"/>
            <div>
              <h3 className="testimonial-name">Neil Wilford</h3>
              <div className="testimonial-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
