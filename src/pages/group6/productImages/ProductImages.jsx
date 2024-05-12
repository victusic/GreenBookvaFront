import React, { Suspense } from 'react';
import ProductImagesPlate from '../../../modules/forSinglePages/group6/productImagesPlate/ProductImagesPlate';
import Loader from '../../../ui/loader/Loader';

const ProductImages = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ProductImagesPlate />
    </Suspense>
  );
};

export default ProductImages;
