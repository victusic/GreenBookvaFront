import React from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import styles from './promotionPlate.module.scss';
import SingleTitle from '../../../../../ui/titles/singleTitle/SingleTitle';
import PromotionDate from '../promotionDate/PromotionDate';
import ProductLine from '../../../../products/productLine/ProductLine';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store';
import { FullPromotion, Product } from '../../../../../utils/types';

const PromotionPlate: React.FC = () => {
  const promotion: FullPromotion[] = useLoaderData() as FullPromotion[];
  const promotionProduct: Product[] = useLoaderData() as Product[];
  const anotherProduct: Product[] = useLoaderData() as Product[];
  const noPromotionProduct: Product[] = useLoaderData() as Product[];

  const bannerRoute = useSelector((state: RootState) => state.imagesRoutes.banner);

  return (
    <>
      <Await resolve={promotion}>
        {(resolvedPromotion: FullPromotion) => (
          <>
            <SingleTitle>{resolvedPromotion[0].name}</SingleTitle>
            <img
              className={styles.promotionImage}
              alt={resolvedPromotion[0].name}
              src={bannerRoute + resolvedPromotion[0].banner}
            />
            <div className={styles.promotionsDescription}>
              <PromotionDate
                className={styles.promotionsDescriptionDate}
                date={resolvedPromotion[0].duration}
              />
              <p className={styles.promotionsDescriptionText}>{resolvedPromotion[0].full_description}</p>
            </div>
          </>
        )}
      </Await>
      <ProductLine products={promotionProduct}>Товары по акции</ProductLine>
      <ProductLine products={anotherProduct}>Похожие товары</ProductLine>
      <ProductLine products={noPromotionProduct}>Другие товары по акциям</ProductLine>
    </>
  );
};

export default PromotionPlate;
