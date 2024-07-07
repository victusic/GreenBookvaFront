import React, { useEffect, useState } from 'react';
import Modal from '../../../ui/modal/Modal';

import { useSelector } from 'react-redux';
import styles from '../modalNone.module.scss';
import ModalTitle from '../ui/ModalTitle/ModalTitle';
import ModalDescription from '../ui/ModalDescription/ModalDescription';
import { getOrder } from '../../../actions/requestActions/profile';
import ModalProductCart from '../ui/ModalProductCart/ModalProductCart';
import { RootState } from '../../../store';
import { OrderProduct } from '../../../utils/types';
import { AnyResponse } from '../../../actions/types/types';
import { OrderProductDTO } from '../../../actions/types/requestActions';

const ModalOrder: React.FC = () => {
  const visible = useSelector((state: RootState) => state.modalVisible.modalOrderVisible);

  const orderNumber = useSelector((state: RootState) => state.profile.orderNumber);
  const order_code = useSelector((state: RootState) => state.profile.orderCode);

  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  const [products, setProducts] = useState<OrderProduct[]>([]);

  const profileId = useSelector((state: RootState) => state.profile.id);

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
  }, [visible]);

  useEffect(() => {
    if (orderNumber) {
      getOrder(Number(orderNumber), Number(profileId)).then((response: AnyResponse<OrderProductDTO[]>) => {
        response.status
          ? setProducts(response.data)
          : console.error(`Error ${response.code}: Failed to fetch products`);
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
