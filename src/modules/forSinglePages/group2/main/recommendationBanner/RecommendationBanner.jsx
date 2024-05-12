import React from 'react';

import styles from './recommendationBanner.module.scss';
import { Await, Link, useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RecommendationBanner = () => {
  const { recommandationBanner } = useLoaderData();

  const recommendationRoute = useSelector((state) => state.imagesRoutes.recommendation);

  return (
    <Await resolve={recommandationBanner}>
      {(resolvedBanner) => (
        <Link to={`/product/${resolvedBanner[0].product_id}`} className={styles.linkStyle}>
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
