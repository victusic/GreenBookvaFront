import React, { Dispatch, SetStateAction } from 'react';

import styles from './modalStarsPlate.module.scss';

interface ModalStarsPlateProps {
  rate: number;
  setRating: Dispatch<SetStateAction<number>>;
}

const ModalStarsPlate: React.FC<ModalStarsPlateProps> = ({ rate, setRating, ...props }) => {
  const starsStyles = [styles.grayStar, styles.grayStar, styles.grayStar, styles.grayStar, styles.grayStar];

  for (let i = 0; i < rate; i++) {
    starsStyles[i] = styles.yellowStar;
  }

  return (
    <div className={styles.starsPlate} {...props}>
      <span className={starsStyles[0]} onClick={() => setRating(1)}>
        ★
      </span>
      <span className={starsStyles[1]} onClick={() => setRating(2)}>
        ★
      </span>
      <span className={starsStyles[2]} onClick={() => setRating(3)}>
        ★
      </span>
      <span className={starsStyles[3]} onClick={() => setRating(4)}>
        ★
      </span>
      <span className={starsStyles[4]} onClick={() => setRating(5)}>
        ★
      </span>
    </div>
  );
};

export default ModalStarsPlate;
