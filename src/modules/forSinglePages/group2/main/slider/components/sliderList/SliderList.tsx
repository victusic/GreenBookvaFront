import React from 'react';
import { useContext } from 'react';
import SliderPlate from '../sliderPlate/SliderPlate';

import styles from './sliderList.module.scss';
import { SliderContext } from '../../Slider';
import { Await, useLoaderData } from 'react-router-dom';
import { PromotionSlide } from '../../../../../../../utils/types';

const SliderList: React.FC = () => {
  const slideNumber: string = useContext(SliderContext);
  const promotions: PromotionSlide[] = useLoaderData() as PromotionSlide[];
  return (
    <Await resolve={promotions}>
      {(resolvedPromotions) => (
        <div
          className={styles.sliderList}
          style={{ transform: `translateX(-${Number(slideNumber) * 100}%)` }}
        >
          {resolvedPromotions.map((slide: PromotionSlide, index: number) => (
            <SliderPlate key={index} data={slide} />
          ))}
        </div>
      )}
    </Await>
  );
};

export default SliderList;
