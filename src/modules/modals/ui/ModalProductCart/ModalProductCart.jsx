import React from 'react';

import styles from './modalProductCart.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshModalOrderAction } from '../../../../store/modalVisibleReducer';

const ModalProductCart = ({ product }) => {
  const dispatchModalVisible = useDispatch();

  const productRoute = useSelector((state) => state.imagesRoutes.product);

  function close() {
    dispatchModalVisible(refreshModalOrderAction(false));
  }
  return (
    <Link className={styles.productPlate} to={`/product/${product.product_id}`} onClick={close}>
      <img className={styles.productPlateImg} src={productRoute + product.product_image} alt={product.name} />
      <div className={styles.productPlateTextBlock}>
        <p className={styles.productPlateName}>{product.name}</p>
        <div className={styles.productPlateFlex}>
          <p className={styles.productPlateAuthor}>
            {product.manufacturer || product.autor_name + ' ' + product.autor_surname}
          </p>
          <p className={styles.productPlatePrice}>{product.price + ' $'}</p>
        </div>
      </div>
    </Link>
  );
};

export default ModalProductCart;
