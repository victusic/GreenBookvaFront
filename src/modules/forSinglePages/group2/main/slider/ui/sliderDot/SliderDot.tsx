import React from 'react';
import { useContext } from 'react';

import styles from './sliderDot.module.scss';

import { SliderContext } from '../../Slider';

interface SliderDotProps {
  number: number;
}

const SliderDot: React.FC<SliderDotProps> = ({ number }) => {
  // eslint-disable-next-line no-unused-vars
  const goToSlide: (number: number) => void = useContext(SliderContext) as (number: number) => void;
  const slideNumber: string = useContext(SliderContext) as string;
  return (
    <div
      className={styles.dot + ` ${Number(slideNumber) === number ? styles.selected : ''}`}
      onClick={() => goToSlide(number)}
    />
  );
};

export default SliderDot;
