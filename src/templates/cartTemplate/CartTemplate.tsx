import React from 'react';

import styles from './cartTemplate.module.scss';
import CartTitle from '../../modules/forSinglePages/group1/cart/cartTitle/CartTitle';
import { useSelector } from 'react-redux';
import NoProfile from '../../modules/FCONoData/noProfile/NoProfile';
import { Await, useLoaderData } from 'react-router-dom';
import CartGridPlate from '../../modules/forSinglePages/group1/cart/cartGridPlate/CartGridPlate';
import CartRightPlate from '../../modules/forSinglePages/group1/cart/cartRightPlate/CartRightPlate';
import { useState } from 'react';
import CartNoProduct from '../../modules/forSinglePages/group1/cart/cartNoProduct/CartNoProduct';
import { RootState } from '../../store';
import { Product } from '../../utils/types';

const CartTemplate: React.FC = () => {
  const products: Product[] = useLoaderData() as Product[];

  const profile = useSelector((state: RootState) => state.profile.id);

  const [firstPriceProducts, setFirstPriceProducts] = useState(0);
  const [discountPriceProducts, setDiscountPriceProducts] = useState(0);

  return (
    <div className={styles.cartMainPlate}>
      {profile ? (
        <Await resolve={products}>
          {(products) => (
            <>
              <div className={styles.cartTwoZones}>
                <div className={styles.cartLeftZone}>
                  <CartTitle />
                  <CartGridPlate
                    products={products}
                    setFirstPriceProducts={setFirstPriceProducts}
                    firstPriceProducts={firstPriceProducts}
                    setDiscountPriceProducts={setDiscountPriceProducts}
                    discountPriceProducts={discountPriceProducts}
                  />
                </div>
                <CartRightPlate
                  firstPriceProducts={firstPriceProducts}
                  discountPriceProducts={discountPriceProducts}
                />
              </div>
              <CartNoProduct products={products} />
            </>
          )}
        </Await>
      ) : (
        <>
          <CartTitle
          // products={[]}
          />
          <NoProfile />
        </>
      )}
    </div>
  );
};

export default CartTemplate;
