import React from 'react';

import styles from './product1LevelTemplate.module.scss';

import ProductPlate from '../../modules/products/productPlate/ProductPlate';
import ProductPagesNavigate from '../../ui/productPagesNavigate/ProductPagesNavigate';

import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Product1LevelMobile from '../../modules/forSinglePages/group2/product1Level/product1LevelMoBile/Product1LevelMobile';
import { Await, useLoaderData } from 'react-router-dom';
import ProductPlateTop from '../../modules/products/productPlateTop/ProductPlateTop';

const Product1LevelTemplate = () => {
  const { categoryName } = useLoaderData();

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
      <Await resolve={categoryName}>
        {(categoryName) => <h2 className={styles.MobileTitle}>{categoryName[0].name}</h2>}
      </Await>
      <ProductPlateTop totalCount={totalCount} limit={limit} setLimit={setLimit} setSort={setSort} />
      <Product1LevelMobile />
      <ProductPlate
        requestType={'category'}
        setTotalCount={setTotalCount}
        limit={limit}
        currentPage={currentPage}
        sort={sort}
      />
      <ProductPagesNavigate
        totalCount={totalCount}
        limit={limit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Product1LevelTemplate;
