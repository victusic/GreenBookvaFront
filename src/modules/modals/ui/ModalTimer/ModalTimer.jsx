import React from 'react';

import styles from './modalTimer.module.scss';
import { useEffect } from 'react';
import ModalNewCode from '../ModalNewCode/ModalNewCode';

const ModalTimer = ({ newCode, time, setTime }) => {
  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time]);

  return (
    <div className={styles.margin}>
      {time === 0 ? (
        <ModalNewCode onClick={newCode} />
      ) : (
        <span className={styles.Timer}>Получить новый код можно будет через: {time} с</span>
      )}
    </div>
  );
};

export default ModalTimer;
