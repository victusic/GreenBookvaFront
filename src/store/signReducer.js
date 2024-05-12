const defaultState = {
  mail: '',
  token: '',
  signState: '',
  profile: '',
};

const REFRESH_MAIL = 'REFRESH_MAIL';
const REFRESH_TOKEN = 'REFRESH_TOKEN';
const REFRESH_SIGN_STATE = 'REFRESH_SIGN_STATE';
const REFRESH_PROFILE = 'REFRESH_PROFILE';

export const signReducer = (state = defaultState, action) => {
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

export const refreshMailAction = (payload) => ({ type: REFRESH_MAIL, payload });
export const refreshTokenAction = (payload) => ({ type: REFRESH_TOKEN, payload });
export const refreshSignStateAction = (payload) => ({ type: REFRESH_SIGN_STATE, payload });
export const refreshProfileAction = (payload) => ({ type: REFRESH_PROFILE, payload });
