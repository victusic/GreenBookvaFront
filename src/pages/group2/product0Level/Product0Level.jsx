import React, { Suspense } from 'react';

import Pad from '../../../ui/pad/Pad';

import PagesPlate from '../../../ui/pagesPlate/PagesPlate';
import Loader from '../../../ui/loader/Loader';
import Product0LevelPlate from '../../../modules/forSinglePages/group2/product0Level/product0LevelPlate/Product0LevelPlate';
import Product0LevelBar from '../../../modules/forSinglePages/group2/product0Level/product0LevelBar/Product0LevelBar';
import Product0LevelMobile from '../../../modules/forSinglePages/group2/product0Level/product0LevelMoBile/Product0LevelMobile';

const Product0Level = () => {
  return (
    <Pad>
      <Suspense fallback={<Loader />}>
        <Product0LevelMobile />
        <PagesPlate>
          <Product0LevelBar />
          <Product0LevelPlate />
        </PagesPlate>
      </Suspense>
    </Pad>
  );
};

export default Product0Level;
