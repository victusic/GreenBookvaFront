import React, { ButtonHTMLAttributes } from 'react';

import styles from './favoritesBigButton.module.scss';

import { HandySvg } from 'handy-svg';
import FavoritesSvg from '../../../assets/svg/favorites.svg';

const FavoritesBigButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  return (
    <button className={styles.favoritesButton} {...props}>
      <HandySvg src={FavoritesSvg} className={styles.favoritesSvg} />
    </button>
  );
};

export default FavoritesBigButton;
