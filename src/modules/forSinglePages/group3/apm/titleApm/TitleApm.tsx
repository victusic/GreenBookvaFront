import React from 'react';

import styles from './titleApm.module.scss';

import wikiSvg from '../../../../../assets/svg/wiki.svg';
import { HandySvg } from 'handy-svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store';
import { Author, Manufacturer, Publisher } from '../../../../../utils/types';

interface TitleApmProps {
  info: Author | Publisher | Manufacturer;
  imagePath: string;
  image: string;
}

const TitleApm: React.FC<TitleApmProps> = ({ info, imagePath, image }) => {
  const apmRoute = useSelector((state: RootState) => state.imagesRoutes.apm);

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
            {'surname' in info && info.surname}
          </h3>
          {'yearOfLife' in info && <h5 className={styles.nameDate}>{info.yearOfLife}</h5>}
          <p className={styles.nameDesc}>{info.description}</p>
          {'wikiLink' in info && (
            <Link to={info.wikiLink || ''} target="_blank">
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
