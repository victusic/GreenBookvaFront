import React, { MutableRefObject } from 'react';

import styles from './productReviewPlate.module.scss';
import ProductReview from '../../../../../ui/productReview/ProductReview';
import { useState } from 'react';
import { useEffect } from 'react';
import BuyButton from '../../../../../ui/buttons/buyButton/BuyButton';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import {
  refreshModalAddReviewAction,
  refreshModalSIgnVisibleAction,
} from '../../../../../store/modalVisibleReducer';
import { Review } from '../../../../../utils/types';
import { RootState } from '../../../../../store';

interface ProductReviewPlateProps {
  reviews: Review[];
  scrollRef: MutableRefObject<HTMLDivElement | null>;
}

const ProductReviewPlate: React.FC<ProductReviewPlateProps> = ({ reviews, scrollRef }) => {
  const dispatchModalVisible = useDispatch();

  const [sortReviews, setSortReviews] = useState<Review[]>([]);
  const [fullReviews, setFullReviews] = useState(true);

  const [visibleAddReview, setVisibleAddReview] = useState(true);

  const profileId = useSelector((state: RootState) => state.profile.id);

  useEffect(() => {
    if (reviews.length < 4) {
      setSortReviews(reviews);
    } else {
      setFullReviews(false);
      const reviewsState = reviews.slice(0, 3);
      setSortReviews(reviewsState);
    }
    reviews.map((element) => {
      {
        element.accountId === Number(profileId) && setVisibleAddReview(false);
      }
    });
  }, [reviews]);

  useEffect(() => {
    if (fullReviews) {
      setSortReviews(reviews);
    } else {
      const reviewsState = reviews.slice(0, 3);
      setSortReviews(reviewsState);
    }
  }, [fullReviews]);

  function addReview() {
    const id = Cookies.get('profileId');
    {
      id
        ? dispatchModalVisible(refreshModalAddReviewAction(true))
        : dispatchModalVisible(refreshModalSIgnVisibleAction(true));
    }
  }

  return (
    <div className={styles.plate} ref={scrollRef}>
      <div className={styles.reviewTitlePlate}>
        <h2 className={styles.reviewTitle}>Отзывы</h2>
        {visibleAddReview && (
          <div className={styles.buttonTitle}>
            <BuyButton onClick={addReview}>Написать отзыв</BuyButton>
          </div>
        )}
      </div>
      {sortReviews.map((review) => (
        <ProductReview review={review} key={review.id} />
      ))}
      {!fullReviews && (
        <h5 className={styles.moreReviews} onClick={() => setFullReviews(true)}>
          Показать больше отзывов
        </h5>
      )}
      {fullReviews && reviews.length > 3 && (
        <h5 className={styles.moreReviews} onClick={() => setFullReviews(false)}>
          Скрыть отзывы
        </h5>
      )}
      {reviews.length < 1 && (
        <>
          <h3 className={styles.noReviews3}>На данный товар пока нет отзывов</h3>
          <h5 className={styles.noReviews6}>Поделитесь своим мнением первым</h5>
        </>
      )}
    </div>
  );
};

export default ProductReviewPlate;
