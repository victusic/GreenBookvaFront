import React, { useEffect, useState } from 'react';
import Modal from '../../../ui/modal/Modal';
import ModalButton from '../ui/ModalButton/ModalButton';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../modalNone.module.scss';
import ModalTitle from '../ui/ModalTitle/ModalTitle';
import ModalCard from '../ui/ModalCard/ModalCard';
import ModalWarning from '../ui/ModalWarning/ModalWarning';
import { fetchAddCard } from '../../../actions/storeActions/profile.ts';
import { RootState } from '../../../store/index.ts';
import { AnyAction } from 'redux';

const ModalAddCard: React.FC = () => {
  const dispatchProfile = useDispatch();

  const visible = useSelector((state: RootState) => state.modalVisible.modalAddCartVisible);
  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
  }, [visible]);

  const [cardCode, setCardCode] = useState('');
  const [cardMonthYear, setCardMonthYear] = useState('');

  const [visibleWarningCode, setVisibleWarningCode] = useState(false);
  const [visibleWarningDate, setVisibleWarningDate] = useState(false);

  const cardId = useSelector((state: RootState) => state.profile.card);
  const accountId = useSelector((state: RootState) => state.profile.id);

  useEffect(() => {
    setCardCode('');
    setCardMonthYear('');
  }, []);

  function addCard() {
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
      dispatchProfile(fetchAddCard(cardId, cardCode, cardMonthYear, accountId) as unknown as AnyAction);
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
          date={cardMonthYear}
          setCardCode={setCardCode}
          setCardMonthYear={setCardMonthYear}
        />
        <ModalButton onClick={addCard}>Сохранить</ModalButton>
      </Modal>
    </div>
  );
};

export default ModalAddCard;
