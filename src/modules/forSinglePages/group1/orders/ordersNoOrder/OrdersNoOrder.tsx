import React from 'react';

import styles from './ordersNoOrder.module.scss';
import { refreshHeadersCatalogAction } from '../../../../../store/headerElementsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store';
import { Order } from '../../../../../utils/types';

interface OrdersNoOrderProps {
  orders: Order[];
}

const OrdersNoOrder: React.FC<OrdersNoOrderProps> = ({ orders }) => {
  const dispatchCatalogVisible = useDispatch();
  const catalogVisible = useSelector((state: RootState) => state.headersElements.catalog);

  return (
    <>
      {orders.length < 1 && (
        <div className={styles.plate404}>
          <div>
            <p className={styles.titleDesc}>{'Здесь пока ничего нет'}</p>
            <p className={styles.titleDescMin}>
              {'Воспользуйтесь поиском или '}
              <span
                onClick={() => dispatchCatalogVisible(refreshHeadersCatalogAction(!catalogVisible))}
                className={styles.openCatalog}
              >
                откройте каталог,
              </span>
              {' чтобы найти интересные товары'}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default OrdersNoOrder;
