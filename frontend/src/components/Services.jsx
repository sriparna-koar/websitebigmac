
// import React, { useState } from 'react';
// import { FaCode, FaDesktop, FaWordpress, FaPaintBrush, FaShoppingCart, FaMobileAlt, FaChartBar, FaArrowRight } from 'react-icons/fa';
// import Modal from './Modal';
// import Dots from './Dots';
// import './Services.css';

// export const serviceData = [
//   { id: 'web-design', title: 'Web Design', shortDesc: 'Professional web design services.We specialize in creating strong web solutions that are crafted to meet your demands and create visually attractive websites.', details: 'We offer professional web design services to create visually appealing and user-friendly websites.We specialize in creating strong web solutions that are crafted to meet your specific demands and create visually attractive websites.', icon: FaDesktop },
//   { id: 'web-development', title: 'Web Development', shortDesc: 'Full-stack web development services.Finding the right website developer will help you to get the right custom design websites and a seamless experience.', details: 'Our web development services include full-stack development to build robust and scalable websites.Finding the right website developer will help you to get the right custom design websites and a seamless experience.', icon: FaCode },
//   { id: 'wordpress', title: 'WordPress Website', shortDesc: 'Custom WordPress website development.Enable us to enhance your online presence with WordPress solutions.', details: 'We specialize in custom WordPress website development to provide you with a unique and powerful website.Enable us to enhance your online presence with WordPress solutions that are both visually appealing and highly effective.', icon: FaWordpress },
//   { id: 'ui-ux-design', title: 'UI/UX Design', shortDesc: 'User interface and experience design.We are experts in user interface/user experience (UI/UX) design and are transforming user experiences.', details: 'Our UI/UX design services focus on creating intuitive and engaging user interfaces and experiences.We are experts in user interface/user experience (UI/UX) design and are transforming user experiences.', icon: FaPaintBrush },
//   { id: 'e-commerce', title: 'E-commerce Website.', shortDesc: 'E-commerce website development.Discover limitless online possibilities with our exceptional e-commerce website development services.', details: 'We develop e-commerce websites that are secure, scalable, and designed to convert visitors into customers.Discover limitless online possibilities with our exceptional e-commerce website development services.', icon: FaShoppingCart },
//   { id: 'mobile-app', title: 'Mobile App Development', shortDesc: 'Native and cross-platform mobile apps.At WP Ninja Infotech, we are skilled at creating smooth and intuitive mobile applications.', details: 'Our mobile app development services include creating native and cross-platform apps for various mobile devices.At WP Ninja Infotech, we are skilled at creating smooth and intuitive mobile applications that provide the greatest user experience.', icon: FaMobileAlt },
//   { id: 'digital-marketing', title: 'Digital Marketing', shortDesc: 'Comprehensive digital marketing services.Amplify your online presence with our dynamic digital marketing services.', details: 'We provide comprehensive digital marketing services to help you reach your target audience and grow your business online.Amplify your online presence with our dynamic digital marketing services.', icon: FaChartBar },
// ];

// const Services = () => {
//   const [selectedService, setSelectedService] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const handleCardClick = (service) => {
//     setSelectedService(service);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedService(null);
//   };

//   return (
//     <section id="services" style={{ marginTop: '-70px' }}>
//       <Dots /> {/* Keep Dots component here */}
//       <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>
//   <span style={{ color: 'white' }}>Our</span> <span style={{ color:'#00aaff' }}>Services</span>
// </h1>


//       <div className="service-container">
//         {serviceData.map(service => (
//           <div key={service.id} onClick={() => handleCardClick(service)} className="service-card">
//             <div className="service-icon">
//               <service.icon />
//             </div>
//             <h2>{service.title}</h2>
//             <p>{service.shortDesc}</p>
//             <div className="service-icon-overlay">
//               <FaArrowRight />
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedService && (
//         <Modal 
//           show={showModal}
//           onClose={handleCloseModal}
//           title={selectedService.title}
//           details={selectedService.details}
//         />
//       )}
//     </section>
//   );
// };

// export default Services;

// import React, { useState } from 'react';
// import { FaCode, FaDesktop, FaWordpress, FaPaintBrush, FaShoppingCart, FaMobileAlt, FaChartBar, FaArrowRight } from 'react-icons/fa';
// import Dots from './Dots';
// import './Services.css';

// export const serviceData = [
//   { id: 'web-design', title: 'Web Design', shortDesc: 'Professional web design services.We specialize in creating strong web solutions that are crafted to meet your demands and create visually attractive websites.', details: 'We offer professional web design services to create visually appealing and user-friendly websites.We specialize in creating strong web solutions that are crafted to meet your specific demands and create visually attractive websites.', icon: FaDesktop },
//   { id: 'web-development', title: 'Web Development', shortDesc: 'Full-stack web development services.Finding the right website developer will help you to get the right custom design websites and a seamless experience.', details: 'Our web development services include full-stack development to build robust and scalable websites.Finding the right website developer will help you to get the right custom design websites and a seamless experience.', icon: FaCode },
//   { id: 'wordpress', title: 'WordPress Website', shortDesc: 'Custom WordPress website development.Enable us to enhance your online presence with WordPress solutions.', details: 'We specialize in custom WordPress website development to provide you with a unique and powerful website.Enable us to enhance your online presence with WordPress solutions that are both visually appealing and highly effective.', icon: FaWordpress },
//   { id: 'ui-ux-design', title: 'UI/UX Design', shortDesc: 'User interface and experience design.We are experts in user interface/user experience (UI/UX) design and are transforming user experiences.', details: 'Our UI/UX design services focus on creating intuitive and engaging user interfaces and experiences.We are experts in user interface/user experience (UI/UX) design and are transforming user experiences.', icon: FaPaintBrush },
//   { id: 'e-commerce', title: 'E-commerce Website.', shortDesc: 'E-commerce website development.Discover limitless online possibilities with our exceptional e-commerce website development services.', details: 'We develop e-commerce websites that are secure, scalable, and designed to convert visitors into customers.Discover limitless online possibilities with our exceptional e-commerce website development services.', icon: FaShoppingCart },
//   { id: 'mobile-app', title: 'Mobile App Development', shortDesc: 'Native and cross-platform mobile apps.At WP Ninja Infotech, we are skilled at creating smooth and intuitive mobile applications.', details: 'Our mobile app development services include creating native and cross-platform apps for various mobile devices.At WP Ninja Infotech, we are skilled at creating smooth and intuitive mobile applications that provide the greatest user experience.', icon: FaMobileAlt },
//   { id: 'digital-marketing', title: 'Digital Marketing', shortDesc: 'Comprehensive digital marketing services.Amplify your online presence with our dynamic digital marketing services.', details: 'We provide comprehensive digital marketing services to help you reach your target audience and grow your business online.Amplify your online presence with our dynamic digital marketing services.', icon: FaChartBar },
// ];

// const Services = () => {
//   const [selectedService, setSelectedService] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const handleCardClick = (service) => {
//     setSelectedService(service);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedService(null);
//   };

//   return (
//     <section id="services" style={{ marginTop: '-70px' }}>
//       <Dots /> {/* Keep Dots component here */}
//       <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>
//   <span style={{ color: 'white' }}>Our</span> <span style={{ color:'#00aaff' }}>Services</span>
// </h1>


//       <div className="service-container">
//         {serviceData.map(service => (
//           <div key={service.id} onClick={() => handleCardClick(service)} className="service-card">
//             <div className="service-icon">
//               <service.icon />
//             </div>
//             <h2>{service.title}</h2>
//             <p>{service.shortDesc}</p>
//             <div className="service-icon-overlay">
//               <FaArrowRight />
//             </div>
//           </div>
//         ))}
//       </div>

//     </section>
//   );
// };

// export default Services;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaDesktop, FaWordpress, FaPaintBrush, FaShoppingCart,FaCog, FaMobileAlt, FaChartBar, FaArrowRight } from 'react-icons/fa';
import Dots from './Dots';
import './Services.css';

export const serviceData = [
  { id: 'web-design', title: 'Web Design', shortDesc: 'Professional web design services.We specialize in creating strong web solutions that are crafted to meet your demands and create visually attractive websites.', details: 'We offer professional web design services to create visually appealing and user-friendly websites.We specialize in creating strong web solutions that are crafted to meet your specific demands and create visually attractive websites.', icon: FaDesktop },
  { id: 'web-development', title: 'Web Development', shortDesc: 'Full-stack web development services.Finding the right website developer will help you to get the right custom design websites and a seamless experience.', details: 'Our web development services include full-stack development to build robust and scalable websites.Finding the right website developer will help you to get the right custom design websites and a seamless experience.', icon: FaCode },
  // { id: 'wordpress', title: 'WordPress Website', shortDesc: 'Custom WordPress website development.Enable us to enhance your online presence with WordPress solutions.', details: 'We specialize in custom WordPress website development to provide you with a unique and powerful website.Enable us to enhance your online presence with WordPress solutions that are both visually appealing and highly effective.', icon: FaWordpress },
  // { id: 'ui-ux-design', title: 'UI/UX Design', shortDesc: 'User interface and experience design.We are experts in user interface/user experience (UI/UX) design and are transforming user experiences.', details: 'Our UI/UX design services focus on creating intuitive and engaging user interfaces and experiences.We are experts in user interface/user experience (UI/UX) design and are transforming user experiences.', icon: FaPaintBrush },
  { id: 'e-commerce', title: 'EPC Installation and Management', shortDesc: 'E-commerce website development.Discover limitless online possibilities with our exceptional e-commerce website development services.', details: 'We develop e-commerce websites that are secure, scalable, and designed to convert visitors into customers.Discover limitless online possibilities with our exceptional e-commerce website development services.', icon: FaCog },
  // { id: 'mobile-app', title: 'Mobile App Development', shortDesc: 'Native and cross-platform mobile apps.At WP Ninja Infotech, we are skilled at creating smooth and intuitive mobile applications.', details: 'Our mobile app development services include creating native and cross-platform apps for various mobile devices.At WP Ninja Infotech, we are skilled at creating smooth and intuitive mobile applications that provide the greatest user experience.', icon: FaMobileAlt },
  { id: 'digital-marketing', title: 'Manpower Services', shortDesc: 'Comprehensive digital marketing services.Amplify your online presence with our dynamic digital marketing services.', details: 'We provide comprehensive digital marketing services to help you reach your target audience and grow your business online.Amplify your online presence with our dynamic digital marketing services.', icon: FaChartBar },
];

const Services = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <section id="services" style={{ marginTop: '-70px' }}>
      <Dots />
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>
        <span style={{ color: 'white' }}>Our</span> <span style={{ color: '#00aaff' }}>Services</span>
      </h1>

      <div className="service-container">
        {serviceData.map(service => (
          <div key={service.id} onClick={() => handleCardClick(service.id)} className="service-card">
            <div className="service-icon">
              <service.icon />
            </div>
            <h2>{service.title}</h2>
            <p>{service.shortDesc}</p>
            <div className="service-icon-overlay">
              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
