import React from 'react';

import styles from './imagesApm.module.scss';
import { useSelector } from 'react-redux';

const ImagesApm = ({ info, imagePath }) => {
  const apmRoute = useSelector((state) => state.imagesRoutes.apm);

  return (
    <>
      {info.length > 0 && (
        <div className={styles.imagesPlate}>
          {info.map((img, index) => (
            <img
              className={styles.image}
              key={index}
              src={`${apmRoute}${imagePath}/${img.image}`}
              alt={'Изображения страницы'}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ImagesApm;
