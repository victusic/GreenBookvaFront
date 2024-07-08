import React, { useEffect, useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';

import styles from './modalCalendar.module.scss';
import 'react-calendar/dist/Calendar.css';

interface ModalCalendarProps extends CalendarProps {
  visible: boolean;
}

const ModalCalendar: React.FC<ModalCalendarProps> = ({ visible, ...props }) => {
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
