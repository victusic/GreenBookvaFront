import {
  ModalState,
  ModalActionTypes,
  REFRESH_MODAL_SIGN_VISIBLE,
  REFRESH_MODAL_SIGN_CODE_VISIBLE,
  REFRESH_MODAL_SIGN_UP_VISIBLE,
  REFRESH_MODAL_SIGN_UP_FINISH_VISIBLE,
  REFRESH_MODAL_UPDATE_PROFILE_VISIBLE,
  REFRESH_MODAL_DELETE_PROFILE_VISIBLE,
  REFRESH_MODAL_VIEW_CART_VISIBLE,
  REFRESH_MODAL_DELETE_CART_VISIBLE,
  REFRESH_MODAL_ADD_CART_VISIBLE,
  REFRESH_MODAL_CHECK_CODE_VISIBLE,
  REFRESH_MODAL_ORDER_VISIBLE,
  REFRESH_MODAL_PAY_VISIBLE,
  REFRESH_MODAL_PRODUCT_LIMIT_VISIBLE,
  REFRESH_MODAL_ADD_REVIEW_VISIBLE,
  REFRESH_MODAL_UPDATE_REVIEW_VISIBLE,
  REFRESH_MODAL_DELETE_REVIEW_VISIBLE,
  REFRESH_MODAL_INFO_COOKIE_VISIBLE,
  REFRESH_MODAL_VISIBLE,
  RefreshModalSignVisibleAction,
  RefreshModalSignCodeVisibleAction,
  RefreshModalSignUpVisibleAction,
  RefreshModalSignUpFinishVisibleAction,
  RefreshModalVisibleAction,
  RefreshModalUpdateProfileVisibleAction,
  RefreshModalDeleteProfileVisibleAction,
  RefreshModalViewCartVisibleAction,
  RefreshModalDeleteCartVisibleAction,
  RefreshModalAddCartVisibleAction,
  RefreshModalCheckCodeVisibleAction,
  RefreshModalOrderVisibleAction,
  RefreshModalPayVisibleAction,
  RefreshModalProductLimitVisibleAction,
  RefreshModalAddReviewVisibleAction,
  RefreshModalUpdateReviewVisibleAction,
  RefreshModalDeleteReviewVisibleAction,
  RefreshModalCookieInfoVisibleAction,
} from './types/modalVisibleReducer';

const defaultState: ModalState = {
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

export const modalVisibleReducer = (
  state: ModalState = defaultState,
  action: ModalActionTypes,
): ModalState => {
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

export const refreshModalSIgnVisibleAction = (payload: boolean): RefreshModalSignVisibleAction => ({
  type: REFRESH_MODAL_SIGN_VISIBLE,
  payload,
});

export const refreshModalSIgnCodeVisibleAction = (payload: boolean): RefreshModalSignCodeVisibleAction => ({
  type: REFRESH_MODAL_SIGN_CODE_VISIBLE,
  payload,
});

export const refreshModalSIgnUpVisibleAction = (payload: boolean): RefreshModalSignUpVisibleAction => ({
  type: REFRESH_MODAL_SIGN_UP_VISIBLE,
  payload,
});

export const refreshModalSIgnUpFihishVisibleAction = (
  payload: boolean,
): RefreshModalSignUpFinishVisibleAction => ({
  type: REFRESH_MODAL_SIGN_UP_FINISH_VISIBLE,
  payload,
});

export const refreshModalVisibleAction = (): RefreshModalVisibleAction => ({ type: REFRESH_MODAL_VISIBLE });

export const refreshModalUpdateProfileAction = (
  payload: boolean,
): RefreshModalUpdateProfileVisibleAction => ({
  type: REFRESH_MODAL_UPDATE_PROFILE_VISIBLE,
  payload,
});

export const refreshModalDeleteProfileAction = (
  payload: boolean,
): RefreshModalDeleteProfileVisibleAction => ({
  type: REFRESH_MODAL_DELETE_PROFILE_VISIBLE,
  payload,
});

export const refreshModalViewCartAction = (payload: boolean): RefreshModalViewCartVisibleAction => ({
  type: REFRESH_MODAL_VIEW_CART_VISIBLE,
  payload,
});

export const refreshModalDeleteCartAction = (payload: boolean): RefreshModalDeleteCartVisibleAction => ({
  type: REFRESH_MODAL_DELETE_CART_VISIBLE,
  payload,
});

export const refreshModalAddCartAction = (payload: boolean): RefreshModalAddCartVisibleAction => ({
  type: REFRESH_MODAL_ADD_CART_VISIBLE,
  payload,
});

export const refreshCheckCodeAction = (payload: boolean): RefreshModalCheckCodeVisibleAction => ({
  type: REFRESH_MODAL_CHECK_CODE_VISIBLE,
  payload,
});

export const refreshModalOrderAction = (payload: boolean): RefreshModalOrderVisibleAction => ({
  type: REFRESH_MODAL_ORDER_VISIBLE,
  payload,
});

export const refreshModalPayAction = (payload: boolean): RefreshModalPayVisibleAction => ({
  type: REFRESH_MODAL_PAY_VISIBLE,
  payload,
});

export const refreshModalProductLimtAction = (payload: boolean): RefreshModalProductLimitVisibleAction => ({
  type: REFRESH_MODAL_PRODUCT_LIMIT_VISIBLE,
  payload,
});

export const refreshModalAddReviewAction = (payload: boolean): RefreshModalAddReviewVisibleAction => ({
  type: REFRESH_MODAL_ADD_REVIEW_VISIBLE,
  payload,
});

export const refreshModalUpdateReviewAction = (payload: boolean): RefreshModalUpdateReviewVisibleAction => ({
  type: REFRESH_MODAL_UPDATE_REVIEW_VISIBLE,
  payload,
});

export const refreshModalDeleteReviewAction = (payload: boolean): RefreshModalDeleteReviewVisibleAction => ({
  type: REFRESH_MODAL_DELETE_REVIEW_VISIBLE,
  payload,
});

export const refreshModalInfoCookieAction = (payload: boolean): RefreshModalCookieInfoVisibleAction => ({
  type: REFRESH_MODAL_INFO_COOKIE_VISIBLE,
  payload,
});
