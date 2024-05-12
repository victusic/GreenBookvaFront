const defaultState = {
  modalVisible: false,
  modalSignVisible: false,
  modalSignCodeVisible: false,
  modalSignUpVisible: false,
  modalSignUpFinishVisible: false,
  modalUpdateProfileVisible: false,
  modalDeleteProfileVisible: false,
  modalViewCartVisible: false,
  modalDeleteCartVisible: false,
  modalAddCartVisible: false,
  modalCheckCodeVisible: false,
  modalOrderVisible: false,
  modalPayVisible: false,
  modalProductLimitVisible: false,
  modalAddReviewVisible: false,
  modalUpdateReviewVisible: false,
  modalDeleteReviewVisible: false,
  modalCookieInfoVisible: false,
};

const REFRESH_MODAL_VISIBLE = 'REFRESH_MODAL_VISIBLE';
const REFRESH_MODAL_SIGN_VISIBLE = 'REFRESH_MODAL_SIGN_VISIBLE';
const REFRESH_MODAL_SIGN_CODE_VISIBLE = 'REFRESH_MODAL_SIGN_CODE_VISIBLE';
const REFRESH_MODAL_SIGN_UP_VISIBLE = 'REFRESH_MODAL_SIGN_UP_VISIBLE';
const REFRESH_MODAL_SIGN_UP_FINISH_VISIBLE = 'REFRESH_MODAL_SIGN_UP_FINISH_VISIBLE';
const REFRESH_MODAL_UPDATE_PROFILE_VISIBLE = 'REFRESH_MODAL_UPDATE_PROFILE_VISIBLE';
const REFRESH_MODAL_DELETE_PROFILE_VISIBLE = 'REFRESH_MODAL_DELETE_PROFILE_VISIBLE';
const REFRESH_MODAL_VIEW_CART_VISIBLE = 'REFRESH_MODAL_VIEW_CART_VISIBLE';
const REFRESH_MODAL_DELETE_CART_VISIBLE = 'REFRESH_MODAL_DELETE_CART_VISIBLE';
const REFRESH_MODAL_ADD_CART_VISIBLE = 'REFRESH_MODAL_ADD_CART_VISIBLE';
const REFRESH_MODAL_CHECK_CODE_VISIBLE = 'REFRESH_MODAL_CHECK_CODE_VISIBLE';
const REFRESH_MODAL_ORDER_VISIBLE = 'REFRESH_MODAL_ORDER_VISIBLE';
const REFRESH_MODAL_PAY_VISIBLE = 'REFRESH_MODAL_PAY_VISIBLE';
const REFRESH_MODAL_PRODUCT_LIMIT_VISIBLE = 'REFRESH_MODAL_PRODUCT_LIMIT_VISIBLE';
const REFRESH_MODAL_ADD_REVIEW_VISIBLE = 'REFRESH_MODAL_ADD_REVIEW_VISIBLE';
const REFRESH_MODAL_UPDATE_REVIEW_VISIBLE = 'REFRESH_MODAL_UPDATE_REVIEW_VISIBLE';
const REFRESH_MODAL_DELETE_REVIEW_VISIBLE = 'REFRESH_MODAL_DELETE_REVIEW_VISIBLE';
const REFRESH_MODAL_INFO_COOKIE_VISIBLE = 'REFRESH_MODAL_INFO_COOKIE_VISIBLE';

export const modalVisibleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REFRESH_MODAL_SIGN_VISIBLE:
      return { ...state, modalSignVisible: action.payload, modalVisible: action.payload };
    case REFRESH_MODAL_SIGN_CODE_VISIBLE:
      return { ...state, modalSignCodeVisible: action.payload, modalVisible: action.payload };
    case REFRESH_MODAL_SIGN_UP_VISIBLE:
      return { ...state, modalSignUpVisible: action.payload, modalVisible: action.payload };
    case REFRESH_MODAL_SIGN_UP_FINISH_VISIBLE:
      return { ...state, modalSignUpFinishVisible: action.payload, modalVisible: action.payload };
    case REFRESH_MODAL_UPDATE_PROFILE_VISIBLE:
      return { ...state, modalUpdateProfileVisible: action.payload, modalVisible: action.payload };
    case REFRESH_MODAL_DELETE_PROFILE_VISIBLE:
      return { ...state, modalDeleteProfileVisible: action.payload, modalVisible: action.payload };
    case REFRESH_MODAL_VIEW_CART_VISIBLE:
      return { ...state, modalViewCartVisible: action.payload, modalVisible: action.payload };
    case REFRESH_MODAL_DELETE_CART_VISIBLE:
      return { ...state, modalDeleteCartVisible: action.payload, modalVisible: action.payload };
    case REFRESH_MODAL_ADD_CART_VISIBLE:
      return { ...state, modalAddCartVisible: action.payload, modalVisible: action.payload };
    case REFRESH_MODAL_CHECK_CODE_VISIBLE:
      return { ...state, modalCheckCodeVisible: action.payload, modalVisible: action.payload };
    case REFRESH_MODAL_ORDER_VISIBLE:
      return { ...state, modalOrderVisible: action.payload, modalVisible: action.payload };
    case REFRESH_MODAL_PAY_VISIBLE:
      return { ...state, modalPayVisible: action.payload, modalVisible: action.payload };
    case REFRESH_MODAL_PRODUCT_LIMIT_VISIBLE:
      return { ...state, modalProductLimitVisible: action.payload, modalVisible: action.payload };
    case REFRESH_MODAL_ADD_REVIEW_VISIBLE:
      return { ...state, modalAddReviewVisible: action.payload, modalVisible: action.payload };
    case REFRESH_MODAL_UPDATE_REVIEW_VISIBLE:
      return { ...state, modalUpdateReviewVisible: action.payload, modalVisible: action.payload };
    case REFRESH_MODAL_DELETE_REVIEW_VISIBLE:
      return { ...state, modalDeleteReviewVisible: action.payload, modalVisible: action.payload };
    case REFRESH_MODAL_INFO_COOKIE_VISIBLE:
      return { ...state, modalCookieInfoVisible: action.payload, modalVisible: action.payload };
    case REFRESH_MODAL_VISIBLE:
      return {
        ...state,
        modalVisible: false,
        modalSignVisible: false,
        modalSignCodeVisible: false,
        modalSignUpVisible: false,
        modalSignUpFinishVisible: false,
        modalUpdateProfileVisible: false,
        modalDeleteProfileVisible: false,
        modalViewCartVisible: false,
        modalDeleteCartVisible: false,
        modalAddCartVisible: false,
        modalCheckCodeVisible: false,
        modalOrderVisible: false,
        modalProductLimitVisible: false,
        modalPayVisible: false,
        modalAddReviewVisible: false,
        modalUpdateReviewVisible: false,
        modalDeleteReviewVisible: false,
        modalCookieInfoVisible: false,
      };
    default:
      return state;
  }
};

export const refreshModalSIgnVisibleAction = (payload) => ({ type: REFRESH_MODAL_SIGN_VISIBLE, payload });
export const refreshModalSIgnCodeVisibleAction = (payload) => ({
  type: REFRESH_MODAL_SIGN_CODE_VISIBLE,
  payload,
});
export const refreshModalSIgnUpVisibleAction = (payload) => ({
  type: REFRESH_MODAL_SIGN_UP_VISIBLE,
  payload,
});
export const refreshModalSIgnUpFihishVisibleAction = (payload) => ({
  type: REFRESH_MODAL_SIGN_UP_FINISH_VISIBLE,
  payload,
});
export const refreshModalVisibleAction = () => ({ type: REFRESH_MODAL_VISIBLE });
export const refreshModalUpdateProfileAction = (payload) => ({
  type: REFRESH_MODAL_UPDATE_PROFILE_VISIBLE,
  payload,
});
export const refreshModalDeleteProfileAction = (payload) => ({
  type: REFRESH_MODAL_DELETE_PROFILE_VISIBLE,
  payload,
});
export const refreshModalViewCartAction = (payload) => ({ type: REFRESH_MODAL_VIEW_CART_VISIBLE, payload });
export const refreshModalDeleteCartAction = (payload) => ({
  type: REFRESH_MODAL_DELETE_CART_VISIBLE,
  payload,
});
export const refreshAddCartAction = (payload) => ({ type: REFRESH_MODAL_ADD_CART_VISIBLE, payload });
export const refreshCheckCodeAction = (payload) => ({ type: REFRESH_MODAL_CHECK_CODE_VISIBLE, payload });
export const refreshModalOrderAction = (payload) => ({ type: REFRESH_MODAL_ORDER_VISIBLE, payload });
export const refreshModalPayAction = (payload) => ({ type: REFRESH_MODAL_PAY_VISIBLE, payload });
export const refreshModalProductLimtAction = (payload) => ({
  type: REFRESH_MODAL_PRODUCT_LIMIT_VISIBLE,
  payload,
});
export const refreshModalAddReviewAction = (payload) => ({ type: REFRESH_MODAL_ADD_REVIEW_VISIBLE, payload });
export const refreshModalUpdateReviewAction = (payload) => ({
  type: REFRESH_MODAL_UPDATE_REVIEW_VISIBLE,
  payload,
});
export const refreshModalDeleteReviewAction = (payload) => ({
  type: REFRESH_MODAL_DELETE_REVIEW_VISIBLE,
  payload,
});
export const refreshModalInfoCookieAction = (payload) => ({
  type: REFRESH_MODAL_INFO_COOKIE_VISIBLE,
  payload,
});
