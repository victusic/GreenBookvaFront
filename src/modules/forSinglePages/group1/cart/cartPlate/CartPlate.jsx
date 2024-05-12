import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';

import styles from './cartPlate.module.scss';
import StarsPlate from '../../../../../ui/starsPlate/StarsPlate';

import CartButtonExit from '../../../../../ui/buttons/cartButtonExit/CartButtonExit';
import WhiteTile from '../../../../../ui/buttons/whiteTile/WhiteTile';
import CountInput from '../../../../../ui/inputs/countInput/CountInput';
import FavoritesButtonTrue from '../../../../../ui/buttons/favoritesButtonTrue/FavoritesButtonTrue';
import FavoritesButton from '../../../../../ui/buttons/favoritesButton/FavoritesButton';

import { addFavorites, delFavorites, delShoppingCart } from '../../../../../actions/requestActions/profile';
import {
  addProfileFavoriteFromListAction,
  delProfileFavoriteFromListAction,
  delProfileShoppingCartFromListAction,
  refreshDelFavorite,
  refreshDelShoppingCart,
  refreshProfileFavoritesMinusAction,
  refreshProfileFavoritesPlusAction,
  refreshProfileShoppingCartMinusAction,
  refreshShopProductsAction,
} from '../../../../../store/profileReducer';
import { useCurrent } from '../../../../../hooks/useCurrent';

const CartPlate = ({
  product,
  setFirstPriceProducts,
  setDiscountPriceProducts,
  firstPriceProducts,
  discountPriceProducts,
}) => {
  const productRoute = useSelector((state) => state.imagesRoutes.product);

  //Проверка на наличие товара в избранном

  const [favoriteTrue, isFavoriteTrue] = useState(false);

  const shopProducts = useSelector((state) => state.profile.shop_products);

  const favoritesList = useSelector((state) => state.profile.favoritesList);

  const dispatchProfile = useDispatch();

  function addFavorite() {
    const id = Cookies.get('profileId');
    addFavorites(product.id, id);
    dispatchProfile(addProfileFavoriteFromListAction(product.id));
    dispatchProfile(refreshProfileFavoritesPlusAction());
    isFavoriteTrue(true);
  }

  function delFavorite() {
    const id = Cookies.get('profileId');
    delFavorites(product.id, id);
    dispatchProfile(delProfileFavoriteFromListAction(product.id));
    dispatchProfile(refreshDelFavorite(product.id));
    dispatchProfile(refreshProfileFavoritesMinusAction());
    isFavoriteTrue(false);
  }

  function delFromShoppingCart() {
    const id = Cookies.get('profileId');
    delShoppingCart(product.id, id);
    dispatchProfile(delProfileShoppingCartFromListAction(product.id));
    dispatchProfile(refreshProfileShoppingCartMinusAction());
    dispatchProfile(refreshDelShoppingCart(product.id));
  }

  useEffect(() => {
    if (favoritesList) {
      favoritesList.forEach((element) => {
        {
          element.id === product.id && isFavoriteTrue(true);
        }
      });
    }
  }, [favoritesList]);

  //количество товаров

  const [countProduct, setCountProduct] = useState(1);
  const [minusButtonStyles, setMinusButtonStyles] = useState(styles.tileHoverDisabled);
  const [plusButtonStyles, setPlusButtonStyles] = useState(styles.tileHover);

  useEffect(() => {
    {
      countProduct < 2
        ? setMinusButtonStyles(styles.tileHoverDisabled)
        : setMinusButtonStyles(styles.tileHover);
    }
    {
      countProduct > 4
        ? setPlusButtonStyles(styles.tileHoverDisabled)
        : setPlusButtonStyles(styles.tileHover);
    }
  }, [countProduct]);

  //Стоимость товара

  let price = product.price;
  let discountPrice = 0;

  if (product.discount) {
    discountPrice = ((100 - product.discount) * price) / 100;
  }

  price = useCurrent(price);
  discountPrice = useCurrent(discountPrice);

  function countMinus() {
    if (countProduct > 1) {
      const firstPrice = firstPriceProducts - Number(product.price);
      setFirstPriceProducts(firstPrice);
      const discountPrice = discountPriceProducts - (product.discount * product.price) / 100;
      setDiscountPriceProducts(discountPrice);

      setCountProduct(countProduct - 1);
      //удаление последнего элемента
      const indices = shopProducts.reduce((acc, id, index) => {
        if (id === product.id) {
          acc.push(index);
        }
        return acc;
      }, []);
      if (indices.length > 0) {
        const lastIndex = indices.pop();
        const updatedShopProducts = [...shopProducts];
        updatedShopProducts.splice(lastIndex, 1);
        dispatchProfile(refreshShopProductsAction(updatedShopProducts));
      }
    }
  }

  function countPlus() {
    if (countProduct < 5) {
      setCountProduct(countProduct + 1);
      let st = shopProducts;
      st.push(product.id);
      dispatchProfile(refreshShopProductsAction(st));
      const firstPrice = firstPriceProducts + Number(product.price);
      setFirstPriceProducts(firstPrice);
      const discountPrice = discountPriceProducts + (product.discount * Number(product.price)) / 100;
      setDiscountPriceProducts(discountPrice);
    }
  }

  return (
    <div className={styles.cartPlate}>
      <Link to={`/product/${product.id}`}>
        <img className={styles.cartPlateImg} src={productRoute + product.image} alt={product.name} />
      </Link>
      <div className={styles.cartPlateOther}>
        <div className={styles.cartPlateText}>
          <Link to={`/product/${product.id}`} className={styles.cartPlateName}>
            {product.name}
          </Link>
          <Link
            to={
              product.manufacturer_id
                ? `/manufacturer/${product.manufacturer_id}`
                : `/author/${product.autor_id}`
            }
            className={styles.cartPlateAuthor}
          >
            {product.manufacturer || product.autor_name + ' '}
            {product.autor_surname && product.autor_surname}
          </Link>
          <Link to={`/publisher/${product.publisher_id}`} className={styles.cartPlatePublisher}>
            {product.publisher}
          </Link>
          {product.count > 0 && <p className={styles.cartPlateCount}>{`В наличии: ${product.count}`}</p>}
          <div className={styles.cartPlateStars}>
            <StarsPlate rate={product.review} />
          </div>
        </div>
        <div className={styles.cartPlatePrice}>
          {product.discount ? (
            <h4 className={styles.cartPriceDiscount}>{discountPrice}</h4>
          ) : (
            <h4 className={styles.cartPrice}>{price}</h4>
          )}
          {product.discount && <h5 className={styles.discountPriceTop}>{price}</h5>}
          <div className={styles.buttonsplate}>
            {favoriteTrue ? (
              <FavoritesButtonTrue onClick={delFavorite} />
            ) : (
              <FavoritesButton onClick={addFavorite} />
            )}
            <CartButtonExit onClick={delFromShoppingCart} />
          </div>
          {product.count > 0 && (
            <div className={styles.countPlate}>
              <WhiteTile addStyle={minusButtonStyles} onClick={countMinus}>
                <h5>-</h5>
              </WhiteTile>
              <CountInput value={countProduct} />
              <WhiteTile addStyle={plusButtonStyles} onClick={countPlus}>
                <h5>+</h5>
              </WhiteTile>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPlate;
