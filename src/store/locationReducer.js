const defaultState = {
  location: 'Global',
};

const REFRESH_LOCATION = 'REFRESH_LOCATION';

export const locationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REFRESH_LOCATION:
      return { ...state, location: action.payload };
    default:
      return state;
  }
};

export const refreshLocationAction = (payload) => ({ type: REFRESH_LOCATION, payload });
