
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
// import Home from './components/Home';
// import Footer from './components/Footer';
// import Services, { serviceData } from './components/Services';
// import WebDesign from './components/WebDesign';
// import './App.css';
// import EnquiryForm from './components/EnquiryForm';
// // Component to handle scrolling to hash
// const ScrollToHash = () => {
//   const { hash } = useLocation();

//   useEffect(() => {
//     if (hash) {
//       const element = document.querySelector(hash);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, [hash]);

//   return null;
// };

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleHomeClick = (event, navigate) => {
//     event.preventDefault();
//     const targetHash = event.currentTarget.getAttribute('href').split('#')[1];
//     navigate('/');
//     if (targetHash) {
//       setTimeout(() => {
//         const element = document.getElementById(targetHash);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 0);
//     }
//   };

//   return (
//     <Router>
//       <ScrollToHash />
//       <div id="root">
//         <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
     
//           <div className="menu-icon" onClick={handleMenuToggle}>
//             <div className="bar"></div>
//             <div className="bar"></div>
//             <div className="bar"></div>
//           </div>
//           <ul className={`${isMenuOpen ? 'open' : ''}`}>
//             <li>
//               <Link to="/" onClick={(event) => handleHomeClick(event, navigate)}>
//                 Home
//               </Link>
//             </li>
//             <li><Link to="/#about" onClick={(event) => handleHomeClick(event, navigate)}>About</Link></li>
//             <li className="dropdown">
//               <Link to="/#services" className="dropbtn" onClick={(event) => handleHomeClick(event, navigate)}>Services</Link>
//               <div className="dropdown-content">
//                 {serviceData.map(service => (
//                   <Link to={`/${service.id}`} key={service.id} onClick={(event) => handleHomeClick(event, navigate)}>
//                     {service.title}
//                   </Link>
//                 ))}
//               </div>
//             </li>
//             <li><Link to="/#pricing" onClick={(event) => handleHomeClick(event, navigate)}>Projects</Link></li>
//             <li><Link to="/#testimonials" onClick={(event) => handleHomeClick(event, navigate)}>Testimonials</Link></li>
//             <li><Link to="/#contact" onClick={(event) => handleHomeClick(event, navigate)}>Contact</Link></li>
//           </ul>
//           <div className="logo-container">
//             <Link to="/">
//               <img 
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHI6tfMlQdoWO3jxKD-Qey_fLF9wV3lznAA&s" 
//                 alt="Logo" 
//                 className="logo" 
//               />
//             </Link>
//           </div>
//           {/* <div className="logo-container">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHI6tfMlQdoWO3jxKD-Qey_fLF9wV3lznAA&s" alt="Logo" className="logo" />
//           </div> */}
//         </nav>
//         <hr className="line" />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/web-design" element={<WebDesign />} />
//             <Route path="/web-development" element={<WebDesign />} />
//             <Route path="/e-commerce" element={<WebDesign />} />
//             <Route path="/digital-marketing" element={<WebDesign />} />
//             <Route path="/enquiry-form" element={<EnquiryForm />} />
//             {/* Define routes for other services */}
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
// import Home from './components/Home';
// import Footer from './components/Footer';
// import Services, { serviceData } from './components/Services';
// import WebDesign from './components/WebDesign';
// import './App.css';
// import EnquiryForm from './components/EnquiryForm';

// // Component to handle scrolling to hash
// const ScrollToHash = () => {
//   const { hash } = useLocation();

//   useEffect(() => {
//     if (hash) {
//       const element = document.querySelector(hash);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, [hash]);

//   return null;
// };

// const AppContent = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleNavigationClick = (event, path, hash) => {
//     event.preventDefault();
//     navigate(path);
//     if (hash) {
//       setTimeout(() => {
//         const element = document.getElementById(hash);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 0);
//     }
//   };

//   return (
//     <div id="root">
//       <ScrollToHash />
//       <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
//         <div className="menu-icon" onClick={handleMenuToggle}>
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//         <ul className={`${isMenuOpen ? 'open' : ''}`}>
//           <li>
//             <Link to="/#" onClick={(event) => handleNavigationClick(event, '/', null)}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/#about" onClick={(event) => handleNavigationClick(event, '/', 'about')}>About</Link>
//           </li>
//           <li className="dropdown">
//             <Link to="/#services" className="dropbtn" onClick={(event) => handleNavigationClick(event, '/', 'services')}>Services</Link>
//             <div className="dropdown-content">
//               {serviceData.map(service => (
//                 <Link to={`/${service.id}`} key={service.id} onClick={(event) => handleNavigationClick(event, `/${service.id}`, null)}>
//                   {service.title}
//                 </Link>
//               ))}
//             </div>
//           </li>
//           <li>
//             <Link to="/#pricing" onClick={(event) => handleNavigationClick(event, '/', 'pricing')}>Projects</Link>
//           </li>
//           <li>
//             <Link to="/#testimonials" onClick={(event) => handleNavigationClick(event, '/', 'testimonials')}>Testimonials</Link>
//           </li>
//           <li>
//             <Link to="/#contact" onClick={(event) => handleNavigationClick(event, '/', 'contact')}>Contact</Link>
//           </li>
//         </ul>
//         <div className="logo-container">
//           <Link to="/" onClick={(event) => handleNavigationClick(event, '/', null)}>
//             <img 
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHI6tfMlQdoWO3jxKD-Qey_fLF9wV3lznAA&s" 
//               alt="Logo" 
//               className="logo" 
//             />
//           </Link>
//         </div>
//       </nav>
//       <hr className="line" />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/web-design" element={<WebDesign />} />
//           <Route path="/web-development" element={<WebDesign />} />
//           <Route path="/e-commerce" element={<WebDesign />} />
//           <Route path="/digital-marketing" element={<WebDesign />} />
//           <Route path="/enquiry-form" element={<EnquiryForm />} />
//           {/* Define routes for other services */}
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// const AppWrapper = () => (
//   <Router>
//     <AppContent />
//   </Router>
// );

// export default AppWrapper;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Services, { serviceData } from './components/Services';
import WebDesign from './components/WebDesign';
import WebDev from './components/WebDev';
import Epic from './components/Epic';
import ManPower from './components/ManPower';
import './App.css';
import EnquiryForm from './components/EnquiryForm';

// Component to handle scrolling to hash
const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1)); // remove the '#' from hash
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

const AppContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigationClick = (event, path, hash) => {
    event.preventDefault();
    navigate(path);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  };

  return (
    <div id="root">
      <ScrollToHash />
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-icon" onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/#" onClick={(event) => handleNavigationClick(event, '/', null)}>Home</Link>
          </li>
          <li>
            <Link to="/#about" onClick={(event) => handleNavigationClick(event, '/', 'about')}>About</Link>
          </li>
          <li className="dropdown">
            <Link to="/#services" className="dropbtn" onClick={(event) => handleNavigationClick(event, '/', 'services')}>Services</Link>
            <div className="dropdown-content">
              {serviceData.map(service => (
                <Link to={`/${service.id}`} key={service.id} onClick={(event) => handleNavigationClick(event, `/${service.id}`, null)}>
                  {service.title}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link to="/#pricing" onClick={(event) => handleNavigationClick(event, '/', 'pricing')}>Projects</Link>
          </li>
          <li>
            <Link to="/#testimonials" onClick={(event) => handleNavigationClick(event, '/', 'testimonials')}>Testimonials</Link>
          </li>
          <li>
            <Link to="/#contact" onClick={(event) => handleNavigationClick(event, '/', 'contact')}>Contact</Link>
          </li>
        </ul>
        <div className="logo-container">
          <Link to="/" onClick={(event) => handleNavigationClick(event, '/', null)}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHI6tfMlQdoWO3jxKD-Qey_fLF9wV3lznAA&s" 
              alt="Logo" 
              className="logo" 
            />
          </Link>
        </div>
      </nav>
      <hr className="line" />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/web-development" element={<WebDev/>} />
          <Route path="/e-commerce" element={<Epic />} />
          <Route path="/digital-marketing" element={<ManPower />} />
          <Route path="/enquiry-form" element={<EnquiryForm />} />
          {/* Define routes for other services */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <AppContent />
  </Router>
);

export default AppWrapper;
