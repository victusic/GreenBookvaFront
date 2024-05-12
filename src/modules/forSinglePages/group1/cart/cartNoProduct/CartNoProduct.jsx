import React, { useEffect, useState } from 'react';

import styles from './cartNoProduct.module.scss';
import { refreshHeadersCatalogAction } from '../../../../../store/headerElementsReducer';
import { useDispatch, useSelector } from 'react-redux';

const CartNoProduct = ({ products }) => {
  const dispatchCatalogVisible = useDispatch();
  const catalogVisible = useSelector((state) => state.headersElements.catalog);

  const [finalProducts, setFinalProducts] = useState(products);

  const delShopping_cart = useSelector((state) => state.profile.delShopping_cart);

  useEffect(() => {
    if (delShopping_cart) {
      setFinalProducts(finalProducts.filter((product) => product.id !== delShopping_cart));
    }
  }, [delShopping_cart]);

  return (
    <>
      {finalProducts.length < 1 && (
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

export default CartNoProduct;
