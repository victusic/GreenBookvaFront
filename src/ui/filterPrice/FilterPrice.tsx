import React from 'react';

import styles from './filterPrice.module.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import PriceInput from '../inputs/priceInput/PriceInput';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChangeMaxPriceAction, setChangeMinPriceAction } from '../../store/filterProductsReducer';
import { RootState } from '../../store';

const FilterPrice: React.FC = () => {
  const changeMinPrice = useSelector((state: RootState) => state.filter.changeMinPrice);
  const changeMaxPrice = useSelector((state: RootState) => state.filter.changeMaxPrice);

  const dispatchFilter = useDispatch();

  const [localInputMinPrice, setLocalInputMinPrice] = useState(0);
  const [localInputMaxPrice, setLocalInputMaxPrice] = useState(0);

  const current = useSelector((state: RootState) => state.current.currentType);
  const exchangeKZT = useSelector((state: RootState) => state.exchange.KZT);
  const exchangeRUB = useSelector((state: RootState) => state.exchange.RUB);

  useEffect(() => {
    switch (current) {
      case 0:
        setLocalInputMinPrice(exchangeKZT * changeMinPrice);
        setLocalInputMaxPrice(exchangeKZT * changeMaxPrice);
        break;
      case 2:
        setLocalInputMinPrice(exchangeRUB * changeMinPrice);
        setLocalInputMaxPrice(exchangeRUB * changeMaxPrice);
        break;
      default:
        setLocalInputMinPrice(changeMinPrice);
        setLocalInputMaxPrice(changeMaxPrice);
        break;
    }
  }, []);

  useEffect(() => {
    switch (current) {
      case 0:
        setLocalInputMinPrice(Math.round(exchangeKZT * changeMinPrice));
        setLocalInputMaxPrice(Math.round(exchangeKZT * changeMaxPrice));
        break;
      case 2:
        setLocalInputMinPrice(Math.round(exchangeRUB * changeMinPrice));
        setLocalInputMaxPrice(Math.round(exchangeRUB * changeMaxPrice));
        break;
      default:
        setLocalInputMinPrice(changeMinPrice);
        setLocalInputMaxPrice(changeMaxPrice);
        break;
    }
  }, [changeMinPrice, changeMaxPrice, current]);

  function sliderChange(value) {
    dispatchFilter(setChangeMinPriceAction(value[0]));
    dispatchFilter(setChangeMaxPriceAction(value[1]));
  }

  function validateInput(input) {
    const regex = /^[\d.]+$/;
    return regex.test(input);
  }

  function inputChangeMin(e) {
    const validate = validateInput(e.target.value);
    if (validate) {
      switch (current) {
        case 0:
          dispatchFilter(setChangeMinPriceAction(e.target.value / exchangeKZT));
          //setLocalInputMinPrice(e.target.value / exchangeKZT);
          break;
        case 2:
          dispatchFilter(setChangeMinPriceAction(e.target.value / exchangeRUB));
          //setLocalInputMinPrice(e.target.value / exchangeRUB);
          break;
        default:
          dispatchFilter(setChangeMinPriceAction(e.target.value));
          //setLocalInputMinPrice(e.target.value);
          break;
      }
    }
  }

  function inputChangeMax(e) {
    const validate = validateInput(e.target.value);
    if (validate) {
      switch (current) {
        case 0:
          dispatchFilter(setChangeMaxPriceAction(e.target.value / exchangeKZT));
          break;
        case 2:
          dispatchFilter(setChangeMaxPriceAction(e.target.value / exchangeRUB));
          break;
        default:
          dispatchFilter(setChangeMaxPriceAction(e.target.value));
          break;
      }
    }
  }

  return (
    <>
      <h4 className={styles.filterTitle}>Стоимость</h4>
      <Slider
        range
        defaultValue={[changeMinPrice, changeMaxPrice]}
        value={[changeMinPrice, changeMaxPrice]}
        onChange={sliderChange}
      />
      <div className={styles.priceContext}>
        <div className={styles.inputPlate}>
          <p className={styles.inputPlateText}>От</p>
          <PriceInput value={localInputMinPrice} onChange={inputChangeMin} />
        </div>
        <div className={styles.inputPlate}>
          <p className={styles.inputPlateText}>До</p>
          <PriceInput value={localInputMaxPrice} onChange={inputChangeMax} />
        </div>
      </div>
    </>
  );
};

export default FilterPrice;
