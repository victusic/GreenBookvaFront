import React from 'react';

import styles from './promotionsStockElement.module.scss';

import moment from 'moment';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store';
import { ShortPromotion } from '../../../../../utils/types';

interface ProductPlateProps {
  resolvedPromotion: ShortPromotion;
}

const PromotionsStockElement: React.FC<ProductPlateProps> = ({ resolvedPromotion, ...props }) => {
  const bannerRoute = useSelector((state: RootState) => state.imagesRoutes.banner);

  const today = new Date();

  const duration = Number(resolvedPromotion.duration);

  const stateDate = (duration / 2) * 24 * 60 * 60 * 1000;
  const dateStart = today.getTime() - stateDate;
  const dateEnd = today.getTime() + stateDate;

  const formattedDateStart = moment(dateStart).format('DD.MM.YYYY');
  const formattedDateEnd = moment(dateEnd).format('DD.MM.YYYY');

  return (
    <Link className={styles.stockBlock} {...props} to={`/promotion/${resolvedPromotion.id}`}>
      <div className={styles.stockImg}>
        <img alt={resolvedPromotion.name} src={bannerRoute + resolvedPromotion.banner} />
      </div>
      <div className={styles.stockTextPlate}>
        <div className={styles.stockTextPlateLeft}>
          <p className={styles.stockTextDate}>
            {duration !== 0 ? formattedDateStart + ' - ' + formattedDateEnd : '∞'}
          </p>
          <h4 className={styles.stockTextTitle}>{resolvedPromotion.name}</h4>
        </div>
        <div className={styles.stockTextPlateRight}>
          <p className={styles.stockTextDescription}>{resolvedPromotion.shortDescription}</p>
        </div>
      </div>
    </Link>
  );
};

export default PromotionsStockElement;
