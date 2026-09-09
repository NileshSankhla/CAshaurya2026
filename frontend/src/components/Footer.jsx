import React from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const contacts = [
    {
      name: 'Gopichand',
      role: 'PUBLICITY & MARKETING HEAD',
      image: '/logos/Gopichand.jpg',
      linkedin: 'https://www.linkedin.com/company/shaurya-iit-kharagpur/',
      instagram: 'https://www.instagram.com/shaurya.iitkgp/',
      email: 'shaurya@iitkgp.ac.in',
    },
    {
      name: 'Sutirtha',
      role: 'PUBLICITY & MARKETING HEAD',
      image: '/logos/sutirtha.jpg',
      linkedin: 'https://www.linkedin.com/company/shaurya-iit-kharagpur/',
      instagram: 'https://www.instagram.com/shaurya.iitkgp/',
      email: 'shaurya@iitkgp.ac.in',
    },
  ];

  // Helper function to open Gmail compose link
  const getGmailLink = (email) =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  return (
    <footer className="w-full bg-black border-t border-yellow-500/30 pt-12 pb-8 px-6 text-white font-['Poppins']">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-center gap-12 lg:gap-20">

        {/* 🏛️ LEFT SECTION — Organization Info (Logo -> Small Desc -> Contact Icons) */}
        <div className="w-full lg:w-auto flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 max-w-md">
          {/* 1. Logo on top */}
          <img src="/logos/Shaurya_Logo_footer.png" alt="Shaurya IIT Kharagpur Logo" className="w-44 sm:w-48 h-auto" />

          {/* 2. Description in small font */}
          <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed max-w-md">
            Shaurya is the premier annual sports festival organized by the Technology Students' Gymkhana, IIT Kharagpur — celebrating athletic excellence, sportsmanship, and student leadership across 500+ universities nationwide.
          </p>

          {/* 3. Contact & Social Icons */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.instagram.com/shaurya.iitkgp/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="p-2.5 rounded-full bg-black border border-yellow-500/30 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all text-base shadow-md"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/shaurya-iit-kharagpur/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-2.5 rounded-full bg-black border border-yellow-500/30 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all text-base shadow-md"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@ShauryaIITKharagpur"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
              className="p-2.5 rounded-full bg-black border border-yellow-500/30 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all text-base shadow-md"
            >
              <FaYoutube />
            </a>
            <a
              href={getGmailLink("shaurya@iitkgp.ac.in")}
              target="_blank"
              rel="noopener noreferrer"
              title="Email Us"
              className="p-2.5 rounded-full bg-black border border-yellow-500/30 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all text-base shadow-md"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* 👤 RIGHT SECTION — Contact Heads (Photo flush at top in normal state -> Expands to cover full card on hover) */}
        <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4 items-center justify-center">
          {contacts.map((person, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-sm border border-zinc-800 bg-[#08080a] hover:border-yellow-500/50 w-48 sm:w-52 h-[265px] flex flex-col justify-between items-center cursor-pointer shadow-2xl transition-colors duration-500"
            >
              {/* Photo Container: Flush at top (top-0 left-0 right-0 h-48) in normal state -> Expands down (h-full) on hover */}
              <div className="absolute top-0 left-0 right-0 h-48 group-hover:h-full overflow-hidden transition-all duration-500 ease-in-out z-0 bg-zinc-900">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Simple Black/50 Overlay (Fades in on hover) */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              </div>

              {/* Flow spacer holding top photo height */}
              <div className="w-full h-48 flex-shrink-0 pointer-events-none" />

              {/* Text Info & Icons: Centered lower in non-hover state (translate-y-2.5), shifts up on hover (group-hover:-translate-y-7) */}
              <div className="relative z-20 w-full flex flex-col items-center text-center space-y-0.5 pb-2 px-2 translate-y-2.5 group-hover:-translate-y-7 transition-transform duration-500 ease-out">
                <h3 className="text-sm font-bold text-white tracking-wide font-['Poppins'] drop-shadow-md">
                  {person.name}
                </h3>
                <p className="text-[10px] font-bold text-yellow-400 tracking-wider uppercase font-['Poppins'] leading-tight max-w-[170px] drop-shadow-md">
                  {person.role}
                </p>

                {/* 3 Circular Outlined Social Icons (Staggered fade in after text shifts up on hover) */}
                <div className="flex items-center justify-center gap-2.5 pt-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-3 group-hover:translate-y-0">
                  <a
                    href={person.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    className="w-7 h-7 rounded-full border border-gray-300/80 hover:border-yellow-400 text-white hover:text-yellow-400 flex items-center justify-center text-xs transition-all bg-black/40 hover:bg-black/90 shadow-md hover:scale-110"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={getGmailLink(person.email)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Email"
                    className="w-7 h-7 rounded-full border border-gray-300/80 hover:border-yellow-400 text-white hover:text-yellow-400 flex items-center justify-center text-xs transition-all bg-black/40 hover:bg-black/90 shadow-md hover:scale-110"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="w-7 h-7 rounded-full border border-gray-300/80 hover:border-yellow-400 text-white hover:text-yellow-400 flex items-center justify-center text-xs transition-all bg-black/40 hover:bg-black/90 shadow-md hover:scale-110"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;