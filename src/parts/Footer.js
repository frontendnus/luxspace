import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="flex text-center px-4 py-8 justify-center">
      <p className="text-sm">Copyright {date} • All Rights Reserved LuxSpace by Frontendnus</p>
    </footer>
  );
};

export default Footer;
