import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-500 p-4 text-white mt-auto">
      <div className="text-center">
        © {new Date().getFullYear()} Anushree Medical Store. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

