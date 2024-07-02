import React, { useRef, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import styles from './horizontalScroll.module.scss';

interface HorizontalScrollProps {
  children: ReactNode;
  addClass?: string;
  setScrollWidth?: Dispatch<SetStateAction<number>>;
  scrollWidth?: number;
}
export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  children,
  addClass,
  setScrollWidth,
  scrollWidth,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleWheel = (event) => {
      event.preventDefault();

      container.scrollTo({
        left: container.scrollLeft + event.deltaY * 3,
        behavior: 'smooth',
      });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    if (scrollWidth && containerRef.current) {
      containerRef.current.scrollLeft += scrollWidth;
      if (setScrollWidth) setScrollWidth(0);
    }
  }, [scrollWidth]);

  return (
    <div ref={containerRef} className={styles.scroll + ' ' + addClass} {...props}>
      {children}
    </div>
  );
};
