import React from 'react';

import styles from './cartRightPlate.module.scss';
import BuyButton from '../../../../../ui/buttons/buyButton/BuyButton';
import BigButton from '../../../../../ui/buttons/bigButton/BigButton';
import PromocodeInput from '../../../../../ui/inputs/promocodeInput/PromocodeInput';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPromocode } from '../../../../../actions/requestActions/mongo';
import {
  refreshModalPayAction,
  refreshModalProductLimtAction,
} from '../../../../../store/modalVisibleReducer';
import Checkbox from '../../../../../ui/checkbox/Checkbox';
import { refreshPointsAction } from '../../../../../store/profileReducer';
import { useCurrent } from '../../../../../hooks/useCurrent';
import { useTextCount } from '../../../../../hooks/useTextCount';

const CartRightPlate = ({ firstPriceProducts, discountPriceProducts }) => {
  const [finalPrice, setFinalPrice] = useState(0);

  const [totalFirstPriceProducts, setTotalFirstPriceProducts] = useState(0);
  const [totalDiscountPriceProducts, setTotalDiscountPriceProducts] = useState(0);

  const [promocode, setPromocode] = useState('');
  const [textPromocode, setTextPromocode] = useState('');
  const [promocodeStatus, setPromocodeStatus] = useState();
  const [pricePromocode, setPricePromocode] = useState(0);
  const [dicountPromocode, setDiscountPromocode] = useState(0);

  const [pointOnOrder, setPoitsOnOrder] = useState();
  const [spendPoints, setSpendPoints] = useState(false);
  const [localPoints, setLocalPoints] = useState();
  const [pointForOrder, setPoitsForOrder] = useState();

  const [noPromocode, setNoPromocode] = useState(false);
  const [noFirstPromocode, setNoFirstPromocode] = useState(false);
  const [yesPromocode, setYesPromocode] = useState(false);

  const current = useSelector((state) => state.current.currentType);

  const [productCountTitle, setProductCountTitle] = useState('');

  const orders = useSelector((state) => state.profile.orders);
  const points = useSelector((state) => state.profile.points);
  const shopProducts = useSelector((state) => state.profile.shop_products);

  const dispatchVisible = useDispatch();
  const dispatchProfile = useDispatch();

  const countTitle = useTextCount('товар', shopProducts.length);
  useEffect(() => {
    setProductCountTitle(countTitle);
  }, [countTitle]);

  //стоимость

  let firstPrice = firstPriceProducts;
  let discountPrice = discountPriceProducts;
  let promoPrice = ((firstPrice - discountPrice) * dicountPromocode) / 100;

  let varFinalPrice = firstPrice - discountPriceProducts - promoPrice;

  const promPrice = varFinalPrice;

  if (spendPoints) {
    varFinalPrice -= points / 10;
    if (varFinalPrice < 0) {
      varFinalPrice += points / 10;
      setLocalPoints((points - varFinalPrice * 10).toFixed(0));
      varFinalPrice = 0;
    }
  }

  let countPoints = promPrice - varFinalPrice;

  const pointFromOrder = Math.ceil(varFinalPrice);

  firstPrice = useCurrent(firstPrice);
  discountPrice = useCurrent(discountPrice);
  varFinalPrice = useCurrent(varFinalPrice);
  promoPrice = useCurrent(promoPrice);
  countPoints = useCurrent(countPoints);

  useEffect(() => {
    setTotalFirstPriceProducts(firstPrice);
    setTotalDiscountPriceProducts(discountPrice);
    setFinalPrice(varFinalPrice);
    setPricePromocode(promoPrice);
    setPoitsOnOrder(countPoints);
    setPoitsForOrder(pointFromOrder);
  }, [firstPrice, discountPrice, dicountPromocode, current, spendPoints]);

  function getPromo() {
    getPromocode(promocode).then((data) => {
      data ? setPromocodeStatus(data) : setPromocodeStatus(-1);
    });
  }

  useEffect(() => {
    setNoFirstPromocode(false);
    setNoPromocode(false);
    setYesPromocode(false);
    setDiscountPromocode(0);
    if (promocodeStatus) {
      if (promocodeStatus !== -1) {
        switch (promocodeStatus.pattern) {
          case 0:
            setDiscountPromocode(promocodeStatus.discount);
            setYesPromocode(true);
            setTextPromocode(promocode);
            return;
          case 1:
            if (Number(orders) > 0) {
              setNoFirstPromocode(true);
            } else {
              setDiscountPromocode(30);
              setYesPromocode(true);
              setTextPromocode(promocode);
            }
            return;
          default:
            return;
        }
      } else {
        setNoPromocode(true);
      }
    }
  }, [promocodeStatus]);

  function startBuy() {
    let finalPoints = 0;
    if (spendPoints) {
      {
        localPoints ? (finalPoints += Number(localPoints)) : (finalPoints += pointForOrder);
      }
    } else {
      finalPoints += points + pointForOrder;
    }
    dispatchProfile(refreshPointsAction(finalPoints));
    {
      shopProducts.length > 12
        ? dispatchVisible(refreshModalProductLimtAction(true))
        : dispatchVisible(refreshModalPayAction(true));
    }
  }

  return (
    <>
      {shopProducts.length > 0 && (
        <div className={styles.cartRightPlate}>
          <div className={styles.betweenFlexPlate}>
            <h3 className={styles.priceAboutTitle}>{shopProducts.length + ' ' + productCountTitle + ':'}</h3>
            <h3 className={styles.priceAbout}>{totalFirstPriceProducts}</h3>
          </div>
          <div className={styles.betweenFlexPlate}>
            <h3 className={styles.priceAboutTitle}>Скидка:</h3>
            <h3 className={styles.pricеDiscount}>{totalDiscountPriceProducts}</h3>
          </div>
          {yesPromocode && (
            <div className={styles.betweenFlexPlate}>
              <h3 className={styles.priceAboutTitle}>{`Промокод «${textPromocode}»:`}</h3>
              <h3 className={styles.pricеDiscount}>{pricePromocode}</h3>
            </div>
          )}

          {spendPoints && (
            <div className={styles.betweenFlexPlate}>
              <h3 className={styles.priceAboutTitle}>{`Баллы:`}</h3>
              <h3 className={styles.pricеDiscount}>{pointOnOrder}</h3>
            </div>
          )}
          <div className={styles.betweenFlexPlate}>
            <h3 className={styles.priceAboutTitle}>Итого:</h3>
            <h2 className={styles.pricеFinal}>{finalPrice}</h2>
          </div>

          <div className={styles.betweenFlexPlate}>
            <h5 className={styles.priceAboutTitle}>Количество баллов за заказ:</h5>
            <h5 className={styles.pricеFinal}>{pointForOrder}</h5>
          </div>

          {noPromocode && (
            <div className={styles.betweenFlexPlate}>
              <p className={styles.noPromocodeText}>Данного промокода не существует</p>
            </div>
          )}
          {noFirstPromocode && (
            <div className={styles.betweenFlexPlate}>
              <p className={styles.noPromocodeText}>Промокод можно применить только при первом заказе</p>
            </div>
          )}

          <div className={styles.betweenFlexPlate}>
            <PromocodeInput
              placeholder={'Промокод'}
              value={promocode}
              onChange={(e) => setPromocode(e.target.value)}
            />
            <BuyButton onClick={getPromo}>Применить</BuyButton>
          </div>

          {points > 0 && (
            <Checkbox
              checked={spendPoints}
              onChange={() => setSpendPoints(!spendPoints)}
            >{`Списать баллы (${points}):`}</Checkbox>
          )}

          <p className={styles.warningText}>
            После данной странице могла бы быть страница с оформлением заказа, однако, поскольку это тестовый
            проект она была изъята, так как не имеет никакой смысловой нагрузки
          </p>

          <BigButton onClick={startBuy}>Перейти к оплате</BigButton>
        </div>
      )}
    </>
  );
};

export default CartRightPlate;
