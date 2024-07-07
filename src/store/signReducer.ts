import {
  SignState,
  SignActionTypes,
  REFRESH_MAIL,
  REFRESH_TOKEN,
  REFRESH_SIGN_STATE,
  REFRESH_PROFILE,
  RefreshMailAction,
  RefreshTokenAction,
  RefreshSignStateAction,
  RefreshProfileAction,
} from './types/signReducer';

const defaultState: SignState = {
  mail: '',
  token: '',
  signState: '',
  profile: '',
};

export const signReducer = (state: SignState = defaultState, action: SignActionTypes): SignState => {
  switch (action.type) {
    case REFRESH_MAIL:
      return { ...state, mail: action.payload };
    case REFRESH_TOKEN:
      return { ...state, token: action.payload };
    case REFRESH_SIGN_STATE:
      return { ...state, signState: action.payload };
    case REFRESH_PROFILE:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};

export const refreshMailAction = (payload: string): RefreshMailAction => ({
  type: REFRESH_MAIL,
  payload,
});

export const refreshTokenAction = (payload: string): RefreshTokenAction => ({
  type: REFRESH_TOKEN,
  payload,
});

export const refreshSignStateAction = (payload: string): RefreshSignStateAction => ({
  type: REFRESH_SIGN_STATE,
  payload,
});

export const refreshProfileAction = (payload: string): RefreshProfileAction => ({
  type: REFRESH_PROFILE,
  payload,
});
