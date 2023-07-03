import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white">
            <h4 className="text-lg font-bold">Your Name</h4>
            <p className="text-sm">Full-Stack Web Developer</p>
          </div>
          <div className="flex mt-4 md:mt-0">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 ml-4"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 ml-4"
            >
              LinkedIn
            </a>
            <a
              href="mailto:youremail@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 ml-4"
            >
              Email
            </a>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-700 pt-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
