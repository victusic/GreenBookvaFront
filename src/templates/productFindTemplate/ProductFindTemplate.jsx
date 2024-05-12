import React from 'react';

import styles from './productFindTemplate.module.scss';

import ProductPagesNavigate from '../../ui/productPagesNavigate/ProductPagesNavigate';

import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ProductFindMobile from '../../modules/forSinglePages/group2/productFind/productFindMoBile/ProductFindMobile';
import ProductFindPlate from '../../modules/forSinglePages/group2/productFind/productFindPlate/ProductFindPlate';
import ProductPlateTop from '../../modules/products/productPlateTop/ProductPlateTop';

const ProductFindTemplate = () => {
  const isStock = useSelector((state) => state.filter.isStock);
  const changeBindings = useSelector((state) => state.filter.changeBindings);
  const changeBadges = useSelector((state) => state.filter.changeBadges);
  const changeAutors = useSelector((state) => state.filter.changeAutors);
  const changePublishers = useSelector((state) => state.filter.changePublishers);
  const changeManufacturers = useSelector((state) => state.filter.changeManufacturers);
  const changeMinPrice = useSelector((state) => state.filter.changeMinPrice);
  const changeMaxPrice = useSelector((state) => state.filter.changeMaxPrice);

  const [limit, setLimit] = useState(12);
  const [sort, setSort] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  //переброс на 1 страницу, при измении фильтрами их кол-ва
  useEffect(() => {
    setCurrentPage(1);
  }, [
    limit,
    isStock,
    changeBindings,
    changeBadges,
    changeAutors,
    changePublishers,
    changeManufacturers,
    changeMinPrice,
    changeMaxPrice,
  ]);

  return (
    <div className={styles.mainPlate}>
      <h2 className={styles.MobileTitle}>Поиск</h2>
      <ProductPlateTop totalCount={totalCount} limit={limit} setLimit={setLimit} setSort={setSort} />
      <ProductFindMobile />
      <ProductFindPlate setTotalCount={setTotalCount} limit={limit} currentPage={currentPage} sort={sort} />
      <ProductPagesNavigate
        totalCount={totalCount}
        limit={limit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProductFindTemplate;
