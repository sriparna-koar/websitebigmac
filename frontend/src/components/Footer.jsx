// import React from "react";
// // import Link from "next/link";
// import Image from "next/image";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io";
// const d = new Date();
// let year = d.getFullYear();
// const Footer = () => {
//   return (
//     <div className=" bg-[#0c3261]">
//       <div className=" relative max-[1024px]:pb-28 w-[86%] m-auto flex justify-between  items-start max-lg:flex-wrap  gap-2 max-lg:gap-10 pt-28 pb-20 border-b-[1px] border-[#D3D6DB]">
//         <div className="flex flex-col gap-4">
//           {/* <Link href="/">
//             <Image
//               src="/assets/logo.png"
//               alt="logo"
//               height={200}
//               width={200}
//               data-aos="fade-right"
//               className="flex justify-start h-16 w-60"
//             />
//           </Link> */}
//           <p
//             data-aos="fade-right"
//             className="md:w-60 text-sm font-medium text-[white]"
//           >
//             Elevating careers through seamless job matching, connecting talented
//             individuals with rewarding opportunities for professional growth and
//             success.
//           </p>
//         </div>
//         <div className="flex justify-end">
//           <div className=" ">
//             <p
//               data-aos="fade-down"
//               className="out font-medium text-[white] mb-8"
//             >
//               BIGMAC CONSULTANCY
//             </p>
//             <div className="flex flex-col gap-4">
//               {/* <Link
//                 data-aos="fade-up"
//                 href="/home/aboutus"
//                 className="out text-sm font-medium text-[white] hover:text-[white] duration-150"
//               >
//                 About us
//               </Link>
//               <Link
//                 data-aos="fade-up"
//                 href="/home/contactus"
//                 className="out text-sm font-medium text-[white] hover:text-[white] duration-150"
//               >
//                 Contact us
//               </Link>
//               <Link
//                 data-aos="fade-up"
//                 href="/home/terms-and-conditions"
//                 className="out text-sm font-medium text-[white] hover:text-[white] duration-150"
//               >
//                 Terms and condition
//               </Link>
//               <Link
//                 data-aos="fade-up"
//                 href="/home/privacypolicy"
//                 className="out text-sm font-medium text-[white] hover:text-[white] duration-150"
//               >
//                 Privacy policy
//               </Link> */}
//               <div
//                 data-aos="fade-up"
//                 className="out text-sm font-medium text-[white] hover:text-[white] duration-150"
//               ></div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <div className=" ">
//             <p
//               data-aos="fade-down"
//               className="out font-medium text-[white] mb-8"
//             >
//               COMPANY
//             </p>
//             <div className="flex flex-col gap-4">
//               {/* <Link
//                 data-aos="fade-up"
//                 href="/hiretalent#postJobs"
//                 className="out text-sm font-medium text-[white] hover:text-[white] duration-150"
//               >
//                 Post jobs
//               </Link>
//               <Link
//                 data-aos="fade-up"
//                 href="/hiretalent#scheduling"
//                 className="out text-sm font-medium text-[white] hover:text-[white] duration-150"
//               >
//                 Scheduling
//               </Link>
//               <Link
//                 data-aos="fade-up"
//                 href="/hiretalent#messaging"
//                 className="out text-sm font-medium text-[white] hover:text-[white] duration-150"
//               >
//                 Messaging
//               </Link>
//               <Link
//                 data-aos="fade-up"
//                 href="/hiretalent#talents"
//                 className="out text-sm font-medium text-[white] hover:text-[white] duration-150"
//               >
//                 Talents
//               </Link>
//               <Link
//                 data-aos="fade-up"
//                 href="/"
//                 className="out text-sm font-medium text-[white] hover:text-[white] duration-150"
//               >
//                 Candidate
//               </Link> */}
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-end ">
//           <div className=" ">
//             <p
//               data-aos="fade-down"
//               className="out font-medium text-[white] mb-8 max-[855px]:mb-6"
//             >
//               CANDIDATE
//             </p>
//             <div className="flex flex-col gap-4 ">
//               {/* <Link
//                 data-aos="fade-up"
//                 href="/#jobsearch"
//                 className="out text-sm font-medium text-[white] hover:text-[white] duration-150"
//               >
//                 Find jobs
//               </Link>
//               <Link
//                 data-aos="fade-up"
//                 href="/#aiCv"
//                 className="out text-sm font-medium text-[white] hover:text-[white] duration-150"
//               >
//                 AI CV
//               </Link>
//               <Link
//                 data-aos="fade-up"
//                 href="/#training"
//                 className="out text-sm font-medium text-[white] hover:text-[white] duration-150"
//               >
//                 Training
//               </Link>
//               <Link
//                 data-aos="fade-up"
//                 href="/#assessment"
//                 className="out text-sm font-medium text-[white] hover:text-[white] duration-150"
//               >
//                 Assessment
//               </Link>
//               <Link
//                 data-aos="fade-up"
//                 href="/hiretalent"
//                 className="out text-sm font-medium text-[white] hover:text-[white] duration-150"
//               >
//                 Hire talents
//               </Link> */}
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center max-lg:gap-3 max-[1024px]:absolute bottom-0   ">
//           <div className="  ">
//             <p
//               data-aos="fade-down"
//               className="out font-medium text-[white] mb-7 max-lg:mb-3 "
//             >
//               SOCIALS
//             </p>
//             <div className="flex max-[1024px]:flex-row gap-1 ">
//               {/* <Link
//                 data-aos="fade-up"
//                 href="#"
//                 className="out text-sm font-normal text-[white] hover:text-[#7F56D9] duration-150 w-10 h-10 flex items-center justify-center rounded-full hover:border"
//               >
//                 <FaLinkedin className="text-2xl" />
//               </Link>
//               <Link
//                 data-aos="fade-up"
//                 href="#"
//                 className="out text-sm font-normal text-[white] hover:text-[#7F56D9] duration-150 w-10 h-10 flex items-center justify-center rounded-full hover:border"
//               >
//                 <FaXTwitter className="text-2xl" />
//               </Link>
//               <Link
//                 data-aos="fade-up"
//                 href="#"
//                 className="out text-sm font-normal text-[white] hover:text-[#7F56D9] duration-150 w-10 h-10 flex items-center justify-center rounded-full hover:border"
//               >
//                 <FaInstagram className="text-2xl" />
//               </Link>
//               <Link
//                 data-aos="fade-up"
//                 href="#"
//                 className="out text-sm font-normal text-[white] hover:text-[#7F56D9] duration-150 w-10 h-10 flex items-center justify-center rounded-full hover:border"
//               >
//                 <FaFacebook className="text-2xl" />
//               </Link>
//               <Link
//                 data-aos="fade-up"
//                 href="#"
//                 className="out text-sm font-normal text-[white] hover:text-[#7F56D9] duration-150 w-10 h-10 flex items-center justify-center rounded-full hover:border"
//               >
//                 <IoLogoYoutube className="text-2xl" />
//               </Link> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="text-sm w-full text-center text-[#98A2B3] mb-5 py-5">
//         © {year} Linqsat. All rights reserved.
//       </div>
//     </div>
//   );
// };

// export default Footer;

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


// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-wave">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//                     <path fill="#1E3A5F" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,197.3C640,203,800,181,960,149.3C1120,117,1280,75,1360,53.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
//                 </svg>
//             </div>
//             <div className="footer-container">
//                 <div className="footer-section">
//                     <h2>Lingqsat.com</h2>
//                     <p>Elevating careers through seamless job matching, connecting talented individuals with rewarding opportunities for professional growth and success.</p>
//                 </div>
//                 <div className="footer-section">
//                     <h3>BIGMAC CONSULTANCY</h3>
//                     <ul>
//                         <li>About us</li>
//                         <li>Contact us</li>
//                         <li>Terms and condition</li>
//                         <li>Privacy policy</li>
//                     </ul>
//                 </div>
//                 <div className="footer-section">
//                     <h3>COMPANY</h3>
//                     <ul>
//                         <li>Post jobs</li>
//                         <li>Scheduling</li>
//                         <li>Messaging</li>
//                         <li>Talents</li>
//                         <li>Candidates</li>
//                     </ul>
//                 </div>
//                 <div className="footer-section">
//                     <h3>CANDIDATE</h3>
//                     <ul>
//                         <li>Find jobs</li>
//                         <li>AI CV</li>
//                         <li>Training</li>
//                         <li>Assessment</li>
//                         <li>Hire talents</li>
//                     </ul>
//                 </div>
//                 <div className="footer-section">
//                     <h3>SOCIALS</h3>
//                     <div className="social-icons">
//                         <i className="fab fa-linkedin"></i>
//                         <i className="fab fa-twitter"></i>
//                         <i className="fab fa-instagram"></i>
//                         <i className="fab fa-facebook"></i>
//                         <i className="fab fa-youtube"></i>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;