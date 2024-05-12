import React from 'react';
import { useContext } from 'react';
import SliderPlate from '../sliderPlate/SliderPlate';

import styles from './sliderList.module.scss';
import { SliderContext } from '../../Slider';
import { Await, useLoaderData } from 'react-router-dom';

const SliderList = () => {
  const { slideNumber } = useContext(SliderContext);
  const { promotions } = useLoaderData();
  return (
    <Await resolve={promotions}>
      {(resolvedPromotions) => (
        <div className={styles.sliderList} style={{ transform: `translateX(-${slideNumber * 100}%)` }}>
          {resolvedPromotions.map((slide, index) => (
            <SliderPlate key={index} data={slide} />
          ))}
        </div>
      )}
    </Await>
  );
};

export default SliderList;
