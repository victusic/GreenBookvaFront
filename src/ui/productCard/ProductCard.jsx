import React from 'react';

import styles from './productCard.module.scss';
import StarsPlate from '../starsPlate/StarsPlate';
import BuyButton from '../buttons/buyButton/BuyButton';
import FavoritesButton from '../buttons/favoritesButton/FavoritesButton';
import { useDispatch, useSelector } from 'react-redux';
import SalesLederBadge from '../badges/salesLederBadge/SalesLederBadge';
import DiscountBadge from '../badges/discountBadge/DiscountBadge';
import NoveltyBadge from '../badges/noveltyBadge/NoveltyBadge';
import { useEffect } from 'react';
import { useState } from 'react';
import FavoritesButtonTrue from '../buttons/favoritesButtonTrue/FavoritesButtonTrue';
import BuyButtonTrue from '../buttons/buyButtonTrue/BuyButtonTrue';

import NoBook from '../../assets/img/no-book.png';
import { Link } from 'react-router-dom';
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
} from '../../store/profileReducer';
import Cookies from 'js-cookie';
import {
  addFavorites,
  addShoppingCart,
  delFavorites,
  delShoppingCart,
} from '../../actions/requestActions/profile';
import { useCurrent } from '../../hooks/useCurrent';
import { refreshModalSIgnVisibleAction } from '../../store/modalVisibleReducer';

const ProductCard = ({ product, addClass }) => {
  //Проверка на наличие товара в избранном

  const [favoriteTrue, isFavoriteTrue] = useState(false);

  const favoritesList = useSelector((state) => state.profile.favoritesList);

  const productRoute = useSelector((state) => state.imagesRoutes.product);

  const dispatchProfile = useDispatch();
  const dispatchModalVisible = useDispatch();

  useEffect(() => {
    if (favoritesList) {
      favoritesList.forEach((element) => {
        {
          element.id === product.id && isFavoriteTrue(true);
        }
      });
    }
  }, [favoritesList]);

  //Проверка на наличие товара в корзине

  const [cartTrue, isCartTrue] = useState(false);

  const cartList = useSelector((state) => state.profile.shopping_cartList);

  useEffect(() => {
    if (cartList) {
      cartList.forEach((element) => {
        {
          element.id === product.id && isCartTrue(true);
        }
      });
    }
  }, [cartList]);

  //Стоимость товара

  let price = product.price;
  let discountPrice = 0;

  if (product.discount) {
    discountPrice = ((100 - product.discount) * price) / 100;
  }

  price = useCurrent(price);
  discountPrice = useCurrent(discountPrice);

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
    dispatchProfile(refreshDelFavorite(product.id));
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
    <section className={styles.cardPlate + ' ' + addClass}>
      <Link to={`/product/${product.id}`}>
        {product.image ? (
          <img className={styles.cardImage} src={productRoute + product.image} alt={product.name} />
        ) : (
          <img className={styles.cardImage} src={NoBook} alt={product.name} />
        )}
      </Link>

      {product.manufacturer ? (
        <Link to={`/product/${product.id}`} className={styles.cardTitleM}>
          {product.name}
        </Link>
      ) : (
        <Link to={`/product/${product.id}`} className={styles.cardTitle}>
          {product.name}
        </Link>
      )}

      <Link to={`/author/${product.autor_id}`}>
        {product.autor_name && (
          <p className={styles.cardAuthor}>
            {product.autor_name + ' '}
            {product.autor_surname && product.autor_surname}
          </p>
        )}
      </Link>

      <div className={styles.starsPublisherLine}>
        <Link to={`/product/${product.id}#scroll`}>
          <StarsPlate rate={product.review} />
        </Link>
        <Link
          to={
            product.publisher_id
              ? `/publisher/${product.publisher_id}`
              : `/manufacturer/${product.manufacturer_id}`
          }
        >
          <p className={styles.publisherName}>{product.publisher || product.manufacturer}</p>
        </Link>
      </div>

      <div className={styles.priceButtonsLine}>
        {product.discount ? (
          <p className={styles.discountPriceBottom}>{discountPrice}</p>
        ) : (
          <p className={styles.price}>{price}</p>
        )}
        <div className={styles.buttonsLine}>
          {product.count > 0 && (
            <>
              {favoriteTrue ? (
                <FavoritesButtonTrue onClick={delFavorite} />
              ) : (
                <FavoritesButton onClick={addFavorite} />
              )}
            </>
          )}
          {cartTrue ? (
            <BuyButtonTrue onClick={delCart} />
          ) : (
            <BuyButton disabled={!product.count && 'disabled'} onClick={addCart}>
              {!product.count ? 'Нет в наличии' : 'Купить'}
            </BuyButton>
          )}
        </div>
      </div>

      {product.badge_sales_leder && <SalesLederBadge />}
      {product.badge_discount && <DiscountBadge />}
      {product.badge_novelty && <NoveltyBadge />}

      {product.discount && <p className={styles.discountPriceTop}>{price}</p>}
    </section>
  );
};

export default ProductCard;
