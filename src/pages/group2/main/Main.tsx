import React from 'react';

import Pad from '../../../ui/pad/Pad';
import MainProductsLine from '../../../modules/forSinglePages/group2/main/mainProductsLine/MainProductsLine';

import { Suspense } from 'react';
import Loader from '../../../ui/loader/Loader';
import MainTopLine from '../../../modules/forSinglePages/group2/main/mainTopLine/MainTopLine';

const Main: React.FC = () => {
  return (
    <Pad>
      <Suspense fallback={<Loader />}>
        <MainTopLine />
        <MainProductsLine />
      </Suspense>
    </Pad>
  );
};

export default Main;
