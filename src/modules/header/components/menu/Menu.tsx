import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './menu.module.scss';
import './animations.scss';

import { HandySvg } from 'handy-svg';
import geoSvg from '../../../../assets/svg/location.svg';
import BookSvg from '../../../../assets/svg/book.svg';
import ChancerySvg from '../../../../assets/svg/сhancery.svg';
import AccessorySvg from '../../../../assets/svg/accessory.svg';
import TelegramSvg from '../../../../assets/svg/telegram.svg';
import GitSvg from '../../../../assets/svg/git.svg';
import LinkedSvg from '../../../../assets/svg/linked-in.svg';
import DocumentSvg from '../../../../assets/svg/document.svg';
import CloseSvg from '../../../../assets/svg/exit.svg';
import KazakhstanSvg from '../../../../assets/svg/kazakhstan.svg';
import RussiaSvg from '../../../../assets/svg/russia.svg';
import GlovalSvg from '../../../../assets/svg/global.svg';

import { useDispatch, useSelector } from 'react-redux';
import { refreshLocationAction } from '../../../../store/locationReducer';
import { refreshCurrentAction } from '../../../../store/currentReducer';
import { refreshHeadersMenuAction } from '../../../../store/headerElementsReducer';
import { fetchCategoriesMenu2, fetchCategoriesMenu3 } from '../../../../actions/storeActions/categories';
import { Link } from 'react-router-dom';
import { getRecommendationBanner } from '../../../../actions/requestActions/mainPage';
import { RootState } from '../../../../store';
import { AnyAction } from 'redux';

const Menu: React.FC = () => {
  const recommendationRoute = useSelector((state: RootState) => state.imagesRoutes.recommendation);

  //ссылки
  const tgLink = useSelector((state: RootState) => state.externalLinks.telegram);
  const gitLink = useSelector((state: RootState) => state.externalLinks.github);
  const linkedLink = useSelector((state: RootState) => state.externalLinks.linkedIn);
  const synopsisLink = useSelector((state: RootState) => state.externalLinks.synopsis);

  //валюта
  const dispatchCurrent = useDispatch();
  const current = useSelector((state: RootState) => state.current.currentType);

  //локация
  const dispatchLocation = useDispatch();
  const location = useSelector((state: RootState) => state.location.location);

  //видимость
  const dispatchMenuVisible = useDispatch();
  const menuVisible = useSelector((state: RootState) => state.headersElements.menu);

  //города
  const townKz = useSelector((state: RootState) => state.townsList.KZ);
  const townRu = useSelector((state: RootState) => state.townsList.RU);

  /*Валюта*/

  const [currentStyle, setCurrentStyle] = useState(['', styles.currencyTextActive, '']);

  //Категории

  const dispatchCategories = useDispatch();
  const categoryBooks = useSelector((state: RootState) => state.categories.categoriesBottomLine);
  const categoryChancery = useSelector((state: RootState) => state.categories.categoriesMenu2);
  const categoryAccessory = useSelector((state: RootState) => state.categories.categoriesMenu3);

  useEffect(() => {
    dispatchCategories(fetchCategoriesMenu2() as unknown as AnyAction);
    dispatchCategories(fetchCategoriesMenu3() as unknown as AnyAction);
  }, []);

  // Видимость

  const [listsVisible, setListsVisible] = useState([false, false, false, false, false, false]);

  const [bannerState, setBannerState] = useState(false);

  const [localLocation, setLocalLocation] = useState('');

  /*Баннер*/

  const [bannerValue, setBannerValue] = useState<{ image: string; productId: number }>({
    image: '',
    productId: 0,
  });
  const [bannerLoad, setBannerLoad] = useState(false);

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

  useEffect(() => {
    changeCurrency(current);
  }, [current]);

  /*видимость*/

  function visibleState(index) {
    const visibleMsv = [false, false, false, false, false, false];
    if (index !== 'c') {
      visibleMsv[index] = !listsVisible[index];
      {
        visibleMsv[index] ? setBannerState(true) : setBannerState(false);
      }
    } else {
      dispatchMenuVisible(refreshHeadersMenuAction(false));
    }
    if (index === 1) {
      setLocalLocation('Казахстан, ');
      visibleMsv[0] = true;
      dispatchCurrent(refreshCurrentAction(0));
    }
    if (index === 2) {
      setLocalLocation('Россия, ');
      visibleMsv[0] = true;
      dispatchCurrent(refreshCurrentAction(2));
    }
    if (index === 'x') {
      dispatchCurrent(refreshCurrentAction(1));
      dispatchLocation(refreshLocationAction('Global'));
    }
    setListsVisible(visibleMsv);
  }

  useEffect(() => {
    visibleState('c');
  }, [location]);

  /*Локация*/

  useEffect(() => {
    getRecommendationBanner().then((promotionsData) => {
      setBannerValue(promotionsData[0]);
      setBannerLoad(true);
    });
  }, [menuVisible]);

  useEffect(() => {
    {
      menuVisible ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
    }
  }, [menuVisible]);

  return (
    <div>
      <CSSTransition in={menuVisible} timeout={200} classNames="fogVisible">
        <div
          className={styles.menuFog + ' fogVisible'}
          onClick={() => dispatchMenuVisible(refreshHeadersMenuAction(false))}
        />
      </CSSTransition>
      <CSSTransition in={menuVisible} timeout={200} classNames="plateVisible">
        <div className={styles.plate + ' plateVisible'}>
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

          <div className={styles.location} onClick={() => visibleState(0)}>
            <HandySvg src={geoSvg} className={styles.locationSvg + ' ' + styles.locationSvgColor} />
            <span className={styles.LocationText}>{location}</span>
          </div>
          <CSSTransition
            in={listsVisible[0]}
            timeout={600}
            classNames="countryPlate"
            mountOnEnter
            unmountOnExit
          >
            <div className={styles.countryPlateMargin + ' countryPlate'}>
              <div className={styles.product} onClick={() => visibleState(1)}>
                <HandySvg src={KazakhstanSvg} className={styles.countriesSvg} />
                <span className={styles.LocationText}>Казахстан</span>
              </div>

              <CSSTransition
                in={listsVisible[1]}
                timeout={600}
                classNames="townsListKz"
                mountOnEnter
                unmountOnExit
              >
                <div className={styles.productListCard + ' townsListKz'}>
                  {townKz.map((town, number) => (
                    <span
                      className={styles.productList}
                      key={number}
                      onClick={() => dispatchLocation(refreshLocationAction(localLocation + town))}
                    >
                      {town}
                    </span>
                  ))}
                </div>
              </CSSTransition>

              <div className={styles.product} onClick={() => visibleState(2)}>
                <HandySvg src={RussiaSvg} className={styles.countriesSvg} />
                <span className={styles.LocationText}>Россия</span>
              </div>

              <CSSTransition
                in={listsVisible[2]}
                timeout={600}
                classNames="townsListRu"
                mountOnEnter
                unmountOnExit
              >
                <div className={styles.productListCard + ' townsListRu'}>
                  {townRu.map((town, number) => (
                    <span
                      className={styles.productList}
                      key={number}
                      onClick={() => dispatchLocation(refreshLocationAction(localLocation + town))}
                    >
                      {town}
                    </span>
                  ))}
                </div>
              </CSSTransition>

              <div className={styles.product} onClick={() => visibleState('x')}>
                <HandySvg src={GlovalSvg} className={styles.countriesSvg} />
                <span className={styles.LocationText}>Global</span>
              </div>
            </div>
          </CSSTransition>

          <div className={styles.line} />

          <div className={styles.productPlate}>
            <div className={styles.product} onClick={() => visibleState(3)}>
              <HandySvg src={BookSvg} className={styles.locationSvg + ' ' + styles.locationSvgColor} />
              <span className={styles.LocationText}>Книги</span>
            </div>

            <CSSTransition
              in={listsVisible[3]}
              timeout={600}
              classNames="productListCardBook"
              mountOnEnter
              unmountOnExit
            >
              <div className={styles.productListCard + ' productListCardBook'}>
                {categoryBooks.map((category) => (
                  <Link
                    to={'/category/' + category.id}
                    className={styles.productList}
                    key={category.id}
                    onClick={() => visibleState('c')}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </CSSTransition>

            <div className={styles.product} onClick={() => visibleState(4)}>
              <HandySvg src={ChancerySvg} className={styles.locationSvg + ' ' + styles.locationSvgColor} />
              <span className={styles.LocationText}>Канцелярия</span>
            </div>

            <CSSTransition
              in={listsVisible[4]}
              timeout={600}
              classNames="productListCardChancery"
              mountOnEnter
              unmountOnExit
            >
              <div className={styles.productListCard + ' productListCardChancery'}>
                {categoryChancery.map((category) => (
                  <Link
                    to={'/category/' + category.id}
                    className={styles.productList}
                    key={category.id}
                    onClick={() => visibleState('c')}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </CSSTransition>

            <div className={styles.product} onClick={() => visibleState(5)}>
              <HandySvg src={AccessorySvg} className={styles.locationSvg + ' ' + styles.locationSvgColor} />
              <span className={styles.LocationText}>Аксессуары</span>
            </div>

            <CSSTransition
              in={listsVisible[5]}
              timeout={600}
              classNames="productListCardAccessory"
              mountOnEnter
              unmountOnExit
            >
              <div className={styles.productListCard + ' productListCardAccessory'}>
                {categoryAccessory.map((category) => (
                  <Link
                    to={'/category/' + category.id}
                    className={styles.productList}
                    key={category.id}
                    onClick={() => visibleState('c')}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </CSSTransition>
          </div>

          <div className={styles.line} />

          <div className={styles.linkPlate}>
            <Link to="about">
              <nav className={styles.link} onClick={() => visibleState('c')}>
                О проекте
              </nav>
            </Link>
            <Link to="bonus">
              <nav className={styles.link} onClick={() => visibleState('c')}>
                Бонусная программа
              </nav>
            </Link>
            <Link to="promotions">
              <nav className={styles.link} onClick={() => visibleState('c')}>
                Акции
              </nav>
            </Link>
            <Link to="feedback">
              <nav className={styles.link} onClick={() => visibleState('c')}>
                Обратная связь
              </nav>
            </Link>
          </div>

          <div className={styles.line} />

          <div className={styles.phone}>+7 (747) 619-07-36 — круглосуточно</div>

          <div className={styles.line} />

          <div className={styles.socLinks}>
            <Link to={tgLink} target="_blank">
              <p onClick={() => visibleState('c')}>
                <HandySvg src={TelegramSvg} className={styles.socSvg + ' ' + styles.socSvgColor} />
              </p>
            </Link>

            <Link to={gitLink} target="_blank">
              <p onClick={() => visibleState('c')}>
                <HandySvg src={GitSvg} className={styles.socSvg + ' ' + styles.socSvgColor} />
              </p>
            </Link>

            <Link to={linkedLink} target="_blank">
              <p onClick={() => visibleState('c')}>
                <HandySvg src={LinkedSvg} className={styles.socSvg + ' ' + styles.socSvgColor} />
              </p>
            </Link>

            <Link to={synopsisLink} target="_blank">
              <p onClick={() => visibleState('c')}>
                <HandySvg src={DocumentSvg} className={styles.socSvg + ' ' + styles.socSvgColor} />
              </p>
            </Link>
          </div>
          <CSSTransition in={bannerState} timeout={600} classNames="bannerState">
            {bannerLoad ? (
              <Link to={`/product/${bannerValue.productId}`}>
                <img
                  src={recommendationRoute + bannerValue.image}
                  className={styles.banner + ' bannerState'}
                  onClick={() => visibleState('c')}
                />
              </Link>
            ) : (
              <></>
            )}
          </CSSTransition>
          <p onClick={() => dispatchMenuVisible(refreshHeadersMenuAction(false))}>
            <HandySvg src={CloseSvg} className={styles.close + ' ' + styles.closeColor} />
          </p>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Menu;
