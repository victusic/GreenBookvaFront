import React, { HTMLAttributes } from 'react';

import styles from './starsPlate.module.scss';

interface StarsPlateProps extends HTMLAttributes<HTMLDivElement> {
  rate: number;
}

const StarsPlate: React.FC<StarsPlateProps> = ({ rate, ...props }) => {
  const starsStyles = [styles.grayStar, styles.grayStar, styles.grayStar, styles.grayStar, styles.grayStar];

  for (let i = 0; i < rate; i++) {
    starsStyles[i] = styles.yellowStar;
  }

  return (
    <div className={styles.starsPlate} {...props}>
      {starsStyles.map((starsStyle, index) => (
        <span key={index} className={starsStyle}>
          ★
        </span>
      ))}
    </div>
  );
};

export default StarsPlate;
