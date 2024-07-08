import { locationState, RefreshLocationAction, REFRESH_LOCATION } from './types/locationReducer';

const defaultState: locationState = {
  location: 'Global',
};

export const locationReducer = (state = defaultState, action: RefreshLocationAction): locationState => {
  switch (action.type) {
    case REFRESH_LOCATION:
      return { ...state, location: action.payload };
    default:
      return state;
  }
};

export const refreshLocationAction = (payload: string): RefreshLocationAction => ({
  type: REFRESH_LOCATION,
  payload,
});
