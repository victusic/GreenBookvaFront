import React, { useEffect, useState } from 'react';

import styles from './ordersGridPlate.module.scss';
import OrderPlate from '../orderPlate/OrderPlate';

const OrdersGridPlate = ({ orders, typeSort }) => {
  const [finalOrders, setFinalOrders] = useState([]);

  useEffect(() => {
    let workOrders = [];

    orders.forEach((order) => {
      const existingOrder = workOrders.find((item) => item.orderCode === order.order_code);

      if (existingOrder) {
        existingOrder.products.push({ image: order.product_image, id: order.product_id });
        existingOrder.price += Math.round(Number(order.price));
      } else {
        workOrders.push({
          orderCode: order.order_code,
          date: order.order_date,
          products: [{ image: order.product_image, id: order.product_id }],
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
