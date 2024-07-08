import React, { useEffect, useState } from 'react';

import styles from './favoritesNoProduct.module.scss';
import { refreshHeadersCatalogAction } from '../../../../../store/headerElementsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../../../../utils/types';
import { RootState } from '../../../../../store';

interface FavoritesNoProductProps {
  products: Product[];
}

const FavoritesNoProduct: React.FC<FavoritesNoProductProps> = ({ products }) => {
  const dispatchCatalogVisible = useDispatch();
  const catalogVisible = useSelector((state: RootState) => state.headersElements.catalog);

  const delFavorite = useSelector((state: RootState) => state.profile.delFavorite);

  const [finalProducts, setFinalProducts] = useState(products);

  useEffect(() => {
    if (delFavorite) {
      setFinalProducts(finalProducts.filter((product) => product.id !== Number(delFavorite)));
    }
  }, [delFavorite]);

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

export default FavoritesNoProduct;
