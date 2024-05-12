import React, { useEffect, useState } from 'react';

import styles from './centralLine.module.scss';

import Pad from '../../../../ui/pad/Pad';
import HeaderButton from '../../ui/headerButton/HeaderButton';
import FindInput from '../../ui/findInput/FindInput';

import { HandySvg } from 'handy-svg';
import logoSvg from '../../../../assets/svg/logo.svg';
import profileSvg from '../../../../assets/svg/account.svg';
import orderSvg from '../../../../assets/svg/order.svg';
import favoriteSvg from '../../../../assets/svg/favorites-page.svg';
import cartSvg from '../../../../assets/svg/cart.svg';

import { useSelector, useDispatch } from 'react-redux';
import { refreshModalSIgnVisibleAction } from '../../../../store/modalVisibleReducer';
import {
  fetchProfileFavorites,
  fetchProfileShoppingCart,
  fetchProfileFavoritesList,
  fetchProfileShoppingCartList,
} from '../../../../actions/storeActions/profile';
import { Link } from 'react-router-dom';
import FindPlate from '../findPlate/FindPlate';

const CentralLine = () => {
  const dispatchVisible = useDispatch();
  const dispatchProfile = useDispatch();

  const name = useSelector((state) => state.profile.name);
  const id = useSelector((state) => state.profile.id);
  const favorites = useSelector((state) => state.profile.favorites);
  const shopping_cart = useSelector((state) => state.profile.shopping_cart);

  //плашка с вариантами поиска
  const [visible, setVisible] = useState(styles.visibleNone);
  const [oldFinds, setOldFinds] = useState([]);

  useEffect(() => {
    if (name) {
      dispatchProfile(fetchProfileFavorites(id));
      dispatchProfile(fetchProfileShoppingCart(id));
      dispatchProfile(fetchProfileFavoritesList(id));
      dispatchProfile(fetchProfileShoppingCartList(id));
    }
  }, [name]);

  return (
    <div className={styles.centralLine}>
      <Pad>
        <div className={styles.centralFlex}>
          <Link className={styles.logo} to="/">
            <HandySvg src={logoSvg} className={styles.logoSvg} />
            <span className={styles.logoText}>Green Bookva</span>
          </Link>
          <HeaderButton>Каталог</HeaderButton>
          <FindInput
            visible={visible}
            setVisible={setVisible}
            oldFinds={oldFinds}
            setOldFinds={setOldFinds}
          />
          <nav className={styles.buttonBoxPlate}>
            {name ? (
              <Link className={styles.buttonBox} to="profile">
                <HandySvg src={profileSvg} className={styles.buttonBoxSvg} />
                <span className={styles.buttonBoxText}>{name.length > 12 ? <p>Профиль</p> : name}</span>
              </Link>
            ) : (
              <div
                className={styles.buttonBox}
                onClick={() => dispatchVisible(refreshModalSIgnVisibleAction(true))}
              >
                <HandySvg src={profileSvg} className={styles.buttonBoxSvg} />
                <span className={styles.buttonBoxText}>Войти</span>
              </div>
            )}
            <Link className={styles.buttonBox} to="orders">
              <HandySvg src={orderSvg} className={styles.buttonBoxSvg} />
              <span className={styles.buttonBoxText}>Заказы</span>
            </Link>
            <Link className={styles.buttonBox + ' ' + styles.buttonBox2} to="favorites">
              {favorites > 0 && (
                <div className={styles.buttonBoxCount + ' ' + styles.buttonBoxCountFavorites}>
                  {favorites}
                </div>
              )}
              <HandySvg src={favoriteSvg} className={styles.buttonBoxSvg} />
              <span className={styles.buttonBoxText}>Избранное</span>
            </Link>
            <Link className={styles.buttonBox} to="cart">
              {shopping_cart > 0 && (
                <div className={styles.buttonBoxCount + ' ' + styles.buttonBoxCountShoppingCart}>
                  {shopping_cart}
                </div>
              )}
              <HandySvg src={cartSvg} className={styles.buttonBoxSvg} />
              <span className={styles.buttonBoxText}>Корзина</span>
            </Link>
          </nav>
        </div>
        <FindPlate visible={visible} setVisible={setVisible} oldFinds={oldFinds} setOldFinds={setOldFinds} />
      </Pad>
    </div>
  );
};

export default CentralLine;
