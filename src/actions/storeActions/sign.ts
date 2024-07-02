import Cookies from 'js-cookie';

import { refreshTokenAction, refreshSignStateAction, refreshProfileAction } from '../../store/signReducer';

export const fetchSignGetCode = (mail) => {
  return function (dispatchSign) {
    fetch('https://db.greenbookva.shop/sign?mail=' + mail)
      .then((response) => response.json())
      .then((json) => dispatchSign(refreshTokenAction(json.token)))
      .catch((error) => {
        console.log(error);
      });
  };
};

export const fetchSignPostCode = (code, mail, token) => {
  return function (dispatchSign) {
    const requestData = {
      token: token,
      code: code,
      mail: mail,
    };

    fetch('https://db.greenbookva.shop/sign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.check) {
          dispatchSign(refreshSignStateAction(json.signState));
          if (json.signState === 0) {
            dispatchSign(refreshProfileAction(json.profile[0].id));
            Cookies.set('profileId', json.profile[0].id, { expires: 30 });
            Cookies.set('realCheck', true, { expires: 0.2 });
          }
        } else {
          //неправильный код
          dispatchSign(refreshSignStateAction(-5));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const fetchSignUp = (name, surname, mail) => {
  return function (dispatchSign) {
    const requestData = {
      name: name,
      surname: surname,
      mail: mail,
    };

    fetch('https://db.greenbookva.shop/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatchSign(refreshSignStateAction(2));
        dispatchSign(refreshProfileAction(json.id));
        Cookies.set('profileId', json.id, { expires: 30 });
        Cookies.set('realCheck', true, { expires: 0.2 });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const fetchCheckGetCode = (id) => {
  return function (dispatchSign) {
    fetch('https://db.greenbookva.shop/check/' + id)
      .then((response) => response.json())
      .then((json) => dispatchSign(refreshTokenAction(json.token)))
      .catch((error) => {
        console.log(error);
      });
  };
};

export const fetchCheckPostCode = (code, mail, token) => {
  return function (dispatchSign) {
    const requestData = {
      token: token,
      code: code,
      mail: mail,
    };

    fetch('https://db.greenbookva.shop/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.check) {
          dispatchSign(refreshSignStateAction(json.signState));
          Cookies.set('realCheck', true, { expires: 0.2 });
          //закрытие окна
          dispatchSign(refreshSignStateAction(-4));
        } else {
          //неправильный код
          dispatchSign(refreshSignStateAction(-5));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
