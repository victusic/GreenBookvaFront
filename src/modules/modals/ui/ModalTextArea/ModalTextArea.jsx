import React from 'react';
import styles from './modalTextArea.module.scss';

const ModalTextArea = ({ height, ...props }) => {
  return <textarea {...props} className={styles.base} style={{ height: `${height}px` }} />;
};

export default ModalTextArea;
