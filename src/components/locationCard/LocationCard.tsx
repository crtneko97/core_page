// components/LocationCard.tsx
import React from 'react';
import './locationCard.scss';

interface LocationCardProps {
    city: string;
    street: string;
    postalCode: string;
    googleMapSrc: string; // The Google Maps iframe src URL
}

const LocationCard: React.FC<LocationCardProps> = ({ city, street, postalCode, googleMapSrc }) => {
    return (
        <div className="location-card">
            <div className="map-container">
                <iframe
                    src={googleMapSrc}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="google-map"
                />
            </div>
            <div className="location-info">
                <h2>{city}</h2>
                <p>{street}</p>
                <p>{postalCode}</p>
            </div>
        </div>
    );
};

export default LocationCard;
