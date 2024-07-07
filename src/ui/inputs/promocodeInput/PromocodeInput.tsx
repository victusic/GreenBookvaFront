import React, { InputHTMLAttributes } from 'react';

import styles from './promocodeInput.module.scss';

const PromocodeInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return <input {...props} className={styles.base} />;
};

export default PromocodeInput;
