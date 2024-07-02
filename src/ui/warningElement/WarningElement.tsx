import React from 'react';

import styles from './warningElement.module.scss';
import { Link } from 'react-router-dom';
import HighPaddingButton from '../buttons/highPaddingButton/HighPaddingButton';

interface WarningElementProps {
  status: string;
  statusText: string;
  is404: boolean;
}

const WarningElement: React.FC<WarningElementProps> = ({ status, statusText, is404 }) => {
  return (
    <div className={styles.plate404}>
      <div>
        <p className={styles.title404}>{status || 'ОЙ'}</p>
        <p className={styles.titleDesc}>{statusText || 'Произошла непредвиденная ошибка'}</p>
        <p className={styles.titleDescMin}>
          {is404 ? 'Но у нас есть куча других классных страниц' : 'Попробуйте ещё раз'}
        </p>
        <div className={styles.buttonPlate}>
          <Link to="/">
            <HighPaddingButton>На главную</HighPaddingButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WarningElement;
