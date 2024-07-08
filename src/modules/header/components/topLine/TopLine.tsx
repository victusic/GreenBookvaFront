import React, { useEffect, useState } from 'react';

import styles from './topLine.module.scss';

import Pad from '../../../../ui/pad/Pad';
import Location from '../location/Location';

import { HandySvg } from 'handy-svg';
import geoSvg from '../../../../assets/svg/location.svg';
import menuSvg from '../../../../assets/svg/menu.svg';
import profileSvg from '../../../../assets/svg/account.svg';
import orderSvg from '../../../../assets/svg/order.svg';
import favoriteSvg from '../../../../assets/svg/favorites-page.svg';
import cartSvg from '../../../../assets/svg/cart.svg';

import { useDispatch, useSelector } from 'react-redux';
import { refreshCurrentAction } from '../../../../store/currentReducer';
import { refreshHeadersMenuAction } from '../../../../store/headerElementsReducer';
import { Link, NavLink } from 'react-router-dom';
import { RootState } from '../../../../store';

const TopLine: React.FC = () => {
  //валюта
  const dispatchCurrent = useDispatch();
  const current = useSelector((state: RootState) => state.current.currentType);

  //видимость
  const dispatchMenuVisible = useDispatch();

  const [currentStyle, setCurrentStyle] = useState(['', styles.currencyTextActive, '']);

  function changeCurrency(type) {
    dispatchCurrent(refreshCurrentAction(type));
    switch (type) {
      case 0:
        setCurrentStyle([styles.currencyTextActive, '', '']);
        break;
      case 1:
        setCurrentStyle(['', styles.currencyTextActive, '']);
        break;
      case 2:
        setCurrentStyle(['', '', styles.currencyTextActive]);
        break;
      default:
        setCurrentStyle(['', '', '']);
        break;
    }
  }

  const favorites = useSelector((state: RootState) => state.profile.favorites);
  const shopping_cart = useSelector((state: RootState) => state.profile.shoppingCart);

  useEffect(() => {
    changeCurrency(current);
  }, [current]);

  return (
    <div className={styles.topLine}>
      <Pad>
        <nav className={styles.topLeftPanel}>
          <div className={styles.Location}>
            <HandySvg src={geoSvg} className={styles.topTextSvg} />
            <Location changeCurrency={changeCurrency} />
          </div>
          <NavLink className={styles.topTextLeft} to="about">
            О проекте
          </NavLink>
          <NavLink className={styles.topTextLeft} to="bonus">
            Бонусная программа
          </NavLink>
          <NavLink className={styles.topTextLeft} to="promotions">
            Акции
          </NavLink>
        </nav>
        <nav className={styles.topRightPanel}>
          <span className={styles.topTextRight + ' ' + styles.topTextRightHide}>
            +7 (747) 619-07-36 — круглосуточно
          </span>
          <Link
            className={styles.topTextRight + ' ' + styles.topTextLeft + ' ' + styles.topTextRightHide}
            to="feedback"
          >
            Обратная связь
          </Link>
          <div className={styles.currencyPlate}>
            <span className={styles.currencyText + ' ' + currentStyle[0]} onClick={() => changeCurrency(0)}>
              ₸
            </span>
            <span className={styles.currencyText + ' ' + currentStyle[1]} onClick={() => changeCurrency(1)}>
              $
            </span>
            <span className={styles.currencyText + ' ' + currentStyle[2]} onClick={() => changeCurrency(2)}>
              ₽
            </span>
          </div>
        </nav>

        <div className={styles.mobileFlexLeft}>
          <p onClick={() => dispatchMenuVisible(refreshHeadersMenuAction(true))}>
            <HandySvg src={menuSvg} className={styles.menuSvg} />
          </p>
          <Link className={styles.logoText} to="">
            Green Bookva
          </Link>
        </div>
        <nav className={styles.mobileFlexRight}>
          <Link to="profile">
            <HandySvg src={profileSvg} className={styles.buttonBoxSvg} />
          </Link>
          <Link to="orders">
            <HandySvg src={orderSvg} className={styles.buttonBoxSvg} />
          </Link>
          <Link to="favorites">
            <HandySvg src={favoriteSvg} className={styles.buttonBoxSvg} />
          </Link>
          <Link to="cart">
            <HandySvg src={cartSvg} className={styles.buttonBoxSvg} />
          </Link>
          {favorites > 0 && (
            <div className={styles.buttonBoxCount + ' ' + styles.buttonBoxCountFavorites}>{favorites}</div>
          )}
          {shopping_cart > 0 && (
            <div className={styles.buttonBoxCount + ' ' + styles.buttonBoxCountShoppingCart}>
              {shopping_cart}
            </div>
          )}
        </nav>
      </Pad>
    </div>
  );
};

export default TopLine;
