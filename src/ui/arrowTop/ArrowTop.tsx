import React from 'react';

import styles from './arrowTop.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';

const ArrowTop: React.FC = () => {
  const [visibleArrow, setVisibleArrow] = useState(styles.arrowNone);

  const [nowScroll, setNowScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setNowScroll(window.scrollY);
  };

  useEffect(() => {
    {
      nowScroll > 400 ? setVisibleArrow('') : setVisibleArrow(styles.arrowNone);
    }
  }, [nowScroll]);

  function scroll() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <div className={styles.arrowPlate + ' ' + visibleArrow}>
      <button className={styles.arrowButton} onClick={scroll}>
        <p className={styles.arrowButtonText}>❮</p>
      </button>
    </div>
  );
};

export default ArrowTop;
