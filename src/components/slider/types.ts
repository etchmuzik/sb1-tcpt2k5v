export interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  alt: string;
}

export interface SlideNavigationProps {
  onPrev: () => void;
  onNext: () => void;
}

export interface SlideDotsProps {
  total: number;
  current: number;
  onClick: (index: number) => void;
}

export interface SlideImageProps {
  image: string;
  alt: string;
  active: boolean;
}

export interface SlideContentProps {
  title: string;
  description: string;
}