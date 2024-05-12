import React from 'react';

import styles from './slideApm.module.scss';

import NoSlide from '../../../../../assets/img/no-slide.png';
import { useSelector } from 'react-redux';

const SlideApm = ({ info, imagePath }) => {
  const apmRoute = useSelector((state) => state.imagesRoutes.apm);

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
            <h3 className={styles.slideTextStyle}>{info.slide_text}</h3>
          </p>
        </div>
      ) : (
        <div className={styles.slideNoBack}>
          <img className={styles.slideImg} src={NoSlide} alt={'Изображение слайда не загрузилось'} />
          <p className={styles.slideText}>
            <h3 className={styles.slideTextStyle}>{info.slide_text}</h3>
          </p>
        </div>
      )}
    </>
  );
};

export default SlideApm;
