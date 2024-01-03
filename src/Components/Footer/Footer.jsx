import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-500  text-white mt-auto fixed bottom-0 w-full">
      <div className="text-center">
        © {new Date().getFullYear()} Anushree Medical Store. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

