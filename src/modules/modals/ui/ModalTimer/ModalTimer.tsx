import React, { Dispatch, SetStateAction } from 'react';

import styles from './modalTimer.module.scss';
import { useEffect } from 'react';
import ModalNewCode from '../ModalNewCode/ModalNewCode';

interface ModalTimerProps {
  newCode: () => void;
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
}

const ModalTimer: React.FC<ModalTimerProps> = ({ newCode, time, setTime }) => {
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
