import React, { useEffect, useState } from 'react';
import Modal from '../../../ui/modal/Modal';
import ModalButton from '../ui/ModalButton/ModalButton';

import { useDispatch, useSelector } from 'react-redux';
import styles from '../modalNone.module.scss';
import ModalTitle from '../ui/ModalTitle/ModalTitle';
import ModalDescription from '../ui/ModalDescription/ModalDescription';
import { fetchDeleteCard } from '../../../actions/storeActions/profile';

const ModalDeleteCard = () => {
  const visible = useSelector((state) => state.modalVisible.modalDeleteCartVisible);
  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  const [cardsN, setCardsN] = useState('');

  const cardId = useSelector((state) => state.profile.card);
  const cards = useSelector((state) => state.profile.cardsList);

  useEffect(() => {
    if (cardId) {
      const card = cards.find((item) => item.id === cardId);
      const cardNumber = card.code.slice(-4);
      setCardsN(cardNumber);
    }
  }, [cardId]);

  const dispatchProfile = useDispatch();

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
  }, [visible]);

  function deleteCard() {
    dispatchProfile(fetchDeleteCard(cardId));
  }

  return (
    <div className={visibleModal}>
      <Modal>
        <ModalTitle>Удаление карты</ModalTitle>
        <ModalDescription>
          Вы действительно хотите удалить карту заканчивающаяся на номер {cardsN}?
        </ModalDescription>
        <ModalButton onClick={deleteCard}>Удалить</ModalButton>
      </Modal>
    </div>
  );
};

export default ModalDeleteCard;
