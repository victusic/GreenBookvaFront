import moment from 'moment';
import React from 'react';

const PromotionDate = ({ date, ...props }) => {
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
