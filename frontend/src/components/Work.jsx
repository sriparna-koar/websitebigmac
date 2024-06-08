
// import React from 'react';
// import './Work.css';
// import strategyImage from '../assets/strategy.jpeg'; // Add your image paths
// import designImage from '../assets/design.jpeg'; 
// import developmentImage from '../assets/development.png'; 
// import testingImage from '../assets/testing.png'; 

// const Work = () => {
//   return (
//     <div className="work-container">
//            <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>
//   <span style={{ color: 'white' }}>Our Process</span> <span style={{ color:'#00aaff' }}>of Work</span>
// </h1>
//       <div className="cycle-container">
//         <div className="step" style={{ '--angle': '0deg' }}>
//           <img src={strategyImage} alt="Strategy" />
//           <div>
//             <h2>Strategy</h2>
//             <p>We provide comprehensive website design and development services including layout design, development, optimization and maintenance etc. to achieve success and business goals.</p>
//           </div>
//         </div>

//         <div className="arrow" style={{ '--angle': '45deg' }}>&#x2192;</div>

//         <div className="step" style={{ '--angle': '90deg' }}>
//           <img src={designImage} alt="Design" />
//           <div>
//             <h2>Design</h2>
//             <p>We create aesthetic and user-friendly designs as per your needs. It includes creating visually appealing layouts, selecting appropriate color schemes, typography, and graphics. We focus on reflecting the brand identity and message effectively through lucrative designs.</p>
//           </div>
//         </div>

//         <div className="arrow" style={{ '--angle': '135deg' }}>&#x2192;</div>

//         <div className="step" style={{ '--angle': '180deg' }}>
//           <img src={developmentImage} alt="Development" />
//           <div>
//             <h2>Development</h2>
//             <p>The development process includes front-end and back-end programming, content management system implementation, ending up with rigorous testing to ensure quality.</p>
//           </div>
//         </div>

//         <div className="arrow" style={{ '--angle': '225deg' }}>&#x2192;</div>

//         <div className="step" style={{ '--angle': '270deg' }}>
//           <img src={testingImage} alt="Testing" />
//           <div>
//             <h2>UA Testing</h2>
//             <p>It involves evaluating the site’s functionality, usability, and performance from the end user's perspective. It ensures that the website meets user expectations, identifies issues or bugs (if any), and validates that it fulfills its intended purpose before deployment.</p>
//           </div>
//         </div>

//         <div className="arrow" style={{ '--angle': '315deg' }}>&#x2192;</div>
//       </div>
//     </div>
//   );
// };

// export default Work;
import React from 'react';
import './Work.css';
import strategyImage from '../assets/strategy.jpeg'; // Add your image paths
import designImage from '../assets/design.jpeg'; 
import developmentImage from '../assets/development.png'; 
import testingImage from '../assets/testing.png'; 

const Work = () => {
  return (
    <div className="work-container" style={{ marginTop: '-40px' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold',fontSize: '2.5em' }}>
        <span style={{ color: 'white' }}>Our Process</span> <span style={{ color:'#00aaff' }}>of Work</span>
      </h1>
      <div className="cycle-container">
        <div className="vertical-bar"></div>
        
        <div className="step" style={{ '--angle': '0deg' }}>
          <div className="horizontal-bar"></div>
          <img src={strategyImage} alt="Strategy" />
          <div>
            <h2>Strategy</h2>
            <p>We provide comprehensive website design and development services including layout design, development, optimization and maintenance etc. to achieve success and business goals.</p>
          </div>
        </div>

        <div className="step" style={{ '--angle': '90deg' }}>
          <div className="horizontal-bar"></div>
          <img src={designImage} alt="Design" />
          <div>
            <h2>Design</h2>
            <p>We create aesthetic and user-friendly designs as per your needs. It includes creating visually appealing layouts, selecting appropriate color schemes, typography, and graphics. We focus on reflecting the brand identity and message effectively through lucrative designs.</p>
          </div>
        </div>

        <div className="step" style={{ '--angle': '180deg' }}>
          <div className="horizontal-bar"></div>
          <img src={developmentImage} alt="Development" />
          <div>
            <h2>Development</h2>
            <p>The development process includes front-end and back-end programming, content management system implementation, ending up with rigorous testing to ensure quality.</p>
          </div>
        </div>

        <div className="step" style={{ '--angle': '270deg' }}>
          <div className="horizontal-bar"></div>
          <img src={testingImage} alt="Testing" />
          <div>
            <h2>UA Testing</h2>
            <p>It involves evaluating the site’s functionality, usability, and performance from the end user's perspective. It ensures that the website meets user expectations, identifies issues or bugs (if any), and validates that it fulfills its intended purpose before deployment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
