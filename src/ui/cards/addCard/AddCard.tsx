import React, { HTMLAttributes } from 'react';
import styles from './addCard.module.scss';

const AddCard: React.FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <div className={styles.addCardPlate} {...props}>
      <h4>Добавить карту</h4>
    </div>
  );
};

export default AddCard;
