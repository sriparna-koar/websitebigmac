
import React from 'react';
import './Projects.css';

const Pricing = () => {
  return (
    <section id="pricing" style={{ marginTop: '-10px' }}>
      <h1>Projects</h1>
      
      <div className="arrow-container">
        <div className="arrow">
          <div className="icon-container">
            <div className="icon">1</div>
            <p className="caption">Caption 1</p>
            <p className="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
          </div>
          <div className="icon-container">
            <div className="icon">2</div>
            <p className="caption">Caption 2</p>
            <p className="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
          </div>
          <div className="icon-container">
            <div className="icon">3</div>
            <p className="caption">Caption 3</p>
            <p className="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
          </div>
          <div className="icon-container">
            <div className="icon">4</div>
            <p className="caption">Caption 4</p>
            <p className="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
          </div>
          <div className="icon-container">
            <div className="icon">5</div>
            <p className="caption">Caption 5</p>
            <p className="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
          </div>
        </div>
        {/* <div className="bottom-arrows">
          <div className="bottom-arrow">Heading 1</div>
          <div className="bottom-arrow">Heading 2</div>
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;
