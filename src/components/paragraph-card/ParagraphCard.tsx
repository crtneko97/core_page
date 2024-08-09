import React from 'react';
import './paragraphCard.scss'; // Import the stylesheet

interface ParagraphCardProps {
    paragraph: string;
    width?: string; // Optional prop to control width
}

const ParagraphCard: React.FC<ParagraphCardProps> = ({
    paragraph,
    width = 'auto' // Default width if not provided
}) => {
  return (
    <div className="paragraph-card" style={{ width }}>
      <p>{paragraph}</p>
    </div>
  );
}

export default ParagraphCard;
