import React, { useState } from 'react';
import styles from './modalCard.module.scss';

const ModalCard = ({ number, date, setCardCode, setCardMonthyear, cvv, cardCVV, setCardCVV }) => {
  return (
    <div className={styles.cardPlate}>
      <input
        type="text"
        placeholder="0000 0000 0000 0000"
        value={number}
        onChange={(e) => setCardCode(e.target.value)}
        className={styles.cardInputNumber}
      />
      <input
        type="text"
        placeholder="00/00"
        value={date}
        onChange={(e) => setCardMonthyear(e.target.value)}
        className={styles.cardInputDate}
      />
      {cvv && (
        <input
          type="text"
          placeholder="CVV"
          value={cardCVV}
          onChange={(e) => setCardCVV(e.target.value)}
          className={styles.cardInputCVV}
        />
      )}
    </div>
  );
};

export default ModalCard;
