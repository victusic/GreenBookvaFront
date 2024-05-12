import React from 'react';
import styles from './headerButton.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { refreshHeadersCatalogAction } from '../../../../store/headerElementsReducer';

const HeaderButton = ({ children }) => {
  //видимость
  const dispatchCatalogVisible = useDispatch();
  const catalogVisible = useSelector((state) => state.headersElements.catalog);

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
