import React from 'react';

import styles from './productReview.module.scss';
import StarsPlate from '../starsPlate/StarsPlate';
import { useDispatch, useSelector } from 'react-redux';
import { refreshModalUpdateReviewAction } from '../../store/modalVisibleReducer';
import { refreshNowReviewAction } from '../../store/profileReducer';

const ProductReview = ({ review }) => {
  const profileId = useSelector((state) => state.profile.id);

  const dispatchModalVisible = useDispatch();
  const dispatchProfile = useDispatch();

  function updateReview() {
    if (review.account_id === profileId) {
      dispatchModalVisible(refreshModalUpdateReviewAction(true));
      dispatchProfile(refreshNowReviewAction(review.id));
    }
  }

  return (
    <div
      className={review.account_id === profileId ? styles.reviewMyPlate : styles.reviewPlate}
      onClick={updateReview}
    >
      <h6 className={styles.reviewName}>{review.user_name}</h6>
      <h5 className={styles.reviewHeader}>{review.header}</h5>
      <p className={styles.reviewText}>{review.review_text}</p>
      <StarsPlate rate={review.evaluation} />
    </div>
  );
};

export default ProductReview;
