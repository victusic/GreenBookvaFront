import React, { useEffect, useState } from 'react';
import Modal from '../../../ui/modal/Modal';
import ModalButton from '../ui/ModalButton/ModalButton';

import { useSelector } from 'react-redux';
import styles from '../modalNone.module.scss';
import ModalTitle from '../ui/ModalTitle/ModalTitle';
import ModalInInput from '../ui/ModalInInput/ModalInInput';
import ModalTextArea from '../ui/ModalTextArea/ModalTextArea';
import ModalStarsPlate from '../ui/ModalStarsPlate/ModalStarsPlate';
import ModalWarning from '../ui/ModalWarning/ModalWarning';
import { addReview } from '../../../actions/requestActions/review';
import Form from '../ui/Form/Form';
import { RootState } from '../../../store';

const ModalAddReview: React.FC = () => {
  const visible = useSelector((state: RootState) => state.modalVisible.modalAddReviewVisible);
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

  const productId = useSelector((state: RootState) => state.profile.nowProduct);
  const profileId = useSelector((state: RootState) => state.profile.id);

  function addingReview(e) {
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
      addReview(Number(productId), Number(profileId), header, review, rating);
      window.location.reload();
    }
  }

  return (
    <div className={visibleModal}>
      <Modal>
        <ModalTitle>Добавить отзыв</ModalTitle>
        <Form onSubmit={addingReview}>
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
          <ModalButton>Опубликовать</ModalButton>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalAddReview;
