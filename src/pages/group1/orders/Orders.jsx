import React from 'react';
import Pad from '../../../ui/pad/Pad';
import { Suspense } from 'react';
import Loader from '../../../ui/loader/Loader';
import { Await, useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NoProfile from '../../../modules/FCONoData/noProfile/NoProfile';
import OrdersTitle from '../../../modules/forSinglePages/group1/orders/ordersTitle/OrdersTitle';
import OrdersNoOrder from '../../../modules/forSinglePages/group1/orders/ordersNoOrder/OrdersNoOrder';
import OrdersGridPlate from '../../../modules/forSinglePages/group1/orders/ordersGridPlate/OrdersGridPlate';
import { useState } from 'react';

const Orders = () => {
  const { orders } = useLoaderData();
  const profile = useSelector((state) => state.profile.id);

  const [typeSort, setTypeSort] = useState(0);

  return (
    <Pad>
      <Suspense fallback={<Loader />}>
        {profile ? (
          <Await resolve={orders}>
            {(orders) => (
              <>
                <OrdersTitle orders={orders} setTypeSort={setTypeSort} />
                <OrdersGridPlate orders={orders} typeSort={typeSort} />
                <OrdersNoOrder orders={orders} />
              </>
            )}
          </Await>
        ) : (
          <>
            <OrdersTitle orders={[]} />
            <NoProfile />
          </>
        )}
      </Suspense>
    </Pad>
  );
};

export default Orders;
