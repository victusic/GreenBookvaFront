import React, { useEffect, useState } from 'react';
import Modal from '../../../ui/modal/Modal';
import ModalButton from '../ui/ModalButton/ModalButton';

import { useSelector } from 'react-redux';
import styles from '../modalNone.module.scss';
import ModalTitle from '../ui/ModalTitle/ModalTitle';
import ModalDescription from '../ui/ModalDescription/ModalDescription';
import { delReview } from '../../../actions/requestActions/review';
import { RootState } from '../../../store';

const ModalDeleteReview: React.FC = () => {
  const visible = useSelector((state: RootState) => state.modalVisible.modalDeleteReviewVisible);
  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
  }, [visible]);

  const reviewId = useSelector((state: RootState) => state.profile.nowReview);

  function deleteReview() {
    delReview(Number(reviewId));
    window.location.reload();
  }

  return (
    <div className={visibleModal}>
      <Modal>
        <ModalTitle>Удаление отзыва</ModalTitle>
        <ModalDescription>Вы действительно хотите удалить ваш отзыв?</ModalDescription>
        <ModalButton onClick={deleteReview}>Удалить</ModalButton>
      </Modal>
    </div>
  );
};

export default ModalDeleteReview;
