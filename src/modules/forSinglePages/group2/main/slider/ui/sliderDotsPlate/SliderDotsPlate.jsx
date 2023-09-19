import React from 'react'

import styles from './sliderDotsPlate.module.scss';

import { useContext } from 'react';
import SliderDot from '../sliderDot/SliderDot';
import { SliderContext } from '../../Slider';

const SliderDotsPlate = () => {
    const { slidesCount } = useContext(SliderContext);

    const renderDots = () => {
        const dots = [];
        for (let i = 0; i < slidesCount; i++) {
          dots.push(<SliderDot key={`dot-${i}`} number={i} />);
        }
    
        return dots;
      };

  return <div className={styles.dots}>{renderDots()}</div>;
}

export default SliderDotsPlate
