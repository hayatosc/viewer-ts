import * as pdfjsLib from 'pdfjs-dist';
import { addChildClass } from './main';

pdfjsLib.GlobalWorkerOptions.workerSrc = '../node_modules/pdfjs-dist/build/pdf.worker.mjs';

export const renderPDF = async (url: URL | string, element: HTMLDivElement, page: number): Promise<void> => {
  element.innerHTML = '';
  const loadingTask = pdfjsLib.getDocument(url);

  loadingTask.promise.then((pdfDoc) => {
    for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
      pdfDoc
        .getPage(pageNum)
        .then((page) => {
          const canvas = document.createElement('canvas');
          element.appendChild(canvas);
          const context = canvas.getContext('2d');
          const scale = 4;
          const viewport = page.getViewport({ scale });
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };

          // @ts-expect-error
          page.render(renderContext);
        })
        .then(() => {
          addChildClass(element, 'viewer_ts__page');
          element.querySelector(`canvas:nth-child(${page})`)?.classList.add('viewer_ts__page__active');
        });
    }
  });
};
