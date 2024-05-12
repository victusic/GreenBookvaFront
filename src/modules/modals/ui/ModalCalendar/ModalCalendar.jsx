import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

import styles from './modalCalendar.module.scss';
import 'react-calendar/dist/Calendar.css';

const ModalCalendar = ({ visible, ...props }) => {
  const [visibleCalendar, setVisibleCalendar] = useState('');

  useEffect(() => {
    {
      visible ? setVisibleCalendar('') : setVisibleCalendar(styles.calendarBaseNone);
    }
  }, [visible]);

  return (
    <div className={styles.calendarBase + ' ' + visibleCalendar}>
      <Calendar {...props} />
    </div>
  );
};

export default ModalCalendar;
