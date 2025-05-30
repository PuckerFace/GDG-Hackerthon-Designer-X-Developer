import React from 'react';
import logo from '../assets/logo.svg';

const Footer = () => {
  //   return (
  //     <div>
  //       <div>
  //         <footer>
  //           <div className="bg-blue-50 py-6">
  //             <div className=" flex items-center">
  //               <img src={logo} alt="" className="w-sm" />
  //             </div>

  //             <div className="px-12 grid lg:grid-cols-3 sm:grid-cols-1 mb-8">
  //               <div>
  //                 <h5 className="mb-4">Resources</h5>
  //                 <ul className="flex flex-col">
  //                   <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
  //                     <a href="#" className="">
  //                       Getting Started
  //                     </a>
  //                   </li>
  //                   <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
  //                     <a href="#">Documentation</a>
  //                   </li>
  //                   <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
  //                     <a href="#">Tutorials</a>
  //                   </li>
  //                   <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
  //                     <a href="#">API Reference</a>
  //                   </li>
  //                   <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
  //                     <a href="#">Community Forums</a>
  //                   </li>
  //                 </ul>
  //               </div>
  //               <div>
  //                 <h5 className="mb-4">Platform</h5>
  //                 <ul className="flex flex-col">
  //                   <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
  //                     <a href="#">Features</a>
  //                   </li>
  //                   <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
  //                     <a href="#">Supported Devices</a>
  //                   </li>
  //                   <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
  //                     <a href="#">System Requirements</a>
  //                   </li>
  //                   <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
  //                     <a href="#">Downloads</a>
  //                   </li>
  //                   <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
  //                     <a href="#">Release Notes</a>
  //                   </li>
  //                 </ul>
  //               </div>
  //               <div>
  //                 <h5 className="mb-4">Community</h5>
  //                 <ul className="flex flex-col">
  //                   <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
  //                     <a href="#">Events</a>
  //                   </li>
  //                   <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
  //                     <a href="#">Meetups</a>
  //                   </li>
  //                   <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
  //                     <a href="#">Conferences</a>
  //                   </li>
  //                   <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
  //                     <a href="#">Hackathons</a>
  //                   </li>
  //                   <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
  //                     <a href="#">Jobs</a>
  //                   </li>
  //                 </ul>
  //               </div>
  //             </div>

  //             <div className="container mx-auto text-center">
  //               <p className="text-sm">© 2023 GDG. All rights reserved.</p>
  //               <p className="text-sm">Made with ❤️ by the GDG Team</p>
  //             </div>
  //           </div>
  //         </footer>
  //       </div>
  //     </div>
  //   );
  const companyLinks = [
    { text: 'About GDG', href: '/about' },
    { text: 'Our Team', href: '/team' },
    { text: 'Chapters', href: '/' },
    { text: 'Upcoming Events', href: '/events' },
  ];

  const socialLinks = [
    { text: 'LinkedIn', href: 'https://www.linkedin.com/company/tekktopia/' },
    {
      text: 'Thread',
      href: 'https://www.threads.net/@tekktopia?igshid=NTc4MTIwNjQ2YQ==',
    },
    {
      text: 'Instagram',
      href: 'https://www.instagram.com/tekktopia?igsh=MXJramZicW80eDV0eQ==',
    },
    {
      text: 'Twitter',
      href: 'https://x.com/tekktopia30385?s=21&t=fcOLORW_YEXpNc1TDIRvEA',
    },
  ];

  const contactInfo = [
    { text: '+234 815 433 2992', href: 'tel:' },
    { text: '+234 909 330 9638', href: 'tel:' },
    { text: '+234  810 596 3769', href: 'tel:' },
    { text: 'info@google.com', href: 'mailto:' },
  ];

  return (
    <footer className="w-full bg-blue-50 py-[60px] mt-10 text-neutral-700 box-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-[120px]">
          {/* Left Section: Logo and Address */}
          <div className="flex flex-col text-center lg:max-w-[264px] lg:text-left">
            <div className="flex items-center justify-center lg:justify-start  font-semibold text-[30px] mb-4">
              <div className="">
                <img src={logo} alt="Logo" />
              </div>
            </div>
          </div>

          {/* Right Section: Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center lg:text-left lg:grid-cols-4 lg:gap-12">
            <div>
              <div className="text-[18px] mb-4 text-center lg:text-left">
                Quick Links
              </div>
              <div>
                {companyLinks.map((link, index) => (
                  <div key={index} className="mb-[16px]">
                    <a
                      href={link.href}
                      className="text-[16px] font-extralight hover:text-[#f5901f] lg:text-[14px]"
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[18px] mb-4 text-center lg:text-left">
                Stay Connected
              </div>
              <div>
                {socialLinks.map((link, index) => (
                  <div key={index} className="mb-[16px]">
                    <a
                      href={link.href}
                      target="_blank"
                      className="text-[16px] font-extralight hover:text-[#f5901f] lg:text-[14px]"
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[18px] mb-4 text-center lg:text-left">
                Reach Us
              </div>
              <div>
                {contactInfo.map((link, index) => (
                  <div key={index} className="mb-[16px]">
                    <a
                      href={link.href + link.text}
                      className="text-[16px] font-extralight hover:text-[#f5901f] lg:text-[14px]"
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Legal Links */}
        <div className="mt-12 text-center lg:text-left flex justify-between items-center flex-col lg:flex-row">
          <div className="text-[16px] font-extralight tracking-wider lg:text-[14px]">
            © 2025 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
