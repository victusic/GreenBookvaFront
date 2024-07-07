export interface ModalState {
  modalVisible: boolean;
  modalSignVisible: boolean;
  modalSignCodeVisible: boolean;
  modalSignUpVisible: boolean;
  modalSignUpFinishVisible: boolean;
  modalUpdateProfileVisible: boolean;
  modalDeleteProfileVisible: boolean;
  modalViewCartVisible: boolean;
  modalDeleteCartVisible: boolean;
  modalAddCartVisible: boolean;
  modalCheckCodeVisible: boolean;
  modalOrderVisible: boolean;
  modalPayVisible: boolean;
  modalProductLimitVisible: boolean;
  modalAddReviewVisible: boolean;
  modalUpdateReviewVisible: boolean;
  modalDeleteReviewVisible: boolean;
  modalCookieInfoVisible: boolean;
}

export const REFRESH_MODAL_VISIBLE = 'REFRESH_MODAL_VISIBLE';
export const REFRESH_MODAL_SIGN_VISIBLE = 'REFRESH_MODAL_SIGN_VISIBLE';
export const REFRESH_MODAL_SIGN_CODE_VISIBLE = 'REFRESH_MODAL_SIGN_CODE_VISIBLE';
export const REFRESH_MODAL_SIGN_UP_VISIBLE = 'REFRESH_MODAL_SIGN_UP_VISIBLE';
export const REFRESH_MODAL_SIGN_UP_FINISH_VISIBLE = 'REFRESH_MODAL_SIGN_UP_FINISH_VISIBLE';
export const REFRESH_MODAL_UPDATE_PROFILE_VISIBLE = 'REFRESH_MODAL_UPDATE_PROFILE_VISIBLE';
export const REFRESH_MODAL_DELETE_PROFILE_VISIBLE = 'REFRESH_MODAL_DELETE_PROFILE_VISIBLE';
export const REFRESH_MODAL_VIEW_CART_VISIBLE = 'REFRESH_MODAL_VIEW_CART_VISIBLE';
export const REFRESH_MODAL_DELETE_CART_VISIBLE = 'REFRESH_MODAL_DELETE_CART_VISIBLE';
export const REFRESH_MODAL_ADD_CART_VISIBLE = 'REFRESH_MODAL_ADD_CART_VISIBLE';
export const REFRESH_MODAL_CHECK_CODE_VISIBLE = 'REFRESH_MODAL_CHECK_CODE_VISIBLE';
export const REFRESH_MODAL_ORDER_VISIBLE = 'REFRESH_MODAL_ORDER_VISIBLE';
export const REFRESH_MODAL_PAY_VISIBLE = 'REFRESH_MODAL_PAY_VISIBLE';
export const REFRESH_MODAL_PRODUCT_LIMIT_VISIBLE = 'REFRESH_MODAL_PRODUCT_LIMIT_VISIBLE';
export const REFRESH_MODAL_ADD_REVIEW_VISIBLE = 'REFRESH_MODAL_ADD_REVIEW_VISIBLE';
export const REFRESH_MODAL_UPDATE_REVIEW_VISIBLE = 'REFRESH_MODAL_UPDATE_REVIEW_VISIBLE';
export const REFRESH_MODAL_DELETE_REVIEW_VISIBLE = 'REFRESH_MODAL_DELETE_REVIEW_VISIBLE';
export const REFRESH_MODAL_INFO_COOKIE_VISIBLE = 'REFRESH_MODAL_INFO_COOKIE_VISIBLE';

export interface RefreshModalVisibleAction {
  type: typeof REFRESH_MODAL_VISIBLE;
}

export interface RefreshModalSignVisibleAction {
  type: typeof REFRESH_MODAL_SIGN_VISIBLE;
  payload: boolean;
}

export interface RefreshModalSignCodeVisibleAction {
  type: typeof REFRESH_MODAL_SIGN_CODE_VISIBLE;
  payload: boolean;
}

export interface RefreshModalSignUpVisibleAction {
  type: typeof REFRESH_MODAL_SIGN_UP_VISIBLE;
  payload: boolean;
}

export interface RefreshModalSignUpFinishVisibleAction {
  type: typeof REFRESH_MODAL_SIGN_UP_FINISH_VISIBLE;
  payload: boolean;
}

export interface RefreshModalUpdateProfileVisibleAction {
  type: typeof REFRESH_MODAL_UPDATE_PROFILE_VISIBLE;
  payload: boolean;
}

export interface RefreshModalDeleteProfileVisibleAction {
  type: typeof REFRESH_MODAL_DELETE_PROFILE_VISIBLE;
  payload: boolean;
}

export interface RefreshModalViewCartVisibleAction {
  type: typeof REFRESH_MODAL_VIEW_CART_VISIBLE;
  payload: boolean;
}

export interface RefreshModalDeleteCartVisibleAction {
  type: typeof REFRESH_MODAL_DELETE_CART_VISIBLE;
  payload: boolean;
}

export interface RefreshModalAddCartVisibleAction {
  type: typeof REFRESH_MODAL_ADD_CART_VISIBLE;
  payload: boolean;
}

export interface RefreshModalCheckCodeVisibleAction {
  type: typeof REFRESH_MODAL_CHECK_CODE_VISIBLE;
  payload: boolean;
}

export interface RefreshModalOrderVisibleAction {
  type: typeof REFRESH_MODAL_ORDER_VISIBLE;
  payload: boolean;
}

export interface RefreshModalPayVisibleAction {
  type: typeof REFRESH_MODAL_PAY_VISIBLE;
  payload: boolean;
}

export interface RefreshModalProductLimitVisibleAction {
  type: typeof REFRESH_MODAL_PRODUCT_LIMIT_VISIBLE;
  payload: boolean;
}

export interface RefreshModalAddReviewVisibleAction {
  type: typeof REFRESH_MODAL_ADD_REVIEW_VISIBLE;
  payload: boolean;
}

export interface RefreshModalUpdateReviewVisibleAction {
  type: typeof REFRESH_MODAL_UPDATE_REVIEW_VISIBLE;
  payload: boolean;
}

export interface RefreshModalDeleteReviewVisibleAction {
  type: typeof REFRESH_MODAL_DELETE_REVIEW_VISIBLE;
  payload: boolean;
}

export interface RefreshModalCookieInfoVisibleAction {
  type: typeof REFRESH_MODAL_INFO_COOKIE_VISIBLE;
  payload: boolean;
}

export type ModalActionTypes =
  | RefreshModalVisibleAction
  | RefreshModalSignVisibleAction
  | RefreshModalSignCodeVisibleAction
  | RefreshModalSignUpVisibleAction
  | RefreshModalSignUpFinishVisibleAction
  | RefreshModalUpdateProfileVisibleAction
  | RefreshModalDeleteProfileVisibleAction
  | RefreshModalViewCartVisibleAction
  | RefreshModalDeleteCartVisibleAction
  | RefreshModalAddCartVisibleAction
  | RefreshModalCheckCodeVisibleAction
  | RefreshModalOrderVisibleAction
  | RefreshModalPayVisibleAction
  | RefreshModalProductLimitVisibleAction
  | RefreshModalAddReviewVisibleAction
  | RefreshModalUpdateReviewVisibleAction
  | RefreshModalDeleteReviewVisibleAction
  | RefreshModalCookieInfoVisibleAction;
