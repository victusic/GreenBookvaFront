import React from 'react';
import Pad from '../../../ui/pad/Pad';
import { Suspense } from 'react';
import CartTemplate from '../../../templates/cartTemplate/CartTemplate';
import Loader from '../../../ui/loader/Loader';

const Cart: React.FC = () => {
  return (
    <Pad>
      <Suspense fallback={<Loader />}>
        <CartTemplate />
      </Suspense>
    </Pad>
  );
};

export default Cart;
