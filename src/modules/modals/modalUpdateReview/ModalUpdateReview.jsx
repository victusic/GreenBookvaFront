import React, { useEffect, useState } from 'react';
import Modal from '../../../ui/modal/Modal';
import ModalButton from '../ui/ModalButton/ModalButton';

import { useDispatch, useSelector } from 'react-redux';
import styles from '../modalNone.module.scss';
import ModalTitle from '../ui/ModalTitle/ModalTitle';
import ModalInInput from '../ui/ModalInInput/ModalInInput';
import ModalTextArea from '../ui/ModalTextArea/ModalTextArea';
import ModalStarsPlate from '../ui/ModalStarsPlate/ModalStarsPlate';
import ModalWarning from '../ui/ModalWarning/ModalWarning';
import { addReview, getReview, updateReview } from '../../../actions/requestActions/review';
import {
  refreshModalDeleteReviewAction,
  refreshModalUpdateReviewAction,
} from '../../../store/modalVisibleReducer';
import Form from '../ui/Form/Form';

const ModalUpdateReview = () => {
  const visible = useSelector((state) => state.modalVisible.modalUpdateReviewVisible);
  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  const [visibleWarningHeader, setVisibleWarningHeader] = useState(false);
  const [visibleWarningReview, setVisibleWarningReview] = useState(false);
  const [visibleWarningRating, setVisibleWarningRating] = useState(false);

  const [rating, setRating] = useState(0);
  const [header, setHeader] = useState('');
  const [review, setReview] = useState('');

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
  }, [visible]);

  const reviewId = useSelector((state) => state.profile.now_review);

  const dispatchModalVisible = useDispatch();

  useEffect(() => {
    if (reviewId) {
      getReview(reviewId).then((data) => {
        setRating(data[0].evaluation);
        setHeader(data[0].header);
        setReview(data[0].review_text);
      });
    }
  }, [reviewId]);

  function patchReview(e) {
    e.preventDefault();
    setVisibleWarningHeader(false);
    setVisibleWarningReview(false);
    setVisibleWarningRating(false);
    let warng = 0;
    if (header.length < 5 || header.length > 121) {
      setVisibleWarningHeader(true);
      warng = 1;
    }
    if (review.length < 5 || review.length > 481) {
      setVisibleWarningReview(true);
      warng = 1;
    }
    if (rating < 1) {
      setVisibleWarningRating(true);
      warng = 1;
    }
    if (warng < 1) {
      updateReview(reviewId, header, review, rating);
      window.location.reload();
    }
  }

  function delReview(e) {
    e.preventDefault();
    dispatchModalVisible(refreshModalUpdateReviewAction(false));
    dispatchModalVisible(refreshModalDeleteReviewAction(true));
  }

  return (
    <div className={visibleModal}>
      <Modal>
        <Form onSubmit={patchReview}>
          <ModalTitle>Редактировать отзыв</ModalTitle>
          <ModalInInput>Заголовок</ModalInInput>
          <ModalWarning visibleWarning={visibleWarningHeader}>
            Длина заголовка может быть от 5 до 120 символов
          </ModalWarning>
          <ModalTextArea
            height={85}
            placeholder="Титульное представление о книге"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
          />
          <ModalInInput>Отзыв</ModalInInput>
          <ModalWarning visibleWarning={visibleWarningReview}>
            Длина отзыва может быть от 5 до 480 символов
          </ModalWarning>
          <ModalTextArea
            height={240}
            placeholder="Описание впечатлений, эмоций ... "
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <ModalInInput>Оценка</ModalInInput>
          <ModalWarning visibleWarning={visibleWarningRating}>
            Не забудьте поставить оценку продукту
          </ModalWarning>
          <ModalStarsPlate rate={rating} setRating={setRating} />
          <ModalButton
            type="button"
            onClick={delReview}
            style={{ background: '#D3DFDA', marginBottom: '20px' }}
          >
            Удалить
          </ModalButton>
          <ModalButton>Сохранить</ModalButton>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalUpdateReview;
