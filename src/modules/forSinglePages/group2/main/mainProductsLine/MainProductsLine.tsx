import React from 'react';

import ProductLine from '../../../../products/productLine/ProductLine';
import { useLoaderData } from 'react-router-dom';
import { Product } from '../../../../../utils/types';

const MainProductsLine: React.FC = () => {
  const productsNew: Product[] = useLoaderData() as Product[];
  const productsArt: Product[] = useLoaderData() as Product[];
  const productsScience: Product[] = useLoaderData() as Product[];
  const productsBestsellers: Product[] = useLoaderData() as Product[];
  const productHistory: Product[] = useLoaderData() as Product[];
  const productPhilosophy: Product[] = useLoaderData() as Product[];
  const productsBest: Product[] = useLoaderData() as Product[];
  return (
    <>
      <ProductLine products={productsNew}>Новинки литературы</ProductLine>
      <ProductLine products={productsArt}>Искусство</ProductLine>
      <ProductLine products={productsScience}>Наука и техника</ProductLine>
      <ProductLine products={productsBestsellers}>Бестселлеры</ProductLine>
      <ProductLine products={productHistory}>Книги про историю</ProductLine>
      <ProductLine products={productPhilosophy}>Философия и религия</ProductLine>
      <ProductLine products={productsBest}>Лучшие из лучших</ProductLine>
    </>
  );
};

export default MainProductsLine;
