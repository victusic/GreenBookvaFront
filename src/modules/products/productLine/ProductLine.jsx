import React from 'react';
import HorisontalScroll from '../../../ui/horisontalScroll/HorisontalScroll';
import ProductCard from '../../../ui/productCard/ProductCard';

import styles from './productLine.module.scss';
import WhiteTile from '../../../ui/buttons/whiteTile/WhiteTile';
import { useState } from 'react';
import { Await } from 'react-router-dom';

const ProductLine = ({ products, children }) => {
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
          <HorisontalScroll setScrollWidth={setScrollWidth} scrollWidth={scrollWidth}>
            {resolvedProducts.map((product, index) => (
              <ProductCard product={product} addClass={styles.productMargin} key={index} />
            ))}
          </HorisontalScroll>
        </div>
      )}
    </Await>
  );
};

export default ProductLine;
