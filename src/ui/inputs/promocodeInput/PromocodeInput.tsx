import React from 'react';

import styles from './promocodeInput.module.scss';

const PromocodeInput: React.FC = ({ ...props }) => {
  return <input {...props} className={styles.base} />;
};

export default PromocodeInput;
