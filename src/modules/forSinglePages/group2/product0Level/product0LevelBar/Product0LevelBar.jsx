import React from 'react';
import ProductLeftBar from '../../../../../ui/productLeftBar/ProductLeftBar';

import styles from './product0LevelBar.module.scss';
import { Await, Link, useLoaderData } from 'react-router-dom';

const Product0LevelBar = () => {
  const { categories, type } = useLoaderData();
  return (
    <ProductLeftBar>
      <Await resolve={type}>
        {(resolvedType) => <h2 className={styles.LeftBarTitle}>{resolvedType[0].name}</h2>}
      </Await>
      <p className={styles.LeftBarCategoriesTitle}>Категории</p>
      <Await resolve={categories}>
        {(resolvedCategory) =>
          resolvedCategory.map((category, index) => (
            <Link to={'/category/' + category.id} className={styles.LeftBarCategories} key={index}>
              {category.name}
            </Link>
          ))
        }
      </Await>
    </ProductLeftBar>
  );
};

export default Product0LevelBar;
