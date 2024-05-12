import React from 'react';
import styles from './checkbox.module.scss';

const Checkbox = ({ children, ...props }) => {
  return (
    <label className={styles.labelText}>
      <input type="checkbox" className={styles.checkbox} {...props} />
      {children}
    </label>
  );
};

export default Checkbox;
