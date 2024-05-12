import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from '../topLine/topLine.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { refreshLocationAction } from '../../../../store/locationReducer';
import { refreshHeadersLocationAction } from '../../../../store/headerElementsReducer';
import { refreshKztAction, refreshRubAction } from '../../../../store/exchangeRateReducer';

const Location = ({ changeCurrency }) => {
  //store локации
  const dispatchLocation = useDispatch();
  const location = useSelector((state) => state.location.location);

  //видимость
  const dispatchLocationVisible = useDispatch();
  const locationVisible = useSelector((state) => state.headersElements.location);

  //location

  const country = ['RU', 'KZ'];

  //города
  const townKz = useSelector((state) => state.townsList.KZ);
  const townRu = useSelector((state) => state.townsList.RU);

  const town = townKz.concat(townRu);

  const [indexCountry, setIndexCountry] = useState(0);
  const [indexTown, setIndexTown] = useState(0);
  const [findIndex, setFindIndex] = useState(0);

  //курсы валют

  const dispatchExchangeReducer = useDispatch();

  const fetchIpAddress = async () => {
    try {
      const response = await axios.get('http://api.sypexgeo.net/json');
      response.data.country
        ? setIndexCountry(country.indexOf(response.data.country.iso))
        : setIndexCountry(2);
      response.data.city ? setIndexTown(town.indexOf(response.data.city.name_ru)) : setIndexTown(-1);
      setFindIndex(findIndex + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchExchange = async () => {
    try {
      const response = await axios.get(
        'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usdt.json',
      );
      dispatchExchangeReducer(refreshKztAction(Math.ceil(response.data.usdt.kzt)));
      dispatchExchangeReducer(refreshRubAction(Math.ceil(response.data.usdt.rub)));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchIpAddress();
    fetchExchange();
  }, []);

  useEffect(() => {
    if (findIndex > 0) {
      let textLocation = '';
      switch (indexCountry) {
        case 0:
          textLocation = 'Россия';
          changeCurrency(2);
          break;
        case 1:
          textLocation = 'Казахстан';
          changeCurrency(0);
          break;
        default:
          textLocation = 'Global';
          changeCurrency(1);
          break;
      }

      if (indexTown !== -1) {
        textLocation += ', ' + town[indexTown];
      }
      dispatchLocation(refreshLocationAction(textLocation));
    }
  }, [findIndex]);

  return (
    <span
      className={styles.topTextLeft}
      onClick={() => dispatchLocationVisible(refreshHeadersLocationAction(!locationVisible))}
    >
      {location}
    </span>
  );
};

export default Location;
