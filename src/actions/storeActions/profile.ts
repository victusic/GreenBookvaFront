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

export const fetchProfileBase = (id) => {
  return function (dispatchProfile) {
    fetch('https://db.greenbookva.shop/profile/' + id)
      .then((response) => response.json())
      .then((json) => dispatchProfile(refreshProfileBaseAction(json)));
  };
};

export const fetchProfileFavorites = (id) => {
  return function (dispatchProfile) {
    fetch('https://db.greenbookva.shop/favorites/' + id + '/count')
      .then((response) => response.json())
      .then((json) => dispatchProfile(refreshProfileFavoritesAction(json)));
  };
};

export const fetchProfileShoppingCart = (id) => {
  return function (dispatchProfile) {
    fetch('https://db.greenbookva.shop/shopping_cart/' + id + '/count')
      .then((response) => response.json())
      .then((json) => dispatchProfile(refreshProfileShoppingCartAction(json)));
  };
};

export const fetchProfileFavoritesList = (id) => {
  return function (dispatchProfile) {
    fetch('https://db.greenbookva.shop/favorites/' + id + '/check')
      .then((response) => response.json())
      .then((json) => dispatchProfile(refreshProfileFavoritesListAction(json)));
  };
};

export const fetchProfileShoppingCartList = (id) => {
  return function (dispatchProfile) {
    fetch('https://db.greenbookva.shop/shopping_cart/' + id + '/check')
      .then((response) => response.json())
      .then((json) => dispatchProfile(refreshProfileShoppingCartListAction(json)));
  };
};

export const fetchProfileCardsList = (id) => {
  return function (dispatchProfile) {
    fetch('https://db.greenbookva.shop/profile/' + id + '/cards')
      .then((response) => response.json())
      .then((json) => dispatchProfile(refreshProfileCardsListAction(json)));
  };
};

export const fetchRefreshProfile = (id, name, surname, color, image, birthday) => {
  return function (dispatch) {
    const requestData = {
      name: name,
      surname: surname,
      color: color,
      image: image,
      birthday: birthday,
    };

    fetch('https://db.greenbookva.shop/profile/' + id, {
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
  return function () {
    fetch('https://db.greenbookva.shop/profile/' + id, { method: 'DELETE' }).then(() =>
      window.location.reload(),
    );
  };
};

export const fetchUpdateCard = (id, number, date) => {
  const requestData = {
    code: number,
    monthyear: date,
  };

  return function () {
    fetch('https://db.greenbookva.shop/card/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    }).then(() => window.location.reload());
  };
};

export const fetchDeleteCard = (id) => {
  return function () {
    fetch('https://db.greenbookva.shop/card/' + id, { method: 'DELETE' }).then(() =>
      window.location.reload(),
    );
  };
};

export const fetchAddCard = (id: string, number: string, date: string, accountId: string) => {
  const requestData = {
    code: number,
    monthYear: date,
    accountId: accountId,
  };

  return function () {
    fetch('https://db.greenbookva.shop/card/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    }).then(() => window.location.reload());
  };
};
