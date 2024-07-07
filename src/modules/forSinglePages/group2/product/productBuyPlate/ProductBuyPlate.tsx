import React from 'react';

import styles from './productBuyPlate.module.scss';
import BigButton from '../../../../../ui/buttons/bigButton/BigButton';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import BigButtonTrue from '../../../../../ui/buttons/bigButtonTrue/BigButtonTrue';
import BigButtonFalse from '../../../../../ui/buttons/bigButtonFalse/BigButtonFalse';
import {
  addFavorites,
  addShoppingCart,
  delFavorites,
  delShoppingCart,
} from '../../../../../actions/requestActions/profile';
import Cookies from 'js-cookie';
import {
  addProfileFavoriteFromListAction,
  addProfileShoppingCartFromListAction,
  delProfileFavoriteFromListAction,
  delProfileShoppingCartFromListAction,
  refreshDelFavorite,
  refreshProfileFavoritesMinusAction,
  refreshProfileFavoritesPlusAction,
  refreshProfileShoppingCartMinusAction,
  refreshProfileShoppingCartPlusAction,
} from '../../../../../store/profileReducer';
import FavoritesBigButton from '../../../../../ui/buttons/favoritesBigButton/FavoritesBigButton';
import FavoritesBigButtonTrue from '../../../../../ui/buttons/favoritesBigButtonTrue/FavoritesBigButtonTrue';
import { refreshModalSIgnVisibleAction } from '../../../../../store/modalVisibleReducer';
import { Product } from '../../../../../utils/types';
import { RootState } from '../../../../../store';
import { useCurrent } from '../../../../../utils/hooks/useCurrent';
import { useTextCount } from '../../../../../utils/hooks/useTextCount';

interface ProductBuyPlateProps {
  product: Product;
}

const ProductBuyPlate: React.FC<ProductBuyPlateProps> = ({ product }) => {
  const [finalBasePrice, setFinalBasePrice] = useState(0);
  const [discountPriceData, setDiscountPriceData] = useState(0);

  //Стоимость товара

  const current = useSelector((state: RootState) => state.current.currentType);

  const [pointForOrder, setPointsForOrder] = useState(0);
  const [productPointsTitle, setProductPointsTitle] = useState('');

  const dispatchProfile = useDispatch();
  const dispatchModalVisible = useDispatch();

  const [cartTrue, isCartTrue] = useState(false);

  const [favoriteTrue, isFavoriteTrue] = useState(false);

  const favoritesList = useSelector((state: RootState) => state.profile.favoritesList);

  const cartList = useSelector((state: RootState) => state.profile.shoppingCartList);

  useEffect(() => {
    isCartTrue(false);
    isFavoriteTrue(false);
    if (cartList) {
      cartList.forEach((element) => {
        {
          element === product.id && isCartTrue(true);
        }
      });
    }
    if (favoritesList) {
      favoritesList.forEach((element) => {
        {
          element === product.id && isFavoriteTrue(true);
        }
      });
    }
  }, [cartList, favoritesList, product]);

  const countTitle = useTextCount('балл', pointForOrder);
  useEffect(() => {
    setProductPointsTitle(countTitle);
  }, [productPointsTitle]);

  //стоимость

  let discountPrice = 0;
  let pointFromOrder = Math.ceil(Number(product.price));

  if (product.discount) {
    discountPrice = ((100 - product.discount) * Number(product.price)) / 100;
    pointFromOrder = Math.ceil(discountPrice);
  }

  const price = useCurrent(Number(product.price));
  discountPrice = Number(useCurrent(discountPrice));

  useEffect(() => {
    setFinalBasePrice(Number(price));
    setPointsForOrder(pointFromOrder);
    setDiscountPriceData(discountPrice);
  }, [product, current]);

  const id = Cookies.get('profileId');

  function addFavorite() {
    if (id) {
      addFavorites(product.id, id);
      dispatchProfile(addProfileFavoriteFromListAction(product.id));
      dispatchProfile(refreshProfileFavoritesPlusAction());
      isFavoriteTrue(true);
    } else {
      dispatchModalVisible(refreshModalSIgnVisibleAction(true));
    }
  }

  function delFavorite() {
    delFavorites(product.id, id);
    dispatchProfile(delProfileFavoriteFromListAction(product.id));
    dispatchProfile(refreshDelFavorite(String(product.id)));
    dispatchProfile(refreshProfileFavoritesMinusAction());
    isFavoriteTrue(false);
  }

  function addCart() {
    if (id) {
      addShoppingCart(product.id, id);
      dispatchProfile(addProfileShoppingCartFromListAction(product.id));
      dispatchProfile(refreshProfileShoppingCartPlusAction());
      isCartTrue(true);
    } else {
      dispatchModalVisible(refreshModalSIgnVisibleAction(true));
    }
  }

  function delCart() {
    delShoppingCart(product.id, id);
    dispatchProfile(delProfileShoppingCartFromListAction(product.id));
    dispatchProfile(refreshProfileShoppingCartMinusAction());
    isCartTrue(false);
  }

  return (
    <div className={styles.productBuyPlate}>
      <div className={styles.flexBetween}>
        <div className={styles.flex}>
          <h2 className={styles.productPrice}>{product.discount ? discountPriceData : finalBasePrice}</h2>
          {product.discount && <h4 className={styles.discountPriceTop}>{finalBasePrice}</h4>}
        </div>

        <div className={styles.productPoints}>
          <h4 className={styles.productPrice}>{`+ ${pointForOrder} ${productPointsTitle}`}</h4>
        </div>
      </div>
      <div className={styles.tabletFlex}>
        <div className={styles.flexBetweenButton}>
          {cartTrue ? (
            <BigButtonTrue onClick={delCart}>В корзине</BigButtonTrue>
          ) : (
            <>
              {!product.count ? (
                <BigButtonFalse>Нет в наличии</BigButtonFalse>
              ) : (
                <BigButton onClick={addCart}>Купить</BigButton>
              )}
            </>
          )}
          {product.count > 0 && (
            <>
              {favoriteTrue ? (
                <div className={styles.favorite}>
                  <FavoritesBigButtonTrue onClick={delFavorite} />
                </div>
              ) : (
                <div className={styles.favorite}>
                  <FavoritesBigButton onClick={addFavorite} />
                </div>
              )}
            </>
          )}
        </div>
        {product.count > 0 && <h3 className={styles.productCount}>{`В наличии: ${product.count}`}</h3>}
        <p className={styles.productDisclaimer}>
          Цена на сайте может отличаться от цены в магазинах сети. Внешний вид книги может отличаться от
          изображения на сайте.
        </p>
      </div>
      {product.count > 0 && <h3 className={styles.productCountMobile}>{`В наличии: ${product.count}`}</h3>}
    </div>
  );
};

export default ProductBuyPlate;
