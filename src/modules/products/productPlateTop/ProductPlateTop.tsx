import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import styles from './productPlateTop.module.scss';
import { useSelector } from 'react-redux';
import { Select } from '../../../ui/select/Select';
import { RootState } from '../../../store';
import { useTextCount } from '../../../utils/hooks/useTextCount';

interface ProductPlateTopProps {
  totalCount: number;
  setLimit: Dispatch<SetStateAction<number>>;
  setSort: Dispatch<SetStateAction<number>>;
}

const ProductPlateTop: React.FC<ProductPlateTopProps> = ({ totalCount, setLimit, setSort }) => {
  //параметры количества и сортировки
  const countProductsInList = useSelector((state: RootState) => state.sort.sortProducts);
  const sortProductsInList = useSelector((state: RootState) => state.sort.countProducts);

  const [productCountTitle, setProductCountTitle] = useState<string>('');

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
          <Select options={countProductsInList} onChange={(e) => setLimit(Number(e.target.value))} />
          <Select options={sortProductsInList} onChange={(e) => setSort(Number(e.target.value))} />
        </div>
      </div>
    </div>
  );
};

export default ProductPlateTop;
