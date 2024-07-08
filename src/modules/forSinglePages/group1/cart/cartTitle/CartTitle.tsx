import React from 'react';

import styles from './cartTitle.module.scss';
import SingleTitle from '../../../../../ui/titles/singleTitle/SingleTitle';
import { useEffect } from 'react';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { cleanShoppingCart } from '../../../../../actions/requestActions/profile';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store';
import { useTextCount } from '../../../../../utils/hooks/useTextCount';

const CartTitle: React.FC = () => {
  const [productCountTitle, setProductCountTitle] = useState('');

  const shopProducts = useSelector((state: RootState) => state.profile.shopProducts);

  const countTitle = useTextCount('товар', shopProducts.length);
  useEffect(() => {
    setProductCountTitle(countTitle);
  }, [countTitle]);

  function cleanAllShoppingCart() {
    const id = Cookies.get('profileId');
    cleanShoppingCart(id);
    window.location.reload();
  }

  return (
    <div className={styles.titlePlateMax}>
      <div className={styles.titlePlate}>
        <SingleTitle>Корзина</SingleTitle>
        {shopProducts.length > 0 && (
          <p className={styles.countProducts}>{shopProducts.length + ' ' + productCountTitle}</p>
        )}
      </div>
      {shopProducts.length > 0 && (
        <h5 onClick={cleanAllShoppingCart} className={styles.cleanAll}>
          Очистить список
        </h5>
      )}
    </div>
  );
};

export default CartTitle;
