import React, { useEffect, useState } from 'react';

import styles from './ordersGridPlate.module.scss';
import OrderPlate from '../orderPlate/OrderPlate';
import { CustomOrder, Order } from '../../../../../utils/types';

interface FavoritesTitleProps {
  orders: Order[];
  typeSort: number;
}

const OrdersGridPlate: React.FC<FavoritesTitleProps> = ({ orders, typeSort }) => {
  const [finalOrders, setFinalOrders] = useState<CustomOrder[]>([]);

  useEffect(() => {
    const workOrders: CustomOrder[] = [];

    orders.map((order: Order) => {
      const existingOrder = workOrders.find((item) => item.orderCode === order.orderCode);

      if (existingOrder) {
        existingOrder.products.push({ image: order.productImage, id: order.productId });
        existingOrder.price += Math.round(Number(order.price));
      } else {
        workOrders.push({
          orderCode: order.orderCode,
          date: order.orderDate,
          products: [{ image: order.productImage, id: order.productId }],
          price: Number(order.price),
        });
      }
    });

    switch (Number(typeSort)) {
      case 1:
        workOrders.reverse();
        break;
      case 2:
        workOrders.sort(function (a, b) {
          if (a.price == b.price) return a.price - b.price;
          else return a.price - b.price;
        });
        break;
      case 3:
        workOrders.sort(function (a, b) {
          if (a.price == b.price) return a.price - b.price;
          else return a.price - b.price;
        });
        workOrders.reverse();
        break;
      default:
        break;
    }

    setFinalOrders(workOrders);
  }, [orders, typeSort]);

  return (
    <div className={styles.orderPlate}>
      {finalOrders.map((order, index) => (
        <OrderPlate order={order} key={index} />
      ))}
      {finalOrders.length > 0 && (
        <h4 className={styles.bottomText}>
          В связи с тем, что конечная сумма оплаты заказа конвертируется в долларах, стоимость заказа в
          истории указывается в этой же валюте для корректного отображения цены, вне зависимости от текущих
          курсов других валют
        </h4>
      )}
    </div>
  );
};

export default OrdersGridPlate;
