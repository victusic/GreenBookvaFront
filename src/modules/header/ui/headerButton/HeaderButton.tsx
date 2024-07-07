import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './headerButton.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { refreshHeadersCatalogAction } from '../../../../store/headerElementsReducer';
import { RootState } from '../../../../store';

interface HeaderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ children }) => {
  const dispatchCatalogVisible = useDispatch();
  const catalogVisible = useSelector((state: RootState) => state.headersElements.catalog);

  return (
    <button
      className={styles.buttonHead}
      onClick={() => dispatchCatalogVisible(refreshHeadersCatalogAction(!catalogVisible))}
    >
      <h5>{children}</h5>
    </button>
  );
};

export default HeaderButton;
