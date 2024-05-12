import React from 'react';

import styles from './mainTopLine.module.scss';
import Slider from '../slider/Slider';
import RecommendationBanner from '../recommendationBanner/RecommendationBanner';

const MainTopLine = () => {
  return (
    <div className={styles.topLinePlate}>
      <Slider />
      <RecommendationBanner />
    </div>
  );
};

export default MainTopLine;
