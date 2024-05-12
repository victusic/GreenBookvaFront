import React, { useRef, useEffect } from 'react';
import styles from './horisontalScroll.module.scss';

const HorisontalScroll = ({ children, addClass, setScrollWidth, scrollWidth, ...props }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

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
    if (scrollWidth) {
      containerRef.current.scrollLeft += scrollWidth;
      setScrollWidth(0);
    }
  }, [scrollWidth]);

  return (
    <div ref={containerRef} className={styles.scroll + ' ' + addClass} {...props}>
      {children}
    </div>
  );
};

export default HorisontalScroll;
