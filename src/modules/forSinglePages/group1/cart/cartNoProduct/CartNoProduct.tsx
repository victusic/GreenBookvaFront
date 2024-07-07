import React, { useEffect, useState } from 'react';

import styles from './cartNoProduct.module.scss';
import { refreshHeadersCatalogAction } from '../../../../../store/headerElementsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store';
import { Product } from '../../../../../utils/types';

interface CartNoProductProps {
  products: Product[];
}

const CartNoProduct: React.FC<CartNoProductProps> = ({ products }) => {
  const dispatchCatalogVisible = useDispatch();
  const catalogVisible = useSelector((state: RootState) => state.headersElements.catalog);

  const [finalProducts, setFinalProducts] = useState(products);

  const delShoppingCart = useSelector((state: RootState) => state.profile.delShoppingCart);

  useEffect(() => {
    if (delShoppingCart) {
      setFinalProducts(finalProducts.filter((product) => product.id !== Number(delShoppingCart)));
    }
  }, [delShoppingCart]);

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
