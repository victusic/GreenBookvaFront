import React, { useState } from 'react';

import styles from './orderPlate.module.scss';
import { useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { refreshOrderCodeAction, refreshOrderNumberAction } from '../../../../../store/profileReducer';
import { refreshModalOrderAction } from '../../../../../store/modalVisibleReducer';
import { Link } from 'react-router-dom';
import { RootState } from '../../../../../store';
import { CustomOrder } from '../../../../../utils/types';
import { useTextCount } from '../../../../../utils/hooks/useTextCount';

interface OrderPlateProps {
  order: CustomOrder;
}

const OrderPlate: React.FC<OrderPlateProps> = ({ order }) => {
  const [productCountTitle, setProductCountTitle] = useState('');

  const formattedDate = moment(order.date).format('DD.MM.YYYY');

  const productRoute = useSelector((state: RootState) => state.imagesRoutes.product);

  const profileId = useSelector((state: RootState) => state.profile.id);

  //количество товаров

  const countProducts = order.products.length;

  const countTitle = useTextCount('товар', countProducts);

  useEffect(() => {
    setProductCountTitle(countTitle);
  }, [order]);

  const dispatchProfile = useDispatch();
  const dispatchModalVisible = useDispatch();

  function getorder() {
    dispatchProfile(refreshOrderNumberAction(String(order.orderCode)));
    dispatchProfile(refreshOrderCodeAction(Date.parse(order.date) + profileId + order.orderCode));
    dispatchModalVisible(refreshModalOrderAction(true));
  }

  return (
    <div className={styles.orderPlate} onClick={getorder}>
      <div className={styles.orderPlateTitle}>
        <div className={styles.orderPlateTitleCount}>
          <p className={styles.orderCode}>
            {'Код заказа: ' + Date.parse(order.date) + profileId + order.orderCode}
          </p>
          <p className={styles.orderCountProducts}>{order.products.length + ' ' + productCountTitle}</p>
        </div>
        <p className={styles.orderPrice}>{order.price + ' $'}</p>
      </div>

      <div className={styles.orderImgPlate}>
        {order.products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <img
              className={styles.orderImg}
              src={productRoute + product.image}
              alt={`Продукт заказа №${Date.parse(order.date) + profileId + order.orderCode}`}
            />
          </Link>
        ))}
      </div>
      <p className={styles.orderDate}>{formattedDate}</p>
    </div>
  );
};

export default OrderPlate;
