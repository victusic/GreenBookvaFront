import React, { useState } from 'react';

import styles from './feedbackData.module.scss';

import { useClipboard } from 'use-clipboard-copy';

import { HandySvg } from 'handy-svg';
import copySvg from '../../../../../assets/svg/copy.svg';

const FeedbackData = () => {
  const [copyStyle, setCopyStyle] = useState('');

  const clipboard = useClipboard();

  function copyMail() {
    clipboard.copy('horosivv@gmail.com');
    setCopyStyle(styles.copyStyle);
  }

  return (
    <div className={styles.linkTextPlate}>
      <h3 className={styles.linkTextTitle}>Номер телефона:</h3>
      <h4 className={styles.linkTextData}>+7 (747) 619-07-36</h4>
      <h3 className={styles.linkTextTitle}>Адрес почты:</h3>
      <h4 className={styles.linkTextData + ' ' + copyStyle}>
        horosivv@gmail.com
        <HandySvg src={copySvg} className={styles.linkSvgCopy} onClick={copyMail}></HandySvg>
      </h4>
    </div>
  );
};

export default FeedbackData;
