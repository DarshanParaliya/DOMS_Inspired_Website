declare module 'lenis/react' {
  import { FC, ReactNode } from 'react';
  
  export interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    orientation?: 'vertical' | 'horizontal';
    gestureOrientation?: 'vertical' | 'horizontal' | 'both';
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    touchMultiplier?: number;
    wheelMultiplier?: number;
    normalizeWheel?: boolean;
    infinite?: boolean;
    autoResize?: boolean;
  }

  export interface ReactLenisProps {
    root?: boolean;
    options?: LenisOptions;
    children?: ReactNode;
    className?: string;
  }

  export const ReactLenis: FC<ReactLenisProps>;
}
