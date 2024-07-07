import React, { useState, useEffect } from 'react';

import styles from './locationPlate.module.scss';
import Pad from '../../../../ui/pad/Pad';

import { HandySvg } from 'handy-svg';
import KazakhstanSvg from '../../../../assets/svg/kazakhstan.svg';
import RussiaSvg from '../../../../assets/svg/russia.svg';
import GlovalSvg from '../../../../assets/svg/global.svg';

import { useDispatch, useSelector } from 'react-redux';
import { refreshLocationAction } from '../../../../store/locationReducer';
import { refreshCurrentAction } from '../../../../store/currentReducer';
import { refreshHeadersLocationAction } from '../../../../store/headerElementsReducer';
import { RootState } from '../../../../store';

const LocationPlate: React.FC = () => {
  //локация
  const dispatchLocation = useDispatch();

  //валюта
  const dispatchCurrent = useDispatch();
  const current = useSelector((state: RootState) => state.current.currentType);

  //видимость
  const dispatchLocationVisible = useDispatch();
  const locationVisible = useSelector((state: RootState) => state.headersElements.location);

  //города
  const townKz = useSelector((state: RootState) => state.townsList.KZ);
  const townRu = useSelector((state: RootState) => state.townsList.RU);

  const [stylePlate, setStylePlate] = useState(styles.plateHide);

  const [localLocation, setLocalLocation] = useState('');

  const [townsList, setTownsList] = useState(townRu);

  useEffect(() => {
    switch (current) {
      case 0:
        setTownsList(townKz);
        setLocalLocation('Казахстан, ');
        break;
      case 2:
        setTownsList(townRu);
        setLocalLocation('Россия, ');
        break;
      default:
        break;
    }
  }, [current]);

  useEffect(() => {
    {
      locationVisible ? setStylePlate('') : setStylePlate(styles.plateHide);
    }
  }, [locationVisible]);

  function changeLocation(type) {
    switch (type) {
      case 0:
        setTownsList(townKz);
        setLocalLocation('Казахстан, ');
        dispatchCurrent(refreshCurrentAction(0));
        break;
      case 2:
        setTownsList(townRu);
        setLocalLocation('Россия, ');
        dispatchCurrent(refreshCurrentAction(2));
        break;
      default:
        dispatchLocation(refreshLocationAction('Global'));
        dispatchCurrent(refreshCurrentAction(1));
        dispatchLocationVisible(refreshHeadersLocationAction(false));
        break;
    }
  }

  function writeLocation(town) {
    dispatchLocation(refreshLocationAction(localLocation + town['town']));
    dispatchLocationVisible(refreshHeadersLocationAction(false));
  }

  return (
    <Pad>
      <div className={styles.plate + ' ' + stylePlate}>
        <div className={styles.countriesPlate}>
          <div className={styles.countriesBox} onClick={() => changeLocation(0)}>
            <HandySvg src={KazakhstanSvg} className={styles.countriesSvg} />
            <h6 className={styles.countriesText}>Казахстан</h6>
          </div>
          <div className={styles.countriesBox} onClick={() => changeLocation(2)}>
            <HandySvg src={RussiaSvg} className={styles.countriesSvg} />
            <h6 className={styles.countriesText}>Россия</h6>
          </div>
          <div className={styles.countriesBox} onClick={() => changeLocation(1)}>
            <HandySvg src={GlovalSvg} className={styles.countriesSvg} />
            <h6 className={styles.countriesText}>Global</h6>
          </div>
        </div>
        <div className={styles.towsPlate}>
          {townsList.map((town, number) => (
            <span className={styles.towsText} key={number} onClick={() => writeLocation({ town })}>
              {town}
            </span>
          ))}
        </div>
      </div>
    </Pad>
  );
};

export default LocationPlate;
