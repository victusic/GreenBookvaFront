import React from 'react';

import styles from './productCard.module.scss';
import StarsPlate from '../starsPlate/StarsPlate';
import BuyButton from '../buttons/buyButton/BuyButton';
import FavoritesButton from '../buttons/favoritesButton/FavoritesButton';
import { useDispatch, useSelector } from 'react-redux';
import DiscountBadge from '../badges/discountBadge/DiscountBadge';
import NoveltyBadge from '../badges/noveltyBadge/NoveltyBadge';
import SalesLeaderBadge from '../badges/salesLeaderBadge/SalesLeaderBadge';
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
import { useCurrent } from '../../utils/hooks/useCurrent';
import { refreshModalSIgnVisibleAction } from '../../store/modalVisibleReducer';
import { Product } from '../../utils/types';
import { RootState } from '../../store';

interface ProductCardProps {
  product: Product;
  addClass?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addClass }) => {
  //Проверка на наличие товара в избранном

  const [favoriteTrue, isFavoriteTrue] = useState(false);

  const favoritesList = useSelector((state: RootState) => state.profile.favoritesList);

  const productRoute = useSelector((state: RootState) => state.imagesRoutes.product);

  const dispatchProfile = useDispatch();
  const dispatchModalVisible = useDispatch();

  useEffect(() => {
    if (favoritesList) {
      favoritesList.map((element) => {
        {
          element === product.id && isFavoriteTrue(true);
        }
      });
    }
  }, [favoritesList]);

  //Проверка на наличие товара в корзине

  const [cartTrue, isCartTrue] = useState(false);

  const cartList = useSelector((state: RootState) => state.profile.shoppingCartList);

  useEffect(() => {
    if (cartList) {
      cartList.map((element) => {
        {
          element === product.id && isCartTrue(true);
        }
      });
    }
  }, [cartList]);

  //Стоимость товара
  let discountPrice = 0;

  if (product.discount) {
    discountPrice = ((100 - product.discount) * Number(product.price)) / 100;
  }

  const price = useCurrent(Number(product.price));
  const finalDiscountPrice = useCurrent(discountPrice);

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

      <Link to={`/author/${product.authorId}`}>
        {product.authorName && (
          <p className={styles.cardAuthor}>
            {product.authorName + ' '}
            {product.authorSurname && product.authorSurname}
          </p>
        )}
      </Link>

      <div className={styles.starsPublisherLine}>
        <Link to={`/product/${product.id}#scroll`}>
          <StarsPlate rate={Number(product.review) || 0} />
        </Link>
        <Link
          to={
            product.publisherId
              ? `/publisher/${product.publisherId}`
              : `/manufacturer/${product.manufacturerId}`
          }
        >
          <p className={styles.publisherName}>{product.publisher || product.manufacturer}</p>
        </Link>
      </div>

      <div className={styles.priceButtonsLine}>
        {product.discount ? (
          <p className={styles.discountPriceBottom}>{finalDiscountPrice}</p>
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
            <BuyButton disabled={!product.count} onClick={addCart}>
              {!product.count ? 'Нет в наличии' : 'Купить'}
            </BuyButton>
          )}
        </div>
      </div>

      {product.badgeSalesLeader && <SalesLeaderBadge />}
      {product.badgeDiscount && <DiscountBadge />}
      {product.badgeNovelty && <NoveltyBadge />}

      {product.discount && <p className={styles.discountPriceTop}>{price}</p>}
    </section>
  );
};

export default ProductCard;
