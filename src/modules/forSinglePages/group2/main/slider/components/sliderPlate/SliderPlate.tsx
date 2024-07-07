import React from 'react';

import styles from './sliderPlate.module.scss';
import SliderImage from '../sliderImage/SliderImage';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../../store';
import { PromotionSlide } from '../../../../../../../utils/types';

interface SliderPlateProps {
  data: PromotionSlide;
}

const SliderPlate: React.FC<SliderPlateProps> = ({ data: { id, banner } }) => {
  const bannerRoute = useSelector((state: RootState) => state.imagesRoutes.banner);

  return (
    <Link className={styles.sliderPlate} to={`/promotion/${id}`}>
      <SliderImage src={bannerRoute + banner} alt={banner} />
    </Link>
  );
};

export default SliderPlate;
