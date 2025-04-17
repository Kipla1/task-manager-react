import React from 'react';

                                                                          
const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Task Manager.
             All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact us</a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
