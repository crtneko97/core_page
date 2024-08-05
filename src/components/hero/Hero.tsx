import React from 'react';
import './hero.scss'; // Import the stylesheet for the Hero component
import Link from 'next/link';
import Navbar from '../navbar/Navbar';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <Navbar />
      <div className="hero-background"></div>
      <div className="hero">
        <div className="hero-content">
          <p>WebEase</p>
          <h1>slogan</h1>
          <div className="hero-buttons">
            <Link href="/about">
              <button className="hero-button">
                Contact us
              </button>
            </Link>
            <Link href="/about">
              <button className="hero-button">
                Features
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
