// Dots.js
import React, { useEffect } from 'react';
import './Dots.css';

const Dots = () => {
  useEffect(() => {
    const numDots = 300;
    const dotsContainer = document.getElementById('dots-container');

    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.style.left = `${Math.random() * 100}vw`;
      dot.style.top = `${Math.random() * 100}vh`;
      dot.style.animationDuration = `${Math.random() * 15 + 15}s`;
      dotsContainer.appendChild(dot);
    }
1
    return () => {
      if (dotsContainer) {
        while (dotsContainer.firstChild) {
          dotsContainer.removeChild(dotsContainer.firstChild);
        }
      }
    };
  }, []);

  return <div id="dots-container"></div>;
};

export default Dots;
