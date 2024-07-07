import React from 'react';

import styles from './recommendationBanner.module.scss';
import { Await, Link, useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store';
import { RecommendationBanner as RecommendationBannerType } from '../../../../../utils/types';

const RecommendationBanner: React.FC = () => {
  const recommendationBanner: RecommendationBannerType[] = useLoaderData() as RecommendationBannerType[];

  const recommendationRoute = useSelector((state: RootState) => state.imagesRoutes.recommendation);

  return (
    <Await resolve={recommendationBanner}>
      {(resolvedBanner) => (
        <Link to={`/product/${resolvedBanner[0].productId}`} className={styles.linkStyle}>
          <img
            className={styles.recommendationBanner}
            src={recommendationRoute + resolvedBanner[0].image}
            alt="Рекомендуемая книга"
          ></img>
        </Link>
      )}
    </Await>
  );
};

export default RecommendationBanner;
