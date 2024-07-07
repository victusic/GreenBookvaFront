import {
  CurrentState,
  CurrentActionTypes,
  REFRESH_CURRENT,
  RefreshCurrentAction,
} from './types/currentReducer';

const defaultState: CurrentState = {
  currentType: 1,
};

//0-тенге 1-доллар 2-рубль

export const currentReducer = (state = defaultState, action: CurrentActionTypes): CurrentState => {
  switch (action.type) {
    case REFRESH_CURRENT:
      return { ...state, currentType: action.payload };
    default:
      return state;
  }
};

export const refreshCurrentAction = (payload: number): RefreshCurrentAction => ({
  type: REFRESH_CURRENT,
  payload,
});
