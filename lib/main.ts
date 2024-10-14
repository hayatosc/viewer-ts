import './style.css';

export interface ViewerOptions {
  display: 'single' | 'double' | 'auto';
  duration: number;
  page: number;
  gradients: boolean;
  turnCorners: Array<'tl' | 'bl' | 'tr' | 'br' | 'l' | 'r'>;
  hooks?: HooksOption;
  type?: 'pdf' | (string & {});
  src?: URL | string;
}

interface HooksOption {
  onPageUpdate?: (page: number) => void;
}

const defaultTurnOptions: ViewerOptions = {
  display: 'auto',
  duration: 600,
  page: 1,
  gradients: true,
  turnCorners: ['bl', 'br'],
} as const;

export class Viewer {
  element: HTMLDivElement;
  options: ViewerOptions;
  _page: number;
  window: Window;

  constructor(element: string | HTMLDivElement, userOptions?: Partial<ViewerOptions>) {
    this.element = typeof element === 'string' ? findSelector(element) : element;
    this.options = { ...defaultTurnOptions, ...userOptions };
    this._page = this.options.page || 1;
    this.window = window;
    this.eventListeners();
  }

  async mount() {
    this.element.classList.add('viewer_ts__container');

    if (this.options.type === 'pdf') {
      if (this.options.src) {
        try {
          const { renderPDF } = await import('./pdf');
          await renderPDF(this.options.src, this.element, this._page);
        } catch (error) {
          console.error('Error occurred in PDF', error);
        }
      }
    } else {
      addChildClass(this.element, 'viewer_ts__page');
      this.element.querySelector(`canvas:nth-child(${this.page})`)?.classList.add('viewer_ts__page__active');
    }
  }

  get page() {
    return this._page;
  }
  set page(page: number) {
    this._page = page;
    if (page < 1) {
      this._page = 1;
    }
    this.element.querySelector('.viewer_ts__page__active')?.classList.remove('viewer_ts__page__active');
    this.element.querySelector(`.viewer_ts__page:nth-child(${this._page})`)?.classList.add('viewer_ts__page__active');
    if (this.options.hooks?.onPageUpdate) {
      this.options.hooks.onPageUpdate(this._page);
    }
  }

  next() {
    this.page += 1;
    console.log(this.page);
  }
  previous() {
    this.page -= 1;
    console.log(this.page);
  }

  private eventListeners() {
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;

    this.element.addEventListener('touchstart', (event) => {
      startX = event.touches[0].pageX;
      startY = event.touches[0].pageY;
    });

    this.element.addEventListener('touchmove', (event) => {
      endX = event.touches[0].pageX;
      endY = event.touches[0].pageY;
    });

    this.element.addEventListener('touchend', (_event) => {
      const distanceX = startX - endX;
      const distanceY = startY - endY;

      if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 100) {
        return;
      }
      if (Math.abs(distanceX) > Math.abs(distanceY)) {
        if (distanceX > 0) {
          this.next();
        } else {
          this.previous();
        }
      }
    });
  }
}

const findSelector = (selector: string): HTMLDivElement => {
  const queryElement = document.querySelector<HTMLDivElement>(selector);
  if (!queryElement) {
    throw new Error(`cannot find selector: '${selector}'`);
  }
  return queryElement;
};

export const addChildClass = (element: HTMLDivElement, className: string) => {
  element.querySelectorAll('*').forEach((child) => {
    child.classList.add(className);
  });
};
