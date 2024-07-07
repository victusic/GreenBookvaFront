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
import { RootState } from '../../../../../store';
import { Promocode } from '../../../../../utils/types';
import { PromocodeDTO } from '../../../../../actions/types/requestActions';
import { AnyResponse } from '../../../../../actions/types/types';
import { useTextCount } from '../../../../../utils/hooks/useTextCount';
import { useCurrent } from '../../../../../utils/hooks/useCurrent';

interface CartRightProps {
  firstPriceProducts: number;
  discountPriceProducts: number;
}

const CartRightPlate: React.FC<CartRightProps> = ({ firstPriceProducts, discountPriceProducts }) => {
  const [finalPrice, setFinalPrice] = useState(0);

  const [totalFirstPriceProducts, setTotalFirstPriceProducts] = useState(0);
  const [totalDiscountPriceProducts, setTotalDiscountPriceProducts] = useState(0);

  const [promocode, setPromocode] = useState('');
  const [textPromocode, setTextPromocode] = useState('');
  const [promocodeStatus, setPromocodeStatus] = useState<Promocode | -1>(-1);
  const [pricePromocode, setPricePromocode] = useState(0);
  const [discountPromocode, setDiscountPromocode] = useState(0);

  const [pointOnOrder, setPointsOnOrder] = useState(0);
  const [spendPoints, setSpendPoints] = useState(false);
  const [localPoints, setLocalPoints] = useState('');
  const [pointForOrder, setPointsForOrder] = useState(0);

  const [noPromocode, setNoPromocode] = useState(false);
  const [noFirstPromocode, setNoFirstPromocode] = useState(false);
  const [yesPromocode, setYesPromocode] = useState(false);

  const current = useSelector((state: RootState) => state.current.currentType);

  const [productCountTitle, setProductCountTitle] = useState('');

  const orders = useSelector((state: RootState) => state.profile.orders);
  const points = useSelector((state: RootState) => state.profile.points);
  const shopProducts = useSelector((state: RootState) => state.profile.shopProducts);

  const dispatchVisible = useDispatch();
  const dispatchProfile = useDispatch();

  const countTitle = useTextCount('товар', shopProducts.length);
  useEffect(() => {
    setProductCountTitle(countTitle);
  }, [countTitle]);

  //стоимость

  let firstPrice = firstPriceProducts;
  let discountPrice = discountPriceProducts;
  let promoPrice = ((firstPrice - discountPrice) * discountPromocode) / 100;

  let varFinalPrice: number = firstPrice - discountPriceProducts - promoPrice;

  const promPrice = varFinalPrice;

  if (spendPoints) {
    varFinalPrice -= Number(points) / 10;
    if (varFinalPrice < 0) {
      varFinalPrice += Number(points) / 10;
      setLocalPoints((Number(points) - varFinalPrice * 10).toFixed(0));
      varFinalPrice = 0;
    }
  }

  let countPoints = promPrice - varFinalPrice;

  const pointFromOrder = Math.ceil(varFinalPrice);

  firstPrice = Number(useCurrent(firstPrice));
  discountPrice = Number(useCurrent(discountPrice));
  varFinalPrice = Number(useCurrent(varFinalPrice));
  promoPrice = Number(useCurrent(promoPrice));
  countPoints = Number(useCurrent(countPoints));

  useEffect(() => {
    setTotalFirstPriceProducts(firstPrice);
    setTotalDiscountPriceProducts(discountPrice);
    setFinalPrice(varFinalPrice);
    setPricePromocode(promoPrice);
    setPointsOnOrder(countPoints);
    setPointsForOrder(pointFromOrder);
  }, [firstPrice, discountPrice, discountPromocode, current, spendPoints]);

  function getPromo() {
    getPromocode(promocode).then((response: AnyResponse<PromocodeDTO>) => {
      response.status ? setPromocodeStatus(response.data) : setPromocodeStatus(-1);
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
            setDiscountPromocode(promocodeStatus.discount as number);
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
      finalPoints += Number(points) + pointForOrder;
    }
    dispatchProfile(refreshPointsAction(String(finalPoints)));
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
            <h3 className={styles.priceDiscount}>{totalDiscountPriceProducts}</h3>
          </div>
          {yesPromocode && (
            <div className={styles.betweenFlexPlate}>
              <h3 className={styles.priceAboutTitle}>{`Промокод «${textPromocode}»:`}</h3>
              <h3 className={styles.priceDiscount}>{pricePromocode}</h3>
            </div>
          )}

          {spendPoints && (
            <div className={styles.betweenFlexPlate}>
              <h3 className={styles.priceAboutTitle}>{`Баллы:`}</h3>
              <h3 className={styles.priceDiscount}>{pointOnOrder}</h3>
            </div>
          )}
          <div className={styles.betweenFlexPlate}>
            <h3 className={styles.priceAboutTitle}>Итого:</h3>
            <h2 className={styles.priceFinal}>{finalPrice}</h2>
          </div>

          <div className={styles.betweenFlexPlate}>
            <h5 className={styles.priceAboutTitle}>Количество баллов за заказ:</h5>
            <h5 className={styles.priceFinal}>{pointForOrder}</h5>
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

          {Number(points) > 0 && (
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
