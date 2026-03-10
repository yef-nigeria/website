"use client";

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

type Props = {
  documentLink: string;
  numberOfPages: number;
  currentPageNumber: number;
  onDocumentLoadSuccess: (props: any) => void;
};

const PDFPreview = ({
  documentLink,
  currentPageNumber,
  onDocumentLoadSuccess,
}: Props) => {
  return (
    <Document
      file={documentLink}
      onLoadSuccess={onDocumentLoadSuccess}
      loading={
        <div className="flex flex-col gap-3 items-center mt-40">
          <p>Loading File...</p>
        </div>
      }
    >
      <Page
        pageNumber={currentPageNumber}
        width={900}
        renderTextLayer={false}
        renderAnnotationLayer={false}
      />
    </Document>
  );
};

export default PDFPreview;
