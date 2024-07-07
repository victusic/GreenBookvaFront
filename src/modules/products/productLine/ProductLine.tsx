import React, { ReactNode } from 'react';
import ProductCard from '../../../ui/productCard/ProductCard';

import styles from './productLine.module.scss';
import WhiteTile from '../../../ui/buttons/whiteTile/WhiteTile';
import { useState } from 'react';
import { Await } from 'react-router-dom';
import { HorizontalScroll } from '../../../ui/horizontalScroll/HorisontalScroll';
import { Product } from '../../../utils/types';

interface ProductLineProps {
  products: Product[];
  children: ReactNode;
}

const ProductLine: React.FC<ProductLineProps> = ({ products, children }) => {
  const [scrollWidth, setScrollWidth] = useState(0);

  return (
    <Await resolve={products}>
      {(resolvedProducts) => (
        <div className={styles.productLinePlate + ' ' + (resolvedProducts.length < 1 && styles.styleNone)}>
          <div className={styles.navigateLine}>
            <h2 className={styles.productLineTitle}>{children}</h2>
            <div className={styles.navigateButtons}>
              <WhiteTile onClick={() => setScrollWidth(-274)}>❮</WhiteTile>
              <WhiteTile onClick={() => setScrollWidth(274)}>❯</WhiteTile>
            </div>
          </div>
          <HorizontalScroll setScrollWidth={setScrollWidth} scrollWidth={scrollWidth}>
            {resolvedProducts.map((product, index) => (
              <ProductCard product={product} addClass={styles.productMargin} key={index} />
            ))}
          </HorizontalScroll>
        </div>
      )}
    </Await>
  );
};

export default ProductLine;
