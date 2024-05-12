const defaultState = {
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
  favorites: '',
  shopping_cart: 0,
  favoritesList: [],
  delFavorite: '',
  shopping_cartList: [],
  delShopping_cart: '',
  cardsList: [],
  card: '',
  order_number: '',
  order_code: '',
  shop_products: [],
  now_product: '',
  now_review: '',
};

const REFRESH_BASE_PROFILE = 'REFRESH_BASE_PROFILE';
const REFRESH_REQUEST_PROFILE = 'REFRESH_REQUEST_PROFILE';
const REFRESH_FAVORITES_PROFILE = 'REFRESH_FAVORITES_PROFILE';
const REFRESH_FAVORITES_PROFILE_MINUS = 'REFRESH_FAVORITES_PROFILE_MINUS';
const REFRESH_FAVORITES_PROFILE_PLUS = 'REFRESH_FAVORITES_PROFILE_PLUS';
const REFRESH_SHOPPING_CART_PROFILE = 'REFRESH_SHOPPING_CART_PROFILE';
const REFRESH_SHOPPING_CART_PROFILE_MINUS = 'REFRESH_SHOPPING_CART_PROFILE_MINUS';
const REFRESH_SHOPPING_CART_PROFILE_PLUS = 'REFRESH_SHOPPING_CART_PROFILE_PLUS';
const REFRESH_FAVORITES_LIST = 'REFRESH_FAVORITES_LIST';
const ADD_FAVORITES_LIST = 'ADD_FAVORITES_LIST';
const DEL_FAVORITE_FROM_LIST = 'DEL_FAVORITE_FROM_LIST';
const SET_DEL_FAVORITE = 'SET_DEL_FAVORITE';
const REFRESH_SHOPPING_CART_LIST = 'REFRESH_SHOPPING_CART_LIST';
const ADD_SHOPPING_CART_FROM_LIST = 'ADD_SHOPPING_CART_FROM_LIST';
const DEL_SHOPPING_CART_FROM_LIST = 'DEL_SHOPPING_CART_FROM_LIST';
const SET_DEL_SHOPPING_CART = 'SET_DEL_SHOPPING_CART';
const REFRESH_CARDS_LIST = 'REFRESH_CARDS_LIST';
const REFRESH_CARD = 'REFRESH_CARD';
const REFRESH_ORDER_NUMBER = 'REFRESH_ORDER_NUMBER';
const REFRESH_ORDER_CODE = 'REFRESH_ORDER_CODE';
const REFRESH_SHOP_PRODUCTS = 'REFRESH_SHOP_PRODUCTS';
const REFRESH_POINTS = 'REFRESH_POINTS';
const REFRESH_NOW_PRODUCT = 'REFRESH_NOW_PRODUCT';
const REFRESH_NOW_REVIEW = 'REFRESH_NOW_REVIEW';

export const profileReducer = (state = defaultState, action) => {
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
      return { ...state, shopping_cart: Number(action.payload[0].count) };
    case REFRESH_SHOPPING_CART_PROFILE_MINUS:
      return { ...state, shopping_cart: state.shopping_cart - 1 };
    case REFRESH_SHOPPING_CART_PROFILE_PLUS:
      return { ...state, shopping_cart: state.shopping_cart + 1 };

    case REFRESH_FAVORITES_LIST:
      return { ...state, favoritesList: action.payload };
    case ADD_FAVORITES_LIST:
      return { ...state, favoritesList: [...state.favoritesList, { id: action.payload }] };
    case DEL_FAVORITE_FROM_LIST:
      return { ...state, favoritesList: state.favoritesList.filter((item) => item.id !== action.payload) };

    case SET_DEL_FAVORITE:
      return { ...state, delFavorite: action.payload };

    case REFRESH_SHOPPING_CART_LIST:
      return { ...state, shopping_cartList: action.payload };
    case ADD_SHOPPING_CART_FROM_LIST:
      return { ...state, shopping_cartList: [...state.shopping_cartList, { id: action.payload }] };
    case DEL_SHOPPING_CART_FROM_LIST:
      return {
        ...state,
        shopping_cartList: state.shopping_cartList.filter((item) => item.id !== action.payload),
      };

    case SET_DEL_SHOPPING_CART:
      return { ...state, delShopping_cart: action.payload };

    case REFRESH_CARDS_LIST:
      return { ...state, cardsList: action.payload };
    case REFRESH_CARD:
      return { ...state, card: action.payload };
    case REFRESH_ORDER_NUMBER:
      return { ...state, order_number: action.payload };
    case REFRESH_ORDER_CODE:
      return { ...state, order_code: action.payload };

    case REFRESH_SHOP_PRODUCTS:
      return { ...state, shop_products: action.payload };
    case REFRESH_POINTS:
      return { ...state, newPoints: action.payload };

    case REFRESH_NOW_PRODUCT:
      return { ...state, now_product: action.payload };
    case REFRESH_NOW_REVIEW:
      return { ...state, now_review: action.payload };
    default:
      return state;
  }
};

export const refreshProfileBaseAction = (payload) => ({ type: REFRESH_BASE_PROFILE, payload });
export const refreshProfileRequestAction = (payload) => ({ type: REFRESH_REQUEST_PROFILE, payload });
export const refreshProfileFavoritesAction = (payload) => ({ type: REFRESH_FAVORITES_PROFILE, payload });
export const refreshProfileFavoritesMinusAction = () => ({ type: REFRESH_FAVORITES_PROFILE_MINUS });
export const refreshProfileFavoritesPlusAction = () => ({ type: REFRESH_FAVORITES_PROFILE_PLUS });
export const refreshProfileShoppingCartAction = (payload) => ({
  type: REFRESH_SHOPPING_CART_PROFILE,
  payload,
});
export const refreshProfileShoppingCartMinusAction = () => ({ type: REFRESH_SHOPPING_CART_PROFILE_MINUS });
export const refreshProfileShoppingCartPlusAction = () => ({ type: REFRESH_SHOPPING_CART_PROFILE_PLUS });
export const refreshProfileFavoritesListAction = (payload) => ({ type: REFRESH_FAVORITES_LIST, payload });
export const addProfileFavoriteFromListAction = (payload) => ({ type: ADD_FAVORITES_LIST, payload });
export const delProfileFavoriteFromListAction = (payload) => ({ type: DEL_FAVORITE_FROM_LIST, payload });
export const refreshDelFavorite = (payload) => ({ type: SET_DEL_FAVORITE, payload });
export const refreshProfileShoppingCartListAction = (payload) => ({
  type: REFRESH_SHOPPING_CART_LIST,
  payload,
});
export const addProfileShoppingCartFromListAction = (payload) => ({
  type: ADD_SHOPPING_CART_FROM_LIST,
  payload,
});
export const delProfileShoppingCartFromListAction = (payload) => ({
  type: DEL_SHOPPING_CART_FROM_LIST,
  payload,
});
export const refreshDelShoppingCart = (payload) => ({ type: SET_DEL_SHOPPING_CART, payload });
export const refreshProfileCardsListAction = (payload) => ({ type: REFRESH_CARDS_LIST, payload });
export const refreshProfileCardAction = (payload) => ({ type: REFRESH_CARD, payload });
export const refreshOrderNumberAction = (payload) => ({ type: REFRESH_ORDER_NUMBER, payload });
export const refreshOrderCodeAction = (payload) => ({ type: REFRESH_ORDER_CODE, payload });
export const refreshShopProductsAction = (payload) => ({ type: REFRESH_SHOP_PRODUCTS, payload });
export const refreshPointsAction = (payload) => ({ type: REFRESH_POINTS, payload });
export const refreshNowProductAction = (payload) => ({ type: REFRESH_NOW_PRODUCT, payload });
export const refreshNowReviewAction = (payload) => ({ type: REFRESH_NOW_REVIEW, payload });
