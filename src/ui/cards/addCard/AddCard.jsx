import React from 'react';
import styles from './addCard.module.scss';

const AddCard = ({ ...props }) => {
  return (
    <div className={styles.addCardPlate} {...props}>
      <h4>Добавить карту</h4>
    </div>
  );
};

export default AddCard;
