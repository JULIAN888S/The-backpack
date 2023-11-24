// YouTubeThumbnail.js
import React from 'react';

const YouTubeThumbnail = ({ link }) => {
  // Extracción del ID del video de YouTube desde la URL.
  const videoId = link.split('v=')[1].split('&')[0];
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={thumbnailUrl} alt="Video Thumbnail" style={{ maxWidth: '100%' }} />
    </a>
  );
};

export default YouTubeThumbnail;
