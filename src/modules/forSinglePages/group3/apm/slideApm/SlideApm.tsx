import React from 'react';

import styles from './slideApm.module.scss';

import NoSlide from '../../../../../assets/img/no-slide.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store';
import { Slides } from '../../../../../utils/types';

interface SlideApmProps {
  info: Slides;
  imagePath: string;
}

const SlideApm: React.FC<SlideApmProps> = ({ info, imagePath }) => {
  const apmRoute = useSelector((state: RootState) => state.imagesRoutes.apm);

  return (
    <>
      {info.image ? (
        <div className={styles.slideBack}>
          <img
            className={styles.slideImg}
            src={`${apmRoute}${imagePath}/${info.image}`}
            alt={'Изображение слайда не загрузилось'}
          />
          <p className={styles.slideText}>
            <h3 className={styles.slideTextStyle}>{info.slideText}</h3>
          </p>
        </div>
      ) : (
        <div className={styles.slideNoBack}>
          <img className={styles.slideImg} src={NoSlide} alt={'Изображение слайда не загрузилось'} />
          <p className={styles.slideText}>
            <h3 className={styles.slideTextStyle}>{info.slideText}</h3>
          </p>
        </div>
      )}
    </>
  );
};

export default SlideApm;
