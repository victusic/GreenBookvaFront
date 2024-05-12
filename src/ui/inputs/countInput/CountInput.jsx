import React from 'react';

import styles from './countInput.module.scss';

const CountInput = ({ ...props }) => {
  return <input {...props} className={styles.base} />;
};

export default CountInput;
