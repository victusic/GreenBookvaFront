import React, { HTMLAttributes } from 'react';

import styles from './toggle.module.scss';

interface ToggleProps extends HTMLAttributes<HTMLInputElement> {
  checked: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ checked, ...props }) => {
  return (
    <>
      <input type="checkbox" id="switch" className={styles.input} checked={checked} {...props} />
      <label htmlFor="switch" className={styles.label}>
        Toggle
      </label>
    </>
  );
};

export default Toggle;
