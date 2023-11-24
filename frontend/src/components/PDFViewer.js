import React from 'react';

const PDFViewer = ({ file }) => {
  // Extrae el ID de Google Drive de la URL si está presente.
  const match = file.match(/[-\w]{25,}/);
  const googleDriveId = match ? match[0] : null;

  // Si es un ID de Google Drive, construye la URL de visualización.
  // De lo contrario, asume que es una URL directa al archivo PDF.
  const iframeSrc = googleDriveId
    ? `https://drive.google.com/file/d/${googleDriveId}/preview`
    : file;

  return (
    <iframe
      src={iframeSrc}
      width="100%"
      height="100%"
      style={{ border: 'none' }}
    ></iframe>
  );
};

export default PDFViewer;
