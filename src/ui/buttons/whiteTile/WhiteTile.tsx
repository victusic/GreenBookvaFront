import React, { HTMLAttributes, ReactNode } from 'react';

import styles from './whiteTile.module.scss';

interface WhiteTileProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  addStyle?: string;
  disabled?: boolean;
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const WhiteTile: React.FC<WhiteTileProps> = ({ children, addStyle, disabled, ...props }) => {
  return (
    <div className={styles.tilePlate + ' ' + addStyle} {...props}>
      <h5>{children}</h5>
    </div>
  );
};

export default WhiteTile;
