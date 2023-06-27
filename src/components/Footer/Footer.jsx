import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="mt-6 bg-gray-900">
        <div className="container mx-auto px-4 py-2 text-center text-white drop-shadow-lg">
          <p>&copy; {new Date().getFullYear()} Shihab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
