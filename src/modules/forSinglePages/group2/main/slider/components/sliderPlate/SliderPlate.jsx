import React from 'react';

import styles from './sliderPlate.module.scss';
import SliderImage from '../sliderImage/SliderImage';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SliderPlate = ({ data: { id, banner } }) => {
  const bannerRoute = useSelector((state) => state.imagesRoutes.banner);

  return (
    <Link className={styles.sliderPlate} to={`/promotion/${id}`}>
      <SliderImage src={bannerRoute + banner} alt={id} />
    </Link>
  );
};

export default SliderPlate;
