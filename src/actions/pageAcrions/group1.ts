import { defer } from 'react-router-dom';
import { getFavorites, getOrders, getShoppingCart } from '../requestActions/profile';
import Cookies from 'js-cookie';

export const favoritesPage = async () => {
  const id = Cookies.get('profileId');

  return defer({
    products: getFavorites(id),
  });
};

export const ordersPage = async () => {
  const id = Cookies.get('profileId');

  return defer({
    orders: getOrders(id),
  });
};

export const cartPage = async () => {
  const id = Cookies.get('profileId');

  return defer({
    products: getShoppingCart(id),
  });
};
