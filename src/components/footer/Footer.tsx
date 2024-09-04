import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
      <img className={'logo'} src="/icons/Logo.png" alt="Icon" width={175} height={75}/>
        <p className="slogan">Your Slogan Here</p>
      </div>
      <div className="footer-right">
        <ul className="footer-row">
          <li><h3>Links</h3></li>
          <li>Contact Us</li>
          <li>About</li>
          <li>Services</li>
        </ul>
        <ul className="footer-row">
          <li><h3>Services</h3></li>
          <li>Consulting</li>
          <li>Support</li>
        </ul>
        <ul className="footer-row">
          <li><h3>Contact</h3></li>
          <li>123-456-7890</li>
          <li>email@example.com</li>
        </ul>
      </div>
      <div className="divider"></div>
    </footer>
  );
};

export default Footer;
