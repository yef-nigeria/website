"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { DownloadIcon, ArrowRight, X, Eye } from "lucide-react";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const PDFPreview = dynamic(() => import("@/components/PDFPreview"), {
  ssr: false,
});

export type ContentfulAsset = {
  fields: {
    title: string;
    description?: string;
    file: {
      url: string;
      fileName: string;
      contentType: string;
    };
  };
};

const ViewPublication = ({ document }: { document: ContentfulAsset }) => {
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const pdfUrl = `https:${document.fields.file.url}`;
  const fileName = document.fields.file.fileName;

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumberOfPages(numPages);
    setCurrentPageNumber(1);
  };

  const changePage = (offset: number) => {
    setCurrentPageNumber((prev) => prev + offset);
  };

  return (
    <Dialog>
      {/* Trigger */}
      {/* <DialogTrigger asChild> */}
      <Link
        href={pdfUrl}
        target="_blank"
        className="text-sm flex items-center gap-1"
      >
        <Eye strokeWidth={1} size={16} />
        View
      </Link>
      {/* </DialogTrigger> */}

      {/* Modal */}
      <DialogContent className="max-w-6xl w-full p-0">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <p className="font-semibold">{document.fields.title}</p>

          <div className="flex items-center gap-4">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              download={fileName}
              className="flex items-center gap-2 text-sm hover:text-primary"
            >
              Download
              <DownloadIcon size={16} />
            </a>
          </div>
        </div>

        {/* Pagination */}
        {numberOfPages > 0 && (
          <div className="flex flex-col items-center py-3 border-b">
            <p className="text-sm">
              Page {currentPageNumber} of {numberOfPages}
            </p>

            {numberOfPages > 1 && (
              <div className="flex gap-2 mt-2">
                <Button
                  size="sm"
                  onClick={() => changePage(-1)}
                  disabled={currentPageNumber <= 1}
                >
                  <ArrowRight />
                </Button>

                <Button
                  size="sm"
                  onClick={() => changePage(1)}
                  disabled={currentPageNumber >= numberOfPages}
                >
                  <ArrowRight className="rotate-180" />
                </Button>
              </div>
            )}
          </div>
        )}

        {/* PDF Viewer */}
        <div className="flex justify-center p-6 overflow-auto max-h-[80vh]">
          <PDFPreview
            documentLink={pdfUrl}
            numberOfPages={numberOfPages}
            currentPageNumber={currentPageNumber}
            onDocumentLoadSuccess={onDocumentLoadSuccess}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewPublication;
