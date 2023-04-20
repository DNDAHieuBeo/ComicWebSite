import React, { useState, useEffect } from 'react';
import { BASE_URL, getLinkImage } from './utils'; // Make sure the path to the utils file is correct

const DisplayImage = ({ imageUrl }) => {
    const [imageSrc, setImageSrc] = useState('');
  
    useEffect(() => {
      const fetchImage = async () => {
        const imageLink = getLinkImage(imageUrl);
        setImageSrc(imageLink);
      };
  
      fetchImage();
    }, [imageUrl]);
  
    return (
      <div>
        {imageSrc ? (
          <img src={imageSrc} alt="Fetched Image" />
        ) : (
          <p>Loading image...</p>
        )}
      </div>
    );
  };
  