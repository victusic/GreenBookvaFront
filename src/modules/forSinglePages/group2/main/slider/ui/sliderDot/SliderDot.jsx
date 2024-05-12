import React from 'react';
import { useContext } from 'react';

import styles from './sliderDot.module.scss';

import { SliderContext } from '../../Slider';

const SliderDot = ({ number }) => {
  const { goToSlide, slideNumber } = useContext(SliderContext);
  return (
    <div
      className={styles.dot + ` ${slideNumber === number ? styles.selected : ''}`}
      onClick={() => goToSlide(number)}
    />
  );
};

export default SliderDot;
