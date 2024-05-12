import React, { useEffect, useState } from 'react';

import Select from '../../../ui/select/Select';

import styles from './productPlateTop.module.scss';
import { useTextCount } from '../../../hooks/useTextCount';
import { useSelector } from 'react-redux';

const ProductPlateTop = ({ totalCount, setLimit, setSort }) => {
  //параметры количества и сортировки
  const countProductsInList = useSelector((state) => state.sort.sortProducts);
  const sortProductsInList = useSelector((state) => state.sort.countProducts);

  const [productCountTitle, setProductCountTitle] = useState('');

  const countTitle = useTextCount('товар', totalCount);
  useEffect(() => {
    setProductCountTitle(countTitle);
  }, [totalCount]);

  return (
    <div className={styles.topLine}>
      <p className={styles.countProducts}>{totalCount + ' ' + productCountTitle}</p>
      <div className={styles.selectsPlate}>
        <p className={styles.selectsText}>Показывать по:</p>
        <div className={styles.selectsList}>
          <Select options={countProductsInList} onChange={(e) => setLimit(e.target.value)} />
          <Select options={sortProductsInList} onChange={(e) => setSort(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default ProductPlateTop;
