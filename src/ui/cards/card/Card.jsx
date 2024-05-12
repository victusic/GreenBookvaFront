import React, { useEffect, useState } from 'react';
import styles from './card.module.scss';

const Card = ({ number, date, margin, cvv, cardCVV, setCardCVV, ...props }) => {
  const [cardMargin, setCardMargin] = useState('');

  useEffect(() => {
    {
      margin ? setCardMargin(styles.cardMargin) : setCardMargin('');
    }
  }, []);

  //обработка номера
  const numberChunks = number.match(/.{1,4}/g);
  const finallyNumber = numberChunks.join(' ');

  //обработка срока действия
  const dateChunks = date.match(/.{1,2}/g);
  const finallyDate = dateChunks.join('/');

  return (
    <div className={styles.cardPlate + ' ' + cardMargin} {...props}>
      <h4 className={styles.cardNumber}>{finallyNumber}</h4>
      <h4 className={styles.cardDate}>{finallyDate}</h4>
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

export default Card;
