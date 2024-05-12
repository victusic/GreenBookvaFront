import React from 'react';

import styles from './cookiesPlate.module.scss';
import BuyButton from '../buttons/buyButton/BuyButton';

import { HandySvg } from 'handy-svg';

import ExitSvg from '../../assets/svg/exit.svg';
import { useDispatch } from 'react-redux';
import { refreshModalInfoCookieAction } from '../../store/modalVisibleReducer';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useEffect } from 'react';

const CookiesPlate = () => {
  const dispatchModalVisible = useDispatch();

  const [visible, setVisible] = useState(styles.notVisible);

  const larestVisible = Cookies.get('cookiePolicy');

  useEffect(() => {
    setTimeout(() => {
      larestVisible ? setVisible(styles.notVisible) : setVisible('');
    }, 7000);
  }, []);

  function closeWindow() {
    Cookies.set('cookiePolicy', true, { expires: 7 });
    setVisible(styles.notVisible);
  }

  function adoptionCookies() {
    Cookies.set('cookiePolicy', true, { expires: 365 });
    setVisible(styles.notVisible);
  }

  return (
    <div className={styles.cookiesLine + ' ' + visible}>
      <div className={styles.cookiesPlate}>
        <h5 className={styles.cookiesTitleText}>
          Мы используем cookie файлы для вашего комфорта и удобства при использовании сайта
        </h5>
        <h6
          className={styles.buttonInfo}
          onClick={() => dispatchModalVisible(refreshModalInfoCookieAction(true))}
        >
          Подробнее
        </h6>
        <BuyButton onClick={adoptionCookies}>Я согласен</BuyButton>
        <HandySvg src={ExitSvg} className={styles.exitSvg} onClick={closeWindow} />
      </div>
    </div>
  );
};

export default CookiesPlate;
