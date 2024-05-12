const defaultState = {
  currentType: 1,
};

//0-тенге 1-доллар 2-рубль

const REFRESH_CURRENT = 'REFRESH_CURRENT';

export const currentReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REFRESH_CURRENT:
      return { ...state, currentType: action.payload };
    default:
      return state;
  }
};

export const refreshCurrentAction = (payload) => ({ type: REFRESH_CURRENT, payload });
