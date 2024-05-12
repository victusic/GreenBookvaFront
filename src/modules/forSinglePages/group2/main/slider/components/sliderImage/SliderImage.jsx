import React from 'react';

import styles from './sliderImage.module.scss';

const SliderImage = ({ src, alt }) => {
  return <img src={src} alt={alt} className={styles.sliderImage} draggable="false" />;
};

export default SliderImage;
