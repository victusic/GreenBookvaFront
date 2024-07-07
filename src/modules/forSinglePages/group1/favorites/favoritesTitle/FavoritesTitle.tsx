import React from 'react';

import styles from './favoritesTitle.module.scss';
import SingleTitle from '../../../../../ui/titles/singleTitle/SingleTitle';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { cleanFavorites } from '../../../../../actions/requestActions/profile';
import { Product } from '../../../../../utils/types';
import { RootState } from '../../../../../store';
import { useTextCount } from '../../../../../utils/hooks/useTextCount';

interface FavoritesTitleProps {
  products: Product[];
}

const FavoritesTitle: React.FC<FavoritesTitleProps> = ({ products }) => {
  const favorites = useSelector((state: RootState) => state.profile.favorites);

  const [productCountTitle, setProductCountTitle] = useState('');

  const countTitle = useTextCount('товар', favorites);
  useEffect(() => {
    setProductCountTitle(countTitle);
  }, [favorites]);

  function cleanAllFavorites() {
    const id = Cookies.get('profileId');
    cleanFavorites(id);
    window.location.reload();
  }

  return (
    <div className={styles.titlePlate}>
      <div className={styles.titlePlate}>
        <SingleTitle>Избранное</SingleTitle>
        {products.length > 0 && <p className={styles.countProducts}>{favorites + ' ' + productCountTitle}</p>}
      </div>
      {products.length > 0 && (
        <h5 onClick={cleanAllFavorites} className={styles.cleanAll}>
          Очистить список
        </h5>
      )}
    </div>
  );
};

export default FavoritesTitle;
