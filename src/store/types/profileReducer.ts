import { CreditCard } from '../../utils/types';

export interface ProfileState {
  id: string;
  name: string;
  surname: string;
  mail: string;
  points: string;
  newPoints: string;
  color: string;
  image: string;
  birthday: string;
  orders: string;
  favorites: number;
  shoppingCart: number;
  favoritesList: number[];
  delFavorite: string;
  shoppingCartList: number[];
  delShoppingCart: string;
  cardsList: CreditCard[];
  card: string;
  orderNumber: string;
  orderCode: string;
  shopProducts: number[];
  nowProduct: string;
  nowReview: string;
}

export const REFRESH_BASE_PROFILE = 'REFRESH_BASE_PROFILE';
export const REFRESH_REQUEST_PROFILE = 'REFRESH_REQUEST_PROFILE';
export const REFRESH_FAVORITES_PROFILE = 'REFRESH_FAVORITES_PROFILE';
export const REFRESH_FAVORITES_PROFILE_MINUS = 'REFRESH_FAVORITES_PROFILE_MINUS';
export const REFRESH_FAVORITES_PROFILE_PLUS = 'REFRESH_FAVORITES_PROFILE_PLUS';
export const REFRESH_SHOPPING_CART_PROFILE = 'REFRESH_SHOPPING_CART_PROFILE';
export const REFRESH_SHOPPING_CART_PROFILE_MINUS = 'REFRESH_SHOPPING_CART_PROFILE_MINUS';
export const REFRESH_SHOPPING_CART_PROFILE_PLUS = 'REFRESH_SHOPPING_CART_PROFILE_PLUS';
export const REFRESH_FAVORITES_LIST = 'REFRESH_FAVORITES_LIST';
export const ADD_FAVORITES_LIST = 'ADD_FAVORITES_LIST';
export const DEL_FAVORITE_FROM_LIST = 'DEL_FAVORITE_FROM_LIST';
export const SET_DEL_FAVORITE = 'SET_DEL_FAVORITE';
export const REFRESH_SHOPPING_CART_LIST = 'REFRESH_SHOPPING_CART_LIST';
export const ADD_SHOPPING_CART_FROM_LIST = 'ADD_SHOPPING_CART_FROM_LIST';
export const DEL_SHOPPING_CART_FROM_LIST = 'DEL_SHOPPING_CART_FROM_LIST';
export const SET_DEL_SHOPPING_CART = 'SET_DEL_SHOPPING_CART';
export const REFRESH_CARDS_LIST = 'REFRESH_CARDS_LIST';
export const REFRESH_CARD = 'REFRESH_CARD';
export const REFRESH_ORDER_NUMBER = 'REFRESH_ORDER_NUMBER';
export const REFRESH_ORDER_CODE = 'REFRESH_ORDER_CODE';
export const REFRESH_SHOP_PRODUCTS = 'REFRESH_SHOP_PRODUCTS';
export const REFRESH_POINTS = 'REFRESH_POINTS';
export const REFRESH_NOW_PRODUCT = 'REFRESH_NOW_PRODUCT';
export const REFRESH_NOW_REVIEW = 'REFRESH_NOW_REVIEW';

export interface RefreshBaseProfileAction {
  type: typeof REFRESH_BASE_PROFILE;
  payload: ProfileState[];
}

export interface RefreshRequestProfileAction {
  type: typeof REFRESH_REQUEST_PROFILE;
  payload: string[];
}

export interface RefreshFavoritesProfileAction {
  type: typeof REFRESH_FAVORITES_PROFILE;
  payload: { count: string }[];
}

export interface RefreshFavoritesProfileMinusAction {
  type: typeof REFRESH_FAVORITES_PROFILE_MINUS;
}

export interface RefreshFavoritesProfilePlusAction {
  type: typeof REFRESH_FAVORITES_PROFILE_PLUS;
}

export interface RefreshShoppingCartProfileAction {
  type: typeof REFRESH_SHOPPING_CART_PROFILE;
  payload: { count: string }[];
}

export interface RefreshShoppingCartProfileMinusAction {
  type: typeof REFRESH_SHOPPING_CART_PROFILE_MINUS;
}

export interface RefreshShoppingCartProfilePlusAction {
  type: typeof REFRESH_SHOPPING_CART_PROFILE_PLUS;
}

export interface RefreshFavoritesListAction {
  type: typeof REFRESH_FAVORITES_LIST;
  payload: number[];
}

export interface AddFavoritesListAction {
  type: typeof ADD_FAVORITES_LIST;
  payload: number;
}

export interface DelFavoriteFromListAction {
  type: typeof DEL_FAVORITE_FROM_LIST;
  payload: number;
}

export interface SetDelFavoriteAction {
  type: typeof SET_DEL_FAVORITE;
  payload: string;
}

export interface RefreshShoppingCartListAction {
  type: typeof REFRESH_SHOPPING_CART_LIST;
  payload: number[];
}

export interface AddShoppingCartFromListAction {
  type: typeof ADD_SHOPPING_CART_FROM_LIST;
  payload: number;
}

export interface DelShoppingCartFromListAction {
  type: typeof DEL_SHOPPING_CART_FROM_LIST;
  payload: number;
}

export interface SetDelShoppingCartAction {
  type: typeof SET_DEL_SHOPPING_CART;
  payload: string;
}

export interface RefreshCardsListAction {
  type: typeof REFRESH_CARDS_LIST;
  payload: CreditCard[];
}

export interface RefreshCardAction {
  type: typeof REFRESH_CARD;
  payload: string;
}

export interface RefreshOrderNumberAction {
  type: typeof REFRESH_ORDER_NUMBER;
  payload: string;
}

export interface RefreshOrderCodeAction {
  type: typeof REFRESH_ORDER_CODE;
  payload: string;
}

export interface RefreshShopProductsAction {
  type: typeof REFRESH_SHOP_PRODUCTS;
  payload: number[];
}

export interface RefreshPointsAction {
  type: typeof REFRESH_POINTS;
  payload: string;
}

export interface RefreshNowProductAction {
  type: typeof REFRESH_NOW_PRODUCT;
  payload: string;
}

export interface RefreshNowReviewAction {
  type: typeof REFRESH_NOW_REVIEW;
  payload: string;
}

export type ProfileActionTypes =
  | RefreshBaseProfileAction
  | RefreshRequestProfileAction
  | RefreshFavoritesProfileAction
  | RefreshFavoritesProfileMinusAction
  | RefreshFavoritesProfilePlusAction
  | RefreshShoppingCartProfileAction
  | RefreshShoppingCartProfileMinusAction
  | RefreshShoppingCartProfilePlusAction
  | RefreshFavoritesListAction
  | AddFavoritesListAction
  | DelFavoriteFromListAction
  | SetDelFavoriteAction
  | RefreshShoppingCartListAction
  | AddShoppingCartFromListAction
  | DelShoppingCartFromListAction
  | SetDelShoppingCartAction
  | RefreshCardsListAction
  | RefreshCardAction
  | RefreshOrderNumberAction
  | RefreshOrderCodeAction
  | RefreshShopProductsAction
  | RefreshPointsAction
  | RefreshNowProductAction
  | RefreshNowReviewAction;
