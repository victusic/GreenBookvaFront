import React from 'react';

import styles from './footer.module.scss';
import Pad from '../../ui/pad/Pad';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { refreshModalSIgnUpVisibleAction } from '../../store/modalVisibleReducer';

import { HandySvg } from 'handy-svg';
import TelegramSvg from '../../assets/svg/telegram.svg';
import GitSvg from '../../assets/svg/git.svg';
import LinkedSvg from '../../assets/svg/linked-in.svg';
import DocumentSvg from '../../assets/svg/document.svg';

const Footer = () => {
  const name = useSelector((state) => state.profile.name);

  //ссылки
  const tgLink = useSelector((state) => state.externalLinks.telegram);
  const gitLink = useSelector((state) => state.externalLinks.github);
  const linkedLink = useSelector((state) => state.externalLinks.linkedIn);
  const synopsisLink = useSelector((state) => state.externalLinks.synopsis);
  const passphraseLink = useSelector((state) => state.externalLinks.passphrase);

  const dispatchVisible = useDispatch();

  return (
    <footer className={styles.plate}>
      <Pad>
        <div className={styles.topLine}>
          <h5 className={styles.mobileTitle}>Книжный онлайн магазин «Green Bookva»</h5>
          <div className={styles.textBlock}>
            <h4 className={styles.topTitle}>Книжный онлайн магазин «Green Bookva»</h4>
            <span className={styles.aboutText}>
              <p>
                Green Bookva — это книжный магазин, предлагающий богатый выбор книг на самые разнообразные
                тематики, охватывая литературу от классики до современных бестселлеров, с акцентом на
                экологию, природу и устойчивое развитие.{' '}
              </p>
              <br />
              <p>
                Магазин нацелен на создание уютной и дружелюбной атмосферы для всех любителей чтения, где
                каждый найдет книгу по своему вкусу, а также сможет получить профессиональную помощь от
                опытных книжных консультантов.
              </p>
            </span>
            <div className={styles.linksPlate}>
              <Link to={tgLink} target="_blank">
                <HandySvg src={TelegramSvg} className={styles.linksSvg} />
              </Link>
              <Link to={gitLink} target="_blank">
                <HandySvg src={GitSvg} className={styles.linksSvg} />
              </Link>
              <Link to={linkedLink} target="_blank">
                <HandySvg src={LinkedSvg} className={styles.linksSvg} />
              </Link>
              <Link to={synopsisLink} target="_blank">
                <HandySvg src={DocumentSvg} className={styles.linksSvg} />
              </Link>
            </div>
          </div>
          <div className={styles.navBlock}>
            <h4 className={styles.topTitle}>Страницы аккаунта</h4>
            <div className={styles.navBlockLinks}>
              {name ? (
                <Link className={styles.navLink} to="profile">
                  {name.length > 14 ? <p>Профиль</p> : name}
                </Link>
              ) : (
                <span
                  className={styles.navLink}
                  onClick={() => dispatchVisible(refreshModalSIgnUpVisibleAction(true))}
                >
                  Войти
                </span>
              )}
              <Link to="orders" className={styles.navLink}>
                Заказы
              </Link>
              <Link to="favorites" className={styles.navLink}>
                Избранное
              </Link>
              <Link to="cart" className={styles.navLink}>
                Корзина
              </Link>
              <Link className={styles.navLink} to="bonus">
                Бонусная программа
              </Link>
            </div>
          </div>
          <div className={styles.navBlock}>
            <h4 className={styles.topTitle}>Интернет магазин</h4>
            <div className={styles.navBlockLinks}>
              <Link className={styles.navLink} to="about">
                О проекте
              </Link>
              <Link className={styles.navLink} to="bonus">
                Бонусная программа
              </Link>
              <Link className={styles.navLink} to="feedback">
                Обратная связь
              </Link>
              <Link className={styles.navLink} to="promotions">
                Акции
              </Link>
              <Link className={styles.navLink} target="_blank" to={passphraseLink}>
                ㅤ
              </Link>
            </div>
          </div>
          <div className={styles.mobilePadPlate}>
            <div className={styles.mobileLinksPlate}>
              <Link to={tgLink} target="_blank">
                <HandySvg src={TelegramSvg} className={styles.mobileLinksSvg} />
              </Link>
              <Link to={gitLink} target="_blank">
                <HandySvg src={GitSvg} className={styles.mobileLinksSvg} />
              </Link>
              <Link to={linkedLink} target="_blank">
                <HandySvg src={LinkedSvg} className={styles.mobileLinksSvg} />
              </Link>
              <Link to={synopsisLink} target="_blank">
                <HandySvg src={DocumentSvg} className={styles.mobileLinksSvg} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.line} />
        <div className={styles.bottomLine}>
          <span className={styles.bottomLineText}>Ⓒ 2023 Green Bookva by Khoroshilov Viktor</span>
        </div>
      </Pad>
    </footer>
  );
};

export default Footer;
