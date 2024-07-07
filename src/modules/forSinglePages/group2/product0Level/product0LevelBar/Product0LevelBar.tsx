import React from 'react';
import ProductLeftBar from '../../../../../ui/productLeftBar/ProductLeftBar';

import styles from './product0LevelBar.module.scss';
import { Await, Link, useLoaderData } from 'react-router-dom';
import { ProductCategory, ProductType } from '../../../../../utils/types';

const Product0LevelBar: React.FC = () => {
  const categories: ProductCategory[] = useLoaderData() as ProductCategory[];
  const type: ProductType[] = useLoaderData() as ProductType[];
  return (
    <ProductLeftBar>
      <Await resolve={type}>
        {(resolvedType) => <h2 className={styles.LeftBarTitle}>{resolvedType[0].name}</h2>}
      </Await>
      <p className={styles.LeftBarCategoriesTitle}>Категории</p>
      <Await resolve={categories}>
        {(resolvedCategory) =>
          resolvedCategory.map((category: ProductCategory, index) => (
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
