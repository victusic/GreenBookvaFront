import React, { InputHTMLAttributes } from 'react';

import styles from './countInput.module.scss';

const CountInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return <input {...props} className={styles.base} />;
};

export default CountInput;
