import React from 'react';

import styles from './titleApm.module.scss';

import wikiSvg from '../../../../../assets/svg/wiki.svg';
import { HandySvg } from 'handy-svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TitleApm = ({ info, imagePath, image }) => {
  const apmRoute = useSelector((state) => state.imagesRoutes.apm);

  return (
    <>
      <div className={styles.flexPlate}>
        {info.image ? (
          <img className={styles.imagePlate} alt={info.name} src={`${apmRoute}${imagePath}/${info.image}`} />
        ) : (
          <img src={image} alt={'Фотография профиля отсутствует'} className={styles.imagePlate}></img>
        )}
        <div className={styles.textPlate}>
          <h3 className={styles.nameTitle}>
            {info.name + ' '}
            {info.surname && info.surname}
          </h3>
          {info.year_of_life && <h5 className={styles.nameDate}>{info.year_of_life}</h5>}
          <p className={styles.nameDesc}>{info.description}</p>
          {info.wiki_link && (
            <Link to={info.wiki_link} target="_blank">
              <HandySvg src={wikiSvg} className={styles.wikiSvg} />
            </Link>
          )}
        </div>
      </div>
      <p className={styles.modileDesc}>{info.description}</p>
    </>
  );
};

export default TitleApm;
