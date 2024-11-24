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
export declare class Viewer {
    element: HTMLDivElement;
    options: ViewerOptions;
    _page: number;
    window: Window;
    constructor(element: string | HTMLDivElement, userOptions?: Partial<ViewerOptions>);
    mount(): Promise<void>;
    get page(): number;
    set page(page: number);
    next(): void;
    previous(): void;
    private eventListeners;
}
export declare const addChildClass: (element: HTMLDivElement, className: string) => void;
export {};
