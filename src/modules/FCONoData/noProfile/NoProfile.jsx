import React from 'react';
import styles from './noProfile.module.scss';
import { useDispatch } from 'react-redux';

import { refreshModalSIgnVisibleAction } from '../../../store/modalVisibleReducer';

const NoProfile = () => {
  const dispatchVisible = useDispatch();

  return (
    <div className={styles.plate404}>
      <div>
        <p className={styles.titleDesc}>{'Здесь пока ничего нет'}</p>
        <p className={styles.titleDescMin}>
          <span
            className={styles.openCatalog}
            onClick={() => dispatchVisible(refreshModalSIgnVisibleAction(true))}
          >
            Авторизируйтесь или зарегистрируйтесь
          </span>
          {' чтобы добавлять товары и делать заказы'}
        </p>
      </div>
    </div>
  );
};

export default NoProfile;
