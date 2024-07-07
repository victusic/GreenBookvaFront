import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
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
import { useCurrent } from '../../../../../utils/hooks/useCurrent';
import { Product } from '../../../../../utils/types';
import { RootState } from '../../../../../store';

interface CartPlateProps {
  product: Product;
  setFirstPriceProducts?: Dispatch<SetStateAction<number>>;
  setDiscountPriceProducts?: Dispatch<SetStateAction<number>>;
  firstPriceProducts?: number;
  discountPriceProducts?: number;
}

const CartPlate: React.FC<CartPlateProps> = ({
  product,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFirstPriceProducts = () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDiscountPriceProducts = () => {},
  firstPriceProducts,
  discountPriceProducts,
}) => {
  const productRoute = useSelector((state: RootState) => state.imagesRoutes.product);

  //Проверка на наличие товара в избранном

  const [favoriteTrue, isFavoriteTrue] = useState(false);

  const shopProducts = useSelector((state: RootState) => state.profile.shopProducts);

  const favoritesList = useSelector((state: RootState) => state.profile.favoritesList);

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
    dispatchProfile(refreshDelFavorite(String(product.id)));
    dispatchProfile(refreshProfileFavoritesMinusAction());
    isFavoriteTrue(false);
  }

  function delFromShoppingCart() {
    const id = Cookies.get('profileId');
    delShoppingCart(product.id, id);
    dispatchProfile(delProfileShoppingCartFromListAction(product.id));
    dispatchProfile(refreshProfileShoppingCartMinusAction());
    dispatchProfile(refreshDelShoppingCart(String(product.id)));
  }

  useEffect(() => {
    if (favoritesList) {
      favoritesList.forEach((element: number) => {
        {
          element === product.id && isFavoriteTrue(true);
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
    discountPrice = ((100 - product.discount) * Number(price)) / 100;
  }

  price = useCurrent(Number(price));
  discountPrice = Number(useCurrent(discountPrice));

  function countMinus() {
    if (countProduct > 1 && firstPriceProducts && discountPriceProducts) {
      const firstPrice = firstPriceProducts - Number(product.price);
      setFirstPriceProducts(firstPrice);
      const discountPrice =
        discountPriceProducts - (product?.discount || 1 * (Number(product?.price) || 1)) / 100;
      setDiscountPriceProducts(discountPrice);

      setCountProduct(countProduct - 1);
      //удаление последнего элемента
      const indices: number[] = shopProducts.reduce((acc: number[], id, index) => {
        if (id === product.id) acc.push(index);
        return acc;
      }, []);
      if (indices.length > 0) {
        //const lastIndex = indices.pop();
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const lastIndex = indices.pop()!;
        const updatedShopProducts = [...shopProducts];
        updatedShopProducts.splice(lastIndex, 1);
        dispatchProfile(refreshShopProductsAction(updatedShopProducts));
      }
    }
  }

  function countPlus() {
    if (countProduct < 5 && firstPriceProducts && discountPriceProducts) {
      setCountProduct(countProduct + 1);
      const st = shopProducts;
      st.push(product.id);
      dispatchProfile(refreshShopProductsAction(st));
      const firstPrice = firstPriceProducts + Number(product.price);
      setFirstPriceProducts(firstPrice);
      const discountPrice = discountPriceProducts + (product.discount || 0 * Number(product.price)) / 100;
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
              product.manufacturerId
                ? `/manufacturer/${product.manufacturerId}`
                : `/author/${product.authorId}`
            }
            className={styles.cartPlateAuthor}
          >
            {product.manufacturer || product.authorName + ' '}
            {product.authorSurname && product.authorSurname}
          </Link>
          <Link to={`/publisher/${product.publisherId}`} className={styles.cartPlatePublisher}>
            {product.publisher}
          </Link>
          {product.count > 0 && <p className={styles.cartPlateCount}>{`В наличии: ${product.count}`}</p>}
          <div className={styles.cartPlateStars}>
            <StarsPlate rate={Number(product.review)} />
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
