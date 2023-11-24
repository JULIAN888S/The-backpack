import React from 'react';
import './dba.css'; // Asegúrate de que la ruta a tu archivo CSS sea correcta
import dbaDemo from '../../../assets/dba-demo.png'; // Asegúrate de que la ruta a tu imagen sea correcta

function Dba() {
  // Esta función construye la URL de la miniatura a partir del ID del video de YouTube
  const getYouTubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  };

  // Simulando una lista de recursos que podrían venir de una API o de un estado
  const resources = [
    {
      id: 'DBA1',
      description: 'Comprende y utiliza palabras familiares y frases cortas sobre rutinas, actividades cotidianas y gustos.',
      image: dbaDemo,
      videoId: null, // No hay video para este recurso
    },
    {
      id: 'DBA2',
      description: 'Comprende y utiliza palabras familiares y frases cortas sobre rutinas, actividades cotidianas y gustos.',
      image: dbaDemo,
      videoId: null, // No hay video para este recurso
    },
    {
      id: 'DBA3',
      description: 'Un recurso de video.',
      videoId: 'QWmteg9guoo', // Aquí va el ID real del video de YouTube
    },
    // ... más recursos
  ];

  return (
    <section className="dba">
      <h2 className="text-center">A 1.3</h2>
      <div className="container-cards">  
        {resources.map((resource) => (
          <div className="card" key={resource.id}> 
            <h2>{resource.id}</h2> 
            {resource.image && (
              <div className="resource-card">
                <img src={resource.image} alt={`Imagen para ${resource.id}`} /> 
              </div>
            )}
            {resource.videoId && (
              <div className="resource-card">
                <a href={`https://www.youtube.com/watch?v=${resource.videoId}`} target="_blank" rel="noopener noreferrer">
                  <img src={getYouTubeThumbnail(resource.videoId)} alt={`Miniatura para el video ${resource.id}`} />
                </a>
              </div>
            )}
            <p>{resource.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dba;
