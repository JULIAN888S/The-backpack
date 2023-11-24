import React from 'react';
import './result.css';

function Result() {
  // ID del video de YouTube del ejemplo proporcionado
  const videoId = 'L3tYPaY3WNY';

  // URL del video para el iframe
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <section className="result-container">
      <div className="resources">
        <div className="resource-thumbnail">
          <iframe
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        </div>

        <div className="description-thumbnail">
          <h2>Episode 9: I’m a fan</h2>
          <p>Here are those people we admire and have left their mark on our lives.</p>
          <button>View More</button>
        </div> 
      </div>

      <div className="resources">
        <div className="resource-thumbnail">
          <iframe
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        </div>

        <div className="description-thumbnail">
          <h2>Episode 10: </h2>
          <p>Here are those people we admire and have left their mark on our lives.</p>
          <button>View More</button>
        </div> 
      </div>
      {/* Repite este bloque para cada video que quieras mostrar */}
      {/* ... otros bloques `resources` ... */}
    </section>
  );
}

export default Result;
