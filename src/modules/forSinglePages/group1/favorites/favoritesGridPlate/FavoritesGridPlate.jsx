import React from 'react';

import styles from './favoritesGridPlate.module.scss';
import ProductCard from '../../../../../ui/productCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshDelFavorite } from '../../../../../store/profileReducer';
import { useState } from 'react';

const FavoritesGridPlate = ({ products }) => {
  const delFavorite = useSelector((state) => state.profile.delFavorite);

  const dispatchProfile = useDispatch();

  const [finalProducts, setFinalProducts] = useState(products);

  useEffect(() => {
    if (delFavorite) {
      setFinalProducts(finalProducts.filter((product) => product.id !== delFavorite));
      dispatchProfile(refreshDelFavorite(''));
    }
  }, [delFavorite]);

  return (
    <div>
      {finalProducts.length > 0 && (
        <div className={styles.gridPlate}>
          {finalProducts.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesGridPlate;
