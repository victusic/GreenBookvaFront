import React, { useEffect, useState } from 'react';
import Modal from '../../../ui/modal/Modal';

import { useSelector } from 'react-redux';
import styles from '../modalNone.module.scss';
import ModalTitle from '../ui/ModalTitle/ModalTitle';
import ModalDescription from '../ui/ModalDescription/ModalDescription';

const ModalProductLimit = () => {
  const visible = useSelector((state) => state.modalVisible.modalProductLimitVisible);
  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
  }, [visible]);

  return (
    <div className={visibleModal}>
      <Modal>
        <ModalTitle>Ой</ModalTitle>
        <ModalDescription>
          Максимальное количество товаров в 1 заказе не превышать 12 шт. Добавьте товар в избранное, и после
          заказа верните в корзину
        </ModalDescription>
      </Modal>
    </div>
  );
};

export default ModalProductLimit;
