// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {currentYear} Rusesco School Management System. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Built with <span className="text-red-500">&hearts;</span> by Matthews Gondwe
        </p>
      </div>
    </footer>
  );
};

export default Footer;
