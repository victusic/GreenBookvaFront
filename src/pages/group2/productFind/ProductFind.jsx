import React from 'react';

import Pad from '../../../ui/pad/Pad';

import PagesPlate from '../../../ui/pagesPlate/PagesPlate';

import NavigateLine from '../../../ui/navigate/navigateLine/NavigateLine';
import NavigateElement from '../../../ui/navigate/navigateElement/NavigateElement';
import ProductFindBar from '../../../modules/forSinglePages/group2/productFind/productFindBar/ProductFindBar';
import ProductFindTemplate from '../../../templates/productFindTemplate/ProductFindTemplate';
import { useParams } from 'react-router-dom';

const ProductFind = () => {
  const { findString } = useParams();

  return (
    <Pad>
      <NavigateLine>
        <NavigateElement>Результаты поиска по запросу: {findString}</NavigateElement>
      </NavigateLine>
      <PagesPlate>
        <ProductFindBar />
        <ProductFindTemplate />
      </PagesPlate>
    </Pad>
  );
};

export default ProductFind;
