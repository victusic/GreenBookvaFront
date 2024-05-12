import React, { useEffect, useState } from 'react';
import Modal from '../../../ui/modal/Modal';

import { useSelector } from 'react-redux';
import styles from '../modalNone.module.scss';
import ModalTitle from '../ui/ModalTitle/ModalTitle';
import ModalDescription from '../ui/ModalDescription/ModalDescription';
import { getOrder } from '../../../actions/requestActions/profile';
import ModalProductCart from '../ui/ModalProductCart/ModalProductCart';

const ModalOrder = () => {
  const visible = useSelector((state) => state.modalVisible.modalOrderVisible);

  const order_number = useSelector((state) => state.profile.order_number);
  const order_code = useSelector((state) => state.profile.order_code);

  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  const [products, setProducts] = useState([]);

  const profileId = useSelector((state) => state.profile.id);

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
  }, [visible]);

  useEffect(() => {
    if (order_number) {
      getOrder(order_number, profileId).then((data) => {
        setProducts(data);
      });
    }
  }, [visibleModal]);

  return (
    <div className={visibleModal}>
      <Modal>
        <ModalTitle>{'Заказ: ' + order_code}</ModalTitle>
        <ModalDescription>Товары:</ModalDescription>
        {products.map((product, index) => (
          <ModalProductCart product={product} key={index} />
        ))}
      </Modal>
    </div>
  );
};

export default ModalOrder;
