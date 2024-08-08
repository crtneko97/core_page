import React from 'react'
import Image from 'next/image'
import heroMap from '../../app/utils/heroMap';
import './altHero.scss';

interface AltHeroProps {
    imageKey: keyof typeof heroMap;
    title: string;
}

const AltHero: React.FC<AltHeroProps> = ({ imageKey, title }) => {
  const imageSrc = heroMap[imageKey];
  
    return (
    <div>AltHero</div>
  )
}

export default AltHero