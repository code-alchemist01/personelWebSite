declare module 'react-scroll' {
  import { ComponentType, ReactElement } from 'react';

  interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
  }

  export const Link: ComponentType<LinkProps>;
  export const Element: ComponentType<{ name: string }>;
  export const Events: any;
  export const scrollSpy: any;
  export const scroller: any;
}