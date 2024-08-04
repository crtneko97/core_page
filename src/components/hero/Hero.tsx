import React from 'react';
import './hero.scss'; // Import the stylesheet for the Hero component
import Link from 'next/link';

const Hero = () => {
  return (
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
  );
};

export default Hero;
