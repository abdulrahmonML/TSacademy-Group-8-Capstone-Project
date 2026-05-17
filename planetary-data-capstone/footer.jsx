import React from 'react';

const Footer = () => {
  // Finalized list of 16 group members with correct spellings
  const members = [
    "Abdulrahmon", "Sonia", "Etim", "Bale", "Samuel", "Joshua", 
    "John", "olayemi", "Faith", "Eromo", "Peter", "Timi", 
    "Elijah", "Kehinde", "Miracle", "Michael"
  ];

  return (
    <footer className="w-full bg-[#031131] text-white py-12 px-10 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Professional About */}
        <div className="mb-10">
          <h3 className="text-xl font-bold mb-4">About</h3>
          <p className="text-sm text-gray-300 max-w-4xl leading-relaxed mb-4">
            We are a high-performance team at TS Academy, dedicated to building 
            scalable, user-centric web solutions. Our mission for this Capstone project is to 
            bridge the gap between complex data architecture and seamless user experiences, 
            demonstrating the technical excellence and collaborative spirit fostered during 
            our professional development.
          </p>
          <div className="text-[13px] text-gray-400 italic">
            <span className="font-semibold text-gray-300 not-italic uppercase tracking-wider mr-2">Contributors:</span>
            {members.join(" • ")}
          </div>
        </div>

        {/* Full-Width Horizontal Line */}
        <div className="w-full h-[1px] bg-gray-700/50 mb-8" />

        {/* Bottom Section: Rights & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-medium text-gray-300">
          
          {/* Left Side: Credit to you */}
          <div className="tracking-tight">
            ©2026 Designed by Joshua. All rights reserved
          </div>

          {/* Right Side: Navigation Links */}
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-all underline decoration-gray-600 underline-offset-4">Privacy & Policy</a>
            <a href="#" className="hover:text-white transition-all underline decoration-gray-600 underline-offset-4">Terms & Condition</a>
            <a 
              href="https://tsacademyonline.com/" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-white transition-colors font-bold text-white uppercase tracking-tighter"
            >
              TSAcademy
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;