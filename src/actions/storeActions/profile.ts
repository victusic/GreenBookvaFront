import { useSelector } from 'react-redux';
import { refreshModalVisibleAction } from '../../store/modalVisibleReducer';
import {
  refreshProfileBaseAction,
  refreshProfileFavoritesAction,
  refreshProfileShoppingCartAction,
  refreshProfileFavoritesListAction,
  refreshProfileShoppingCartListAction,
  refreshProfileCardsListAction,
  refreshProfileRequestAction,
} from '../../store/profileReducer';
import { RootState } from '../../store';

export const fetchProfileBase = (id) => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  return function (dispatchProfile) {
    fetch(`${apiUrl}profile/` + id)
      .then((response) => response.json())
      .then((json) => dispatchProfile(refreshProfileBaseAction(json)));
  };
};

export const fetchProfileFavorites = (id) => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  return function (dispatchProfile) {
    fetch(`${apiUrl}favorites/` + id + '/count')
      .then((response) => response.json())
      .then((json) => dispatchProfile(refreshProfileFavoritesAction(json)));
  };
};

export const fetchProfileShoppingCart = (id) => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  return function (dispatchProfile) {
    fetch(`${apiUrl}shopping_cart/` + id + '/count')
      .then((response) => response.json())
      .then((json) => dispatchProfile(refreshProfileShoppingCartAction(json)));
  };
};

export const fetchProfileFavoritesList = (id) => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  return function (dispatchProfile) {
    fetch(`${apiUrl}favorites/` + id + '/check')
      .then((response) => response.json())
      .then((json) => dispatchProfile(refreshProfileFavoritesListAction(json)));
  };
};

export const fetchProfileShoppingCartList = (id) => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  return function (dispatchProfile) {
    fetch(`${apiUrl}shopping_cart/` + id + '/check')
      .then((response) => response.json())
      .then((json) => dispatchProfile(refreshProfileShoppingCartListAction(json)));
  };
};

export const fetchProfileCardsList = (id) => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  return function (dispatchProfile) {
    fetch(`${apiUrl}profile/` + id + '/cards')
      .then((response) => response.json())
      .then((json) => dispatchProfile(refreshProfileCardsListAction(json)));
  };
};

export const fetchRefreshProfile = (id, name, surname, color, image, birthday) => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  return function (dispatch) {
    const requestData = {
      name: name,
      surname: surname,
      color: color,
      image: image,
      birthday: birthday,
    };

    fetch(`${apiUrl}profile/` + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    }).then(() => {
      dispatch(refreshProfileRequestAction([id, name, surname, color, image, birthday]));
      dispatch(refreshModalVisibleAction());
    });
  };
};

export const fetchDeleteProfile = (id) => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  return function () {
    fetch(`${apiUrl}profile/` + id, { method: 'DELETE' }).then(() =>
      window.location.reload(),
    );
  };
};

export const fetchUpdateCard = (id, number, date) => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  const requestData = {
    code: number,
    monthyear: date,
  };

  return function () {
    fetch(`${apiUrl}card/` + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    }).then(() => window.location.reload());
  };
};

export const fetchDeleteCard = (id) => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  return function () {
    fetch(`${apiUrl}card/` + id, { method: 'DELETE' }).then(() =>
      window.location.reload(),
    );
  };
};

export const fetchAddCard = (id: string, number: string, date: string, accountId: string) => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  const requestData = {
    code: number,
    monthYear: date,
    accountId: accountId,
  };

  return function () {
    fetch(`${apiUrl}card/` + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    }).then(() => window.location.reload());
  };
};
