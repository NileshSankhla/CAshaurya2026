import React from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const contacts = [
    {
      name: 'Rupali Hingankar',
      role: 'Publicity & Marketing Head',
      image: '/logos/Rupali.jpg',
      linkedin: 'https://www.linkedin.com/in/rupali-hingankar-7363ba288/',
      instagram: 'https://www.instagram.com/hingankarrupali?igsh=bDNjdDU3ZTQ1YjZw',
      email: 'mailto:rupalihingankar.shaurya.iitkgp@gmail.com',
    },
    {
      name: 'Shivraj Gulve',
      role: 'Publicity & Marketing Head',
      image: '/logos/Shivraj.jpg',
      linkedin: 'https://www.linkedin.com/in/shivraj-gulve-6583952bb/',
      instagram: 'https://instagram.com/janesmith',
      email: 'mailto:shivrajgulve.shaurya.iitkgp@gmail.com',
    },
  ];

  return (
    <footer className="bg-black/70 border-t-2 border-yellow-400 px-6 py-10 text-white font-['Poppins']">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* LEFT SECTION — Organization Info */}
        <div className="md:w-1/2 flex flex-col items-center text-center space-y-4">
          <img src="/logos/Shaurya_Logo_footer.png" alt="Organization Logo" className="w-40 h-auto mx-auto" />
          <p className="text-white text-lg font-bold font-['Ubuntu'] leading-relaxed">
            Shaurya is not just a sports fest; it's a vibrant celebration of athleticism and camaraderie,
            where the spirit of competition ignites passion and unity among colleges nationwide.
            Join us to witness the thrill of sports as we elevate the game together!
          </p>
          <div className="flex justify-center gap-4 text-yellow-400 text-2xl">
            <a
              href="https://www.instagram.com/shaurya.iitkgp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/shaurya-iit-kharagpur/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@ShauryaIITKharagpur"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              href="mailto:shaurya@iitkgp.ac.in"
              className="hover:text-white transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* RIGHT SECTION — Contact Persons */}
        <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center">
          {contacts.map((person, index) => (
            <div
              key={index}
              className="bg-black/40 border border-yellow-500 rounded-xl p-4 w-64 text-center shadow-md"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-yellow-400 mb-3"
              />
              <h3 className="text-xl font-semibold text-yellow-300">{person.name}</h3>
              <p className="text-lg text-white mb-2">{person.role}</p>

              <div className="flex justify-center gap-4 text-yellow-400 text-2xl">
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={person.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href={person.email}
                  className="hover:text-white transition-colors"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-white text-sm mt-10">
        &copy; {new Date().getFullYear()} Shaurya, IIT Kharagpur | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
