import React from 'react';

import styles from './modalProductCart.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshModalOrderAction } from '../../../../store/modalVisibleReducer';
import { RootState } from '../../../../store';
import { OrderProduct } from '../../../../utils/types';

interface ModalProductCartProps {
  product: OrderProduct;
}

const ModalProductCart: React.FC<ModalProductCartProps> = ({ product }) => {
  const dispatchModalVisible = useDispatch();

  const productRoute = useSelector((state: RootState) => state.imagesRoutes.product);

  function close() {
    dispatchModalVisible(refreshModalOrderAction(false));
  }
  return (
    <Link className={styles.productPlate} to={`/product/${product.productId}`} onClick={close}>
      <img className={styles.productPlateImg} src={productRoute + product.productImage} alt={product.name} />
      <div className={styles.productPlateTextBlock}>
        <p className={styles.productPlateName}>{product.name}</p>
        <div className={styles.productPlateFlex}>
          <p className={styles.productPlateAuthor}>
            {product.manufacturer || product.authorName + ' ' + product.authorSurname}
          </p>
          <p className={styles.productPlatePrice}>{product.price + ' $'}</p>
        </div>
      </div>
    </Link>
  );
};

export default ModalProductCart;
