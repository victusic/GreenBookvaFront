import React from 'react';

import styles from './modalButton.module.scss';

const ModalButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.base} type="submit">
      {children}
    </button>
  );
};

export default ModalButton;
