import React from 'react';
import Image from 'next/image';
import iconMap from '../../app/utils/iconMap'; // Adjust the import path as necessary
import './featureCard.scss';

interface FeatureCardProps {
  iconKey: keyof typeof iconMap; // Key of the icon map
  title: string;
  subtext: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconKey, title, subtext }) => {
  const iconSrc = iconMap[iconKey];

  return (
    <div className="feature-card">
      <Image src={iconSrc} alt={`${title} icon`} className="feature-card__icon" width={50} height={50} />
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__subtext">{subtext}</p>
    </div>
  );
}

export default FeatureCard;
