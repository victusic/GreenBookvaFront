import React from 'react';

import styles from './whiteTile.module.scss';

const WhiteTile = ({ children, addStyle, ...props }) => {
  return (
    <div className={styles.tilePlate + ' ' + addStyle} {...props}>
      <h5>{children}</h5>
    </div>
  );
};

export default WhiteTile;
