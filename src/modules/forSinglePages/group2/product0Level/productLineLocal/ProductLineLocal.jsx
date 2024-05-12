import React from 'react';
import HorisontalScroll from '../../../../../ui/horisontalScroll/HorisontalScroll';
import ProductCard from '../../../../../ui/productCard/ProductCard';

import styles from './productLineLocal.module.scss';
import WhiteTile from '../../../../../ui/buttons/whiteTile/WhiteTile';
import { useState } from 'react';

const ProductLineLocal = ({ products, children }) => {
  const [scrollWidth, setScrollWidth] = useState(0);

  return (
    <div className={styles.productLinePlate}>
      <div className={styles.navigateLine}>
        <h2 className={styles.productLineTitle}>{children}</h2>
        <div className={styles.navigateButtons}>
          <WhiteTile onClick={() => setScrollWidth(-274)}>❮</WhiteTile>
          <WhiteTile onClick={() => setScrollWidth(274)}>❯</WhiteTile>
        </div>
      </div>
      <HorisontalScroll setScrollWidth={setScrollWidth} scrollWidth={scrollWidth}>
        {products.map((product, index) => (
          <ProductCard product={product} addClass={styles.productMargin} key={index} />
        ))}
      </HorisontalScroll>
    </div>
  );
};

export default ProductLineLocal;
