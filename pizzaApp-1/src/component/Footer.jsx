import React from "react";

function Footer() {
  return (
    <footer className="center">
      {new Date().toLocaleTimeString()} We're currently open
    </footer>
  );
}

export default Footer;
