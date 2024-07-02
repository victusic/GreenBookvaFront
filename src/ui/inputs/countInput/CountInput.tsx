import React from 'react';

import styles from './countInput.module.scss';

const CountInput: React.FC = ({ ...props }) => {
  return <input {...props} className={styles.base} />;
};

export default CountInput;
