import React from 'react';

import styles from './sliderArrows.module.scss';

import { useContext } from 'react';
import { SliderContext } from '../../Slider';
import WhiteTile from '../../../../../../../ui/buttons/whiteTile/WhiteTile';

const SliderArrows: React.FC = () => {
  // eslint-disable-next-line no-unused-vars
  const changeSlide: (number: number) => void = useContext(SliderContext) as (number: number) => void;

  return (
    <div className={styles.arrowsPlate}>
      <WhiteTile addStyle={styles.arrowOpacity} onClick={() => changeSlide(-1)}>
        ❮
      </WhiteTile>
      <WhiteTile addStyle={styles.arrowOpacity} onClick={() => changeSlide(1)}>
        ❯
      </WhiteTile>
    </div>
  );
};

export default SliderArrows;
