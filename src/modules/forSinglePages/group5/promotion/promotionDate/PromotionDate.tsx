import moment from 'moment';
import React, { HTMLAttributes } from 'react';

interface PromotionDateProps extends HTMLAttributes<HTMLHeadingElement> {
  date: number;
}

const PromotionDate: React.FC<PromotionDateProps> = ({ date, ...props }) => {
  const today = new Date();

  const stateDate = (date / 2) * 24 * 60 * 60 * 1000;
  const dateStart = today.getTime() - stateDate;
  const dateEnd = today.getTime() + stateDate;

  const formattedDateStart = moment(dateStart).format('DD.MM.YYYY');
  const formattedDateEnd = moment(dateEnd).format('DD.MM.YYYY');
  return (
    <h4 {...props}>
      Срок проведения акции: {date !== 0 ? formattedDateStart + ' - ' + formattedDateEnd : '∞'}
    </h4>
  );
};

export default PromotionDate;
