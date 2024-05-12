import React from 'react';

import styles from './sliderArrows.module.scss';

import { useContext } from 'react';
import { SliderContext } from '../../Slider';
import WhiteTile from '../../../../../../../ui/buttons/whiteTile/WhiteTile';

const SliderArrows = () => {
  const { changeSlide } = useContext(SliderContext);

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
