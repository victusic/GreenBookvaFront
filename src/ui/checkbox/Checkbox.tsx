import React, { HTMLAttributes, ReactNode } from 'react';
import styles from './checkbox.module.scss';

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  checked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ children, checked, ...props }) => {
  return (
    <label className={styles.labelText}>
      <input type="checkbox" className={styles.checkbox} checked={checked} {...props} />
      {children}
    </label>
  );
};

export default Checkbox;
