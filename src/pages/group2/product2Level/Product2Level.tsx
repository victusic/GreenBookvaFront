import React from 'react';

import Pad from '../../../ui/pad/Pad';

import PagesPlate from '../../../ui/pagesPlate/PagesPlate';
import Loader from '../../../ui/loader/Loader';
import { Suspense } from 'react';
import Product2LevelBar from '../../../modules/forSinglePages/group2/product2Level/product2LevelBar/Product2LevelBar';

import NavigateLine from '../../../ui/navigate/navigateLine/NavigateLine';
import NavigateElement from '../../../ui/navigate/navigateElement/NavigateElement';
import { Await, useLoaderData } from 'react-router-dom';
import Product2LevelTemplate from '../../../templates/product2LevelTemplate/Product2LevelTemplate';
import NavigateArrow from '../../../ui/navigate/navigateArrow/NavigateArrow';
import { ProductCategory, ProductType } from '../../../utils/types';

const Product2Level: React.FC = () => {
  const type: ProductType[] = useLoaderData() as ProductType[];
  const category: ProductCategory[] = useLoaderData() as ProductCategory[];

  return (
    <Pad>
      <Suspense fallback={<Loader />}>
        <NavigateLine>
          <Await resolve={type}>
            {(typeName) => (
              <NavigateElement route={'/type/' + typeName[0].id}>{typeName[0].name}</NavigateElement>
            )}
          </Await>
          <NavigateArrow />
          <Await resolve={category}>
            {(category) => (
              <NavigateElement route={'/category/' + category[0].id}>{category[0].name}</NavigateElement>
            )}
          </Await>
        </NavigateLine>
        <PagesPlate>
          <Product2LevelBar />
          <Product2LevelTemplate />
        </PagesPlate>
      </Suspense>
    </Pad>
  );
};

export default Product2Level;
