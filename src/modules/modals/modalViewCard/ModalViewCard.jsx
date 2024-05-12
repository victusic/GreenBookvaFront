import React, { useEffect, useState } from 'react';
import Modal from '../../../ui/modal/Modal';
import ModalButton from '../ui/ModalButton/ModalButton';

import { useDispatch, useSelector } from 'react-redux';
import styles from '../modalNone.module.scss';
import ModalTitle from '../ui/ModalTitle/ModalTitle';
import ModalCard from '../ui/ModalCard/ModalCard';
import { fetchUpdateCard } from '../../../actions/storeActions/profile';
import ModalWarning from '../ui/ModalWarning/ModalWarning';
import { refreshModalDeleteCartAction, refreshModalViewCartAction } from '../../../store/modalVisibleReducer';

const ModalViewCard = () => {
  const dispathProfile = useDispatch();
  const dispathModal = useDispatch();

  const visible = useSelector((state) => state.modalVisible.modalViewCartVisible);
  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
  }, [visible]);

  const cardId = useSelector((state) => state.profile.card);
  const cards = useSelector((state) => state.profile.cardsList);

  const card = cards.find((item) => item.id === cardId);

  const [cardCode, setCardCode] = useState('0000000000000000');
  const [cardMonthyear, setCardMonthyear] = useState('0000');

  const [visibleWarningCode, setVisibleWarningCode] = useState(false);
  const [visibleWarningDate, setVisibleWarningDate] = useState(false);

  useEffect(() => {
    if (cardId) {
      setCardCode(card.code);
      setCardMonthyear(card.monthyear);
    }
  }, [cardId]);

  function updateCard() {
    setVisibleWarningCode(false);
    setVisibleWarningDate(false);
    let warng = 0;
    if (cardCode.length !== 16) {
      setVisibleWarningCode(true);
      warng = 1;
    }
    if (cardMonthyear.length !== 4) {
      setVisibleWarningDate(true);
      warng = 1;
    }
    if (warng < 1) {
      dispathProfile(fetchUpdateCard(cardId, cardCode, cardMonthyear));
    }
  }

  function deleteCard() {
    dispathModal(refreshModalViewCartAction(false));
    dispathModal(refreshModalDeleteCartAction(true));
  }

  return (
    <div className={visibleModal}>
      <Modal>
        <ModalTitle>Карта</ModalTitle>
        <ModalWarning visibleWarning={visibleWarningCode}>Проверьте правильность номера карты</ModalWarning>
        <ModalWarning visibleWarning={visibleWarningDate}>
          Проверьте правильность срока действия карты
        </ModalWarning>
        <ModalCard
          number={cardCode}
          date={cardMonthyear}
          setCardCode={setCardCode}
          setCardMonthyear={setCardMonthyear}
        ></ModalCard>
        <ModalButton onClick={deleteCard} style={{ background: '#D3DFDA', marginBottom: '20px' }}>
          Удалить
        </ModalButton>
        <ModalButton onClick={updateCard}>Сохранить</ModalButton>
      </Modal>
    </div>
  );
};

export default ModalViewCard;
