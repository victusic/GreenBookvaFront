import React, { useState } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import ProductLineLocal from '../productLineLocal/ProductLineLocal';

import styles from './product0LevelPlate.module.scss';

const Product0LevelPlate = () => {
  const { products, categories } = useLoaderData();

  const [categoryProducts, setCategoryProducts] = useState();

  return (
    <>
      <Await resolve={categories}>{(resolvedCategory) => setCategoryProducts(resolvedCategory)}</Await>
      <Await resolve={products}>
        {(resolvedProducts) => (
          <div className={styles.productPlate}>
            {resolvedProducts.map((product, index) => (
              <ProductLineLocal
                products={product}
                key={index}
                linkId={categoryProducts ? categoryProducts[index].id : 0}
              >
                {categoryProducts ? categoryProducts[index].name : 'Загрузка'}
              </ProductLineLocal>
            ))}
          </div>
        )}
      </Await>
    </>
  );
};

export default Product0LevelPlate;
