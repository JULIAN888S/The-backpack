import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Configurar el worker de PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFThumbnail = ({ file }) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Document
      file={file}
      options={{ workerSrc: '/pdf.worker.js' }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {numPages > 0 && (
        <Page pageNumber={1} width={150} />
      )}
    </Document>
  );
};

export default PDFThumbnail;
