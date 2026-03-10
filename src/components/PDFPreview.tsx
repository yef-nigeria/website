import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const DocumentPreview = ({
  documentLink,
  currentPageNumber,
  onDocumentLoadSuccess,
}: {
  documentLink: string;
  numberOfPages: number;
  currentPageNumber: number;
  onDocumentLoadSuccess: (props: any) => void;
  changePage: (offset: number) => void;
}) => {
  return (
    <>
      <Document
        file={documentLink}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="flex flex-col gap-3 items-center mt-40 text-white">
            <p>Loading File...</p>
          </div>
        }
      >
        <Page
          pageNumber={currentPageNumber}
          width={950}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </>
  );
};

export default DocumentPreview;
