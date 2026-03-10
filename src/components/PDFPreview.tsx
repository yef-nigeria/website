"use client";

import { Document, Page, pdfjs } from "react-pdf";

// Fix for Next.js + React-PDF
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

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
