'use client';
import React, { useEffect, useState } from 'react'; // Import necessary hooks
import './hero.scss'; // Import the stylesheet for the Hero component
import Link from 'next/link';
import Navbar from '../navbar/Navbar';

const Hero: React.FC = () => {
  const [opacity, setOpacity] = useState(1); // State to control background opacity

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position of the page
      const scrollPosition = window.scrollY;
      // Calculate the maximum scroll limit for the fading effect
      const maxScroll = window.innerHeight;
      // Calculate the new opacity value (the more you scroll, the more it fades out)
      const newOpacity = 1 - Math.min(scrollPosition / maxScroll, 1);
      setOpacity(newOpacity); // Update the opacity state
    };

    window.addEventListener('scroll', handleScroll); // Add event listener on mount

    return () => window.removeEventListener('scroll', handleScroll); // Clean up on unmount
  }, []);

  return (
    <div className="hero-wrapper">
      <Navbar />
      <div
        className="hero-background"
        style={{ opacity }} // Set opacity dynamically based on scroll
      ></div>
      <div className="hero">
        <div className="hero-content">
          <p>WebEase</p>
          <h1>slogan</h1>
          <div className="hero-buttons">
            <Link href="/about">
              <button className="hero-button">Contact us</button>
            </Link>
            <Link href="/about">
              <button className="hero-button">Features</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
