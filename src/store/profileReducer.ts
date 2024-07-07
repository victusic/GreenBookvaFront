import { CreditCard } from '../utils/types';
import {
  ProfileState,
  ProfileActionTypes,
  REFRESH_BASE_PROFILE,
  REFRESH_REQUEST_PROFILE,
  REFRESH_FAVORITES_PROFILE,
  REFRESH_FAVORITES_PROFILE_MINUS,
  REFRESH_FAVORITES_PROFILE_PLUS,
  REFRESH_SHOPPING_CART_PROFILE,
  REFRESH_SHOPPING_CART_PROFILE_MINUS,
  REFRESH_SHOPPING_CART_PROFILE_PLUS,
  REFRESH_FAVORITES_LIST,
  ADD_FAVORITES_LIST,
  DEL_FAVORITE_FROM_LIST,
  SET_DEL_FAVORITE,
  REFRESH_SHOPPING_CART_LIST,
  ADD_SHOPPING_CART_FROM_LIST,
  DEL_SHOPPING_CART_FROM_LIST,
  SET_DEL_SHOPPING_CART,
  REFRESH_CARDS_LIST,
  REFRESH_CARD,
  REFRESH_ORDER_NUMBER,
  REFRESH_ORDER_CODE,
  REFRESH_SHOP_PRODUCTS,
  REFRESH_POINTS,
  REFRESH_NOW_PRODUCT,
  REFRESH_NOW_REVIEW,
  RefreshBaseProfileAction,
  RefreshRequestProfileAction,
  RefreshFavoritesProfileAction,
  RefreshFavoritesProfileMinusAction,
  RefreshFavoritesProfilePlusAction,
  RefreshShoppingCartProfileAction,
  RefreshShoppingCartProfileMinusAction,
  RefreshShoppingCartProfilePlusAction,
  RefreshFavoritesListAction,
  AddFavoritesListAction,
  DelFavoriteFromListAction,
  SetDelFavoriteAction,
  RefreshShoppingCartListAction,
  AddShoppingCartFromListAction,
  DelShoppingCartFromListAction,
  SetDelShoppingCartAction,
  RefreshCardsListAction,
  RefreshCardAction,
  RefreshOrderNumberAction,
  RefreshOrderCodeAction,
  RefreshShopProductsAction,
  RefreshPointsAction,
  RefreshNowProductAction,
  RefreshNowReviewAction,
} from './types/profileReducer';

const defaultState: ProfileState = {
  id: '',
  name: '',
  surname: '',
  mail: '',
  points: '',
  newPoints: '',
  color: '',
  image: '',
  birthday: '',
  orders: '',
  favorites: 0,
  shoppingCart: 0,
  favoritesList: [],
  delFavorite: '',
  shoppingCartList: [],
  delShoppingCart: '',
  cardsList: [],
  card: '',
  orderNumber: '',
  orderCode: '',
  shopProducts: [],
  nowProduct: '',
  nowReview: '',
};

export const profileReducer = (
  state: ProfileState = defaultState,
  action: ProfileActionTypes,
): ProfileState => {
  switch (action.type) {
    case REFRESH_BASE_PROFILE:
      return {
        ...state,
        id: action.payload[0].id,
        name: action.payload[0].name,
        surname: action.payload[0].surname,
        mail: action.payload[0].mail,
        points: action.payload[0].points,
        color: action.payload[0].color,
        image: action.payload[0].image,
        birthday: action.payload[0].birthday,
        orders: action.payload[0].orders,
      };
    case REFRESH_REQUEST_PROFILE:
      return {
        ...state,
        id: action.payload[0],
        name: action.payload[1],
        surname: action.payload[2],
        color: action.payload[3],
        image: action.payload[4] ? action.payload[4] : state.image,
        birthday: action.payload[5],
      };
    case REFRESH_FAVORITES_PROFILE:
      return { ...state, favorites: Number(action.payload[0].count) };
    case REFRESH_FAVORITES_PROFILE_MINUS:
      return { ...state, favorites: state.favorites - 1 };
    case REFRESH_FAVORITES_PROFILE_PLUS:
      return { ...state, favorites: state.favorites + 1 };

    case REFRESH_SHOPPING_CART_PROFILE:
      return { ...state, shoppingCart: Number(action.payload[0].count) };
    case REFRESH_SHOPPING_CART_PROFILE_MINUS:
      return { ...state, shoppingCart: state.shoppingCart - 1 };
    case REFRESH_SHOPPING_CART_PROFILE_PLUS:
      return { ...state, shoppingCart: state.shoppingCart + 1 };

    case REFRESH_FAVORITES_LIST:
      return { ...state, favoritesList: action.payload };
    case ADD_FAVORITES_LIST:
      return { ...state, favoritesList: [...state.favoritesList, action.payload] };
    case DEL_FAVORITE_FROM_LIST:
      return { ...state, favoritesList: state.favoritesList.filter((item) => item !== action.payload) };

    case SET_DEL_FAVORITE:
      return { ...state, delFavorite: action.payload };

    case REFRESH_SHOPPING_CART_LIST:
      return { ...state, shoppingCartList: action.payload };
    case ADD_SHOPPING_CART_FROM_LIST:
      return { ...state, shoppingCartList: [...state.shoppingCartList, action.payload] };
    case DEL_SHOPPING_CART_FROM_LIST:
      return {
        ...state,
        shoppingCartList: state.shoppingCartList.filter((item) => item !== action.payload),
      };

    case SET_DEL_SHOPPING_CART:
      return { ...state, delShoppingCart: action.payload };

    case REFRESH_CARDS_LIST:
      return { ...state, cardsList: action.payload };
    case REFRESH_CARD:
      return { ...state, card: action.payload };
    case REFRESH_ORDER_NUMBER:
      return { ...state, orderNumber: action.payload };
    case REFRESH_ORDER_CODE:
      return { ...state, orderCode: action.payload };

    case REFRESH_SHOP_PRODUCTS:
      return { ...state, shopProducts: action.payload };
    case REFRESH_POINTS:
      return { ...state, newPoints: action.payload };

    case REFRESH_NOW_PRODUCT:
      return { ...state, nowProduct: action.payload };
    case REFRESH_NOW_REVIEW:
      return { ...state, nowReview: action.payload };
    default:
      return state;
  }
};

export const refreshProfileBaseAction = (payload: ProfileState[]): RefreshBaseProfileAction => ({
  type: REFRESH_BASE_PROFILE,
  payload,
});

export const refreshProfileRequestAction = (payload: string[]): RefreshRequestProfileAction => ({
  type: REFRESH_REQUEST_PROFILE,
  payload,
});

export const refreshProfileFavoritesAction = (
  payload: { count: string }[],
): RefreshFavoritesProfileAction => ({
  type: REFRESH_FAVORITES_PROFILE,
  payload,
});

export const refreshProfileFavoritesMinusAction = (): RefreshFavoritesProfileMinusAction => ({
  type: REFRESH_FAVORITES_PROFILE_MINUS,
});

export const refreshProfileFavoritesPlusAction = (): RefreshFavoritesProfilePlusAction => ({
  type: REFRESH_FAVORITES_PROFILE_PLUS,
});

export const refreshProfileShoppingCartAction = (
  payload: { count: string }[],
): RefreshShoppingCartProfileAction => ({
  type: REFRESH_SHOPPING_CART_PROFILE,
  payload,
});

export const refreshProfileShoppingCartMinusAction = (): RefreshShoppingCartProfileMinusAction => ({
  type: REFRESH_SHOPPING_CART_PROFILE_MINUS,
});

export const refreshProfileShoppingCartPlusAction = (): RefreshShoppingCartProfilePlusAction => ({
  type: REFRESH_SHOPPING_CART_PROFILE_PLUS,
});

export const refreshProfileFavoritesListAction = (payload: number[]): RefreshFavoritesListAction => ({
  type: REFRESH_FAVORITES_LIST,
  payload,
});

export const addProfileFavoriteFromListAction = (payload: number): AddFavoritesListAction => ({
  type: ADD_FAVORITES_LIST,
  payload,
});

export const delProfileFavoriteFromListAction = (payload: number): DelFavoriteFromListAction => ({
  type: DEL_FAVORITE_FROM_LIST,
  payload,
});

export const refreshDelFavorite = (payload: string): SetDelFavoriteAction => ({
  type: SET_DEL_FAVORITE,
  payload,
});

export const refreshProfileShoppingCartListAction = (payload: number[]): RefreshShoppingCartListAction => ({
  type: REFRESH_SHOPPING_CART_LIST,
  payload,
});

export const addProfileShoppingCartFromListAction = (payload: number): AddShoppingCartFromListAction => ({
  type: ADD_SHOPPING_CART_FROM_LIST,
  payload,
});

export const delProfileShoppingCartFromListAction = (payload: number): DelShoppingCartFromListAction => ({
  type: DEL_SHOPPING_CART_FROM_LIST,
  payload,
});

export const refreshDelShoppingCart = (payload: string): SetDelShoppingCartAction => ({
  type: SET_DEL_SHOPPING_CART,
  payload,
});

export const refreshProfileCardsListAction = (payload: CreditCard[]): RefreshCardsListAction => ({
  type: REFRESH_CARDS_LIST,
  payload,
});

export const refreshProfileCardAction = (payload: string): RefreshCardAction => ({
  type: REFRESH_CARD,
  payload,
});

export const refreshOrderNumberAction = (payload: string): RefreshOrderNumberAction => ({
  type: REFRESH_ORDER_NUMBER,
  payload,
});

export const refreshOrderCodeAction = (payload: string): RefreshOrderCodeAction => ({
  type: REFRESH_ORDER_CODE,
  payload,
});

export const refreshShopProductsAction = (payload: number[]): RefreshShopProductsAction => ({
  type: REFRESH_SHOP_PRODUCTS,
  payload,
});

export const refreshPointsAction = (payload: string): RefreshPointsAction => ({
  type: REFRESH_POINTS,
  payload,
});

export const refreshNowProductAction = (payload: string): RefreshNowProductAction => ({
  type: REFRESH_NOW_PRODUCT,
  payload,
});

export const refreshNowReviewAction = (payload: string): RefreshNowReviewAction => ({
  type: REFRESH_NOW_REVIEW,
  payload,
});
