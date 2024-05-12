import React from 'react';

import styles from './ordersTitle.module.scss';
import SingleTitle from '../../../../../ui/titles/singleTitle/SingleTitle';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { useTextCount } from '../../../../../hooks/useTextCount';
import Select from '../../../../../ui/select/Select';

const OrdersTitle = ({ orders, setTypeSort }) => {
  const countOrders = useSelector((state) => state.profile.orders);

  const sortOrdersInList = useSelector((state) => state.sort.sortOrders);

  const [orderCountTitle, setOrderCountTitle] = useState('');

  const [ordersList, setOrdersList] = useState();

  const countTitle = useTextCount('заказ', countOrders);

  useEffect(() => {
    setOrderCountTitle(countTitle);
  }, [countOrders]);

  return (
    <div className={styles.titlePlate}>
      <div className={styles.titlePlate}>
        <SingleTitle>Заказы</SingleTitle>
        {orders.length > 0 && <p className={styles.countOrders}>{countOrders + ' ' + orderCountTitle}</p>}
      </div>
      {orders.length > 1 && (
        <div className={styles.margin}>
          <Select options={sortOrdersInList} onChange={(e) => setTypeSort(e.target.value)} />
        </div>
      )}
    </div>
  );
};

export default OrdersTitle;
