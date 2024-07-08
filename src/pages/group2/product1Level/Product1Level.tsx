import React from 'react';

import Pad from '../../../ui/pad/Pad';

import PagesPlate from '../../../ui/pagesPlate/PagesPlate';
import Loader from '../../../ui/loader/Loader';
import { Suspense } from 'react';
import Product1LevelBar from '../../../modules/forSinglePages/group2/product1Level/product1LevelBar/Product1LevelBar';

import NavigateLine from '../../../ui/navigate/navigateLine/NavigateLine';
import NavigateElement from '../../../ui/navigate/navigateElement/NavigateElement';
import { Await, useLoaderData } from 'react-router-dom';
import Product1LevelTemplate from '../../../templates/product1LevelTemplate/Product1LevelTemplate';
import { ProductType } from '../../../utils/types';

const Product1Level: React.FC = () => {
  const type: ProductType[] = useLoaderData() as ProductType[];

  return (
    <Pad>
      <Suspense fallback={<Loader />}>
        <NavigateLine>
          <Await resolve={type}>
            {(typeName) => (
              <NavigateElement route={'/type/' + typeName[0].id}>{typeName[0].name}</NavigateElement>
            )}
          </Await>
        </NavigateLine>
        <PagesPlate>
          <Product1LevelBar />
          <Product1LevelTemplate />
        </PagesPlate>
      </Suspense>
    </Pad>
  );
};

export default Product1Level;
