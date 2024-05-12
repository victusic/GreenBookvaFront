import React from 'react';

import styles from './starsPlate.module.scss';

const StarsPlate = ({ rate, ...props }) => {
  let starsStyles = [styles.grayStar, styles.grayStar, styles.grayStar, styles.grayStar, styles.grayStar];

  for (let i = 0; i < rate; i++) {
    starsStyles[i] = styles.yellowStar;
  }

  return (
    <div className={styles.starsPlate} {...props}>
      <span className={starsStyles[0]}>★</span>
      <span className={starsStyles[1]}>★</span>
      <span className={starsStyles[2]}>★</span>
      <span className={starsStyles[3]}>★</span>
      <span className={starsStyles[4]}>★</span>
    </div>
  );
};

export default StarsPlate;
