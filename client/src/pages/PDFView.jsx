import React from 'react';
import { Document, Page } from 'react-pdf';

function PDFViewer({path}) {
  return (
    <div>
      <Document file={path}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default PDFViewer;
