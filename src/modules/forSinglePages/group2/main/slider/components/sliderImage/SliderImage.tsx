import React from 'react';

import styles from './sliderImage.module.scss';

interface SliderImageProps {
  src: string;
  alt: string;
}

const SliderImage: React.FC<SliderImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className={styles.sliderImage} draggable="false" />;
};

export default SliderImage;
