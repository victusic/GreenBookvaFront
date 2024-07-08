import React, { Dispatch, SetStateAction } from 'react';

import styles from './ordersTitle.module.scss';
import SingleTitle from '../../../../../ui/titles/singleTitle/SingleTitle';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { Select } from '../../../../../ui/select/Select';
import { Order } from '../../../../../utils/types';
import { RootState } from '../../../../../store';
import { useTextCount } from '../../../../../utils/hooks/useTextCount';

interface OrdersNoOrderProps {
  orders: Order[];
  setTypeSort?: Dispatch<SetStateAction<number>>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const OrdersTitle: React.FC<OrdersNoOrderProps> = ({ orders, setTypeSort = () => {} }) => {
  const countOrders = useSelector((state: RootState) => state.profile.orders);

  const sortOrdersInList = useSelector((state: RootState) => state.sort.sortOrders);

  const [orderCountTitle, setOrderCountTitle] = useState('');

  const countTitle = useTextCount('заказ', Number(countOrders));

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
          <Select options={sortOrdersInList} onChange={(e) => setTypeSort(Number(e.target.value))} />
        </div>
      )}
    </div>
  );
};

export default OrdersTitle;
