import React from 'react';

import styles from './ModalFinish.module.scss';

const ModalFinish: React.FC = () => {
  return (
    <div className={styles.plate}>
      <h4 className={styles.finishTitle}>Спасибо, всё готово!</h4>
      <span className={styles.finishText2}>
        Используйте промокод HELLO для получения скидки 30% на первый заказ
      </span>
      <span className={styles.finishText3}>Бонусная карта автоматически появится в вашем профиле</span>
    </div>
  );
};

export default ModalFinish;
