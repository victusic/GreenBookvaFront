import React, { Dispatch, SetStateAction } from 'react';
import styles from './modalCard.module.scss';

interface ModalCardProps {
  number: string;
  date: string;
  cvv?: boolean;
  cardCVV?: string;
  setCardCode: Dispatch<SetStateAction<string>>;
  setCardMonthYear: Dispatch<SetStateAction<string>>;
  setCardCVV?: Dispatch<SetStateAction<string>>;
}

const ModalCard: React.FC<ModalCardProps> = ({
  number,
  date,
  setCardCode,
  setCardMonthYear,
  cvv,
  cardCVV,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCardCVV = () => {},
}) => {
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
        onChange={(e) => setCardMonthYear(e.target.value)}
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
