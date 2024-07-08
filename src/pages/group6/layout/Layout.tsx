import React from 'react';
import Header from '../../../modules/header/Header';
import Footer from '../../../modules/footer/Footer';
import Modals from '../../../templates/modals/Modals';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setResetFilterAction, setVisibleNoFilterAction } from '../../../store/filterProductsReducer';
import ArrowTop from '../../../ui/arrowTop/ArrowTop';
import CookiesPlate from '../../../ui/cookiesPlate/CookiesPlate';

const Layout: React.FC = () => {
  const dispatchFilter = useDispatch();

  const location = useLocation();

  //события при изменении роута

  useEffect(() => {
    //блокировка блока с отсувствием товара
    dispatchFilter(setVisibleNoFilterAction(false));
    dispatchFilter(setResetFilterAction());
    //скролл вверх
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <>
      <Header />
      <Outlet />
      <ArrowTop />
      <Footer />
      <CookiesPlate />
      <Modals />
    </>
  );
};

export default Layout;
