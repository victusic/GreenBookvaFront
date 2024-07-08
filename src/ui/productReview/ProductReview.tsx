import React from 'react';

import styles from './productReview.module.scss';
import StarsPlate from '../starsPlate/StarsPlate';
import { useDispatch, useSelector } from 'react-redux';
import { refreshModalUpdateReviewAction } from '../../store/modalVisibleReducer';
import { refreshNowReviewAction } from '../../store/profileReducer';
import { RootState } from '../../store';
import { Review } from '../../utils/types';

interface ProductReviewProps {
  review: Review;
}

const ProductReview: React.FC<ProductReviewProps> = ({ review }) => {
  const profileId = useSelector((state: RootState) => state.profile.id);

  const dispatchModalVisible = useDispatch();
  const dispatchProfile = useDispatch();

  function updateReview() {
    if (review.accountId === Number(profileId)) {
      dispatchModalVisible(refreshModalUpdateReviewAction(true));
      dispatchProfile(refreshNowReviewAction(String(review.id)));
    }
  }

  return (
    <div
      className={review.accountId === Number(profileId) ? styles.reviewMyPlate : styles.reviewPlate}
      onClick={updateReview}
    >
      <h6 className={styles.reviewName}>{review.userName}</h6>
      <h5 className={styles.reviewHeader}>{review.header}</h5>
      <p className={styles.reviewText}>{review.reviewText}</p>
      <StarsPlate rate={review.evaluation} />
    </div>
  );
};

export default ProductReview;
