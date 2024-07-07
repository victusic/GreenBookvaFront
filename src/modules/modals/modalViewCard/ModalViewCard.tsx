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
import { RootState } from '../../../store';
import { AnyAction } from 'redux';

const ModalViewCard: React.FC = () => {
  const dispatchProfile = useDispatch();
  const dispatchModal = useDispatch();

  const visible = useSelector((state: RootState) => state.modalVisible.modalViewCartVisible);
  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
  }, [visible]);

  const cardId = useSelector((state: RootState) => state.profile.card);
  const cards = useSelector((state: RootState) => state.profile.cardsList);

  const card = cards.find((item) => item.id === Number(cardId));

  const [cardCode, setCardCode] = useState('0000000000000000');
  const [cardMonthYear, setCardMonthYear] = useState('0000');

  const [visibleWarningCode, setVisibleWarningCode] = useState(false);
  const [visibleWarningDate, setVisibleWarningDate] = useState(false);

  useEffect(() => {
    if (cardId) {
      setCardCode(card?.code || '');
      setCardMonthYear(card?.monthYear || '');
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
    if (cardMonthYear.length !== 4) {
      setVisibleWarningDate(true);
      warng = 1;
    }
    if (warng < 1) {
      dispatchProfile(fetchUpdateCard(cardId, cardCode, cardMonthYear) as unknown as AnyAction);
    }
  }

  function deleteCard() {
    dispatchModal(refreshModalViewCartAction(false));
    dispatchModal(refreshModalDeleteCartAction(true));
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
          date={cardMonthYear}
          setCardCode={setCardCode}
          setCardMonthYear={setCardMonthYear}
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
