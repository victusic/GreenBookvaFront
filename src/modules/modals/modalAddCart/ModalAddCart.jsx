import React, { useEffect, useState } from 'react';
import Modal from '../../../ui/modal/Modal';
import ModalButton from '../ui/ModalButton/ModalButton';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../modalNone.module.scss';
import ModalTitle from '../ui/ModalTitle/ModalTitle';
import ModalCard from '../ui/ModalCard/ModalCard';
import ModalWarning from '../ui/ModalWarning/ModalWarning';
import { fetchAddCard } from '../../../actions/storeActions/profile.js';

const ModalAddCard = () => {
  const dispathProfile = useDispatch();

  const visible = useSelector((state) => state.modalVisible.modalAddCartVisible);
  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
  }, [visible]);

  const [cardCode, setCardCode] = useState('');
  const [cardMonthyear, setCardMonthyear] = useState('');

  const [visibleWarningCode, setVisibleWarningCode] = useState(false);
  const [visibleWarningDate, setVisibleWarningDate] = useState(false);

  const cardId = useSelector((state) => state.profile.card);
  const account_id = useSelector((state) => state.profile.id);

  useEffect(() => {
    setCardCode('');
    setCardMonthyear('');
  }, []);

  function addCard() {
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
      dispathProfile(fetchAddCard(cardId, cardCode, cardMonthyear, account_id));
    }
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
        <ModalButton onClick={addCard}>Сохранить</ModalButton>
      </Modal>
    </div>
  );
};

export default ModalAddCard;
