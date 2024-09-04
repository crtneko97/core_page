import React from 'react';
import Image from 'next/image';
import heroMap from '../../app/utils/heroMap';
import './altHero.scss';
import Navbar from '../navbar/Navbar';

interface AltHeroProps {
  imageKey: keyof typeof heroMap;
  title: string;
}

const AltHero: React.FC<AltHeroProps> = ({ imageKey, title }) => {
  const imageSrc = heroMap[imageKey];

  return (
    <div className='alt-hero-wrapper'>
      <Navbar />
      <div className='alt-hero-background'>
        {/* Background Image */}
        <Image
          src={imageSrc}
          alt={`${title} image`}
          layout="fill" // Make the image fill the container
          objectFit="cover" // Cover the entire container
          quality={100} // High-quality image rendering
          className='alt-hero-image'
        />

        {/* RGBA Overlay */}
        <div className="alt-hero-overlay"></div>

        {/* Content */}
        <div className='alt-hero-content'>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default AltHero;
