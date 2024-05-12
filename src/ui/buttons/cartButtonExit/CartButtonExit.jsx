import React from 'react';

import styles from './cartButtonExit.module.scss';

import { HandySvg } from 'handy-svg';
import ExitSvg from '../../../assets/svg/exit.svg';

const CartButtonExit = ({ ...props }) => {
  return (
    <button className={styles.button} {...props}>
      <HandySvg src={ExitSvg} className={styles.buttonSvg} />
    </button>
  );
};

export default CartButtonExit;
