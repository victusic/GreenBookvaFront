import React, { useEffect, useState } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import ProductLineLocal from '../productLineLocal/ProductLineLocal';

import styles from './product0LevelPlate.module.scss';
import { Product, ProductCategory } from '../../../../../utils/types';

const Product0LevelPlate: React.FC = () => {
  const categories: ProductCategory[] = useLoaderData() as ProductCategory[];
  const products: Product[] = useLoaderData() as Product[];

  const [categoryProducts, setCategoryProducts] = useState<ProductCategory[]>([]);

  useEffect(() => {
    setCategoryProducts(categories);
  }, [categories]);

  return (
    <>
      <Await resolve={products}>
        {(resolvedProducts) => (
          <div className={styles.productPlate}>
            {resolvedProducts.map((product: Product[], index) => (
              <ProductLineLocal
                products={product}
                key={index}
                //linkId={categoryProducts ? categoryProducts[index].id : 0}
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
