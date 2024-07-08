import React, { MutableRefObject, useRef } from 'react';
import Pad from '../../../ui/pad/Pad';
import { Suspense } from 'react';
import Loader from '../../../ui/loader/Loader';
import { Await, useLoaderData } from 'react-router-dom';
import NavigateElement from '../../../ui/navigate/navigateElement/NavigateElement';
import NavigateArrow from '../../../ui/navigate/navigateArrow/NavigateArrow';
import NavigateLine from '../../../ui/navigate/navigateLine/NavigateLine';
import ProductPlateOnTop from '../../../modules/forSinglePages/group2/product/productPlateOnTop/ProductPlateOnTop';
import ProductDescription from '../../../modules/forSinglePages/group2/product/productDescription/ProductDescription';
import ProductReviewPlate from '../../../modules/forSinglePages/group2/product/productReviewPlate/ProductReviewPlate';
import ProductLine from '../../../modules/products/productLine/ProductLine';

const Product: React.FC = () => {
  const {
    type,
    category,
    subcategory,
    product,
    reviews,
    product1Line,
    product2Line,
    product3Line,
    product2LineName,
    product3LineName,
  } = useLoaderData();

  const scrollRef = useRef<MutableRefObject<HTMLDivElement | null>>(null);

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
            {(categoryName) => (
              <NavigateElement route={'/category/' + categoryName[0].id}>
                {categoryName[0].name}
              </NavigateElement>
            )}
          </Await>
          <NavigateArrow />
          <Await resolve={subcategory}>
            {(subcategoryName) => (
              <NavigateElement route={'/subcategory/' + subcategoryName[0].id}>
                {subcategoryName[0].name}
              </NavigateElement>
            )}
          </Await>
        </NavigateLine>
        <ProductPlateOnTop scrollRef={scrollRef} />
        <Await resolve={product}>
          {(product) => <ProductDescription id={product[0].id}>{product[0].description}</ProductDescription>}
        </Await>
        <Await resolve={reviews}>
          {(reviews) => <ProductReviewPlate reviews={reviews} scrollRef={scrollRef} />}
        </Await>
        <Await resolve={product1Line}>
          {(product1Line) => <ProductLine products={product1Line}>Похожие товары</ProductLine>}
        </Await>
        <Await resolve={product2Line}>
          {(product2Line) => (
            <Await resolve={product2LineName}>
              {(product2LineName) => <ProductLine products={product2Line}>{product2LineName}</ProductLine>}
            </Await>
          )}
        </Await>
        <Await resolve={product3Line}>
          {(product3Line) => (
            <Await resolve={product3LineName}>
              {(product3LineName) => <ProductLine products={product3Line}>{product3LineName}</ProductLine>}
            </Await>
          )}
        </Await>
      </Suspense>
    </Pad>
  );
};

export default Product;
