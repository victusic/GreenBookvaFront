import React from 'react';

import ProductLine from '../../../../products/productLine/ProductLine';
import { useLoaderData } from 'react-router-dom';

const MainProductsLine = () => {
  const { booksNew } = useLoaderData();
  const { booksArt } = useLoaderData();
  const { booksScience } = useLoaderData();
  const { booksBestsellers } = useLoaderData();
  const { bookHistory } = useLoaderData();
  const { bookPhilosophy } = useLoaderData();
  const { booksBest } = useLoaderData();
  return (
    <>
      <ProductLine products={booksNew}>Новинки литературы</ProductLine>
      <ProductLine products={booksArt}>Искусство</ProductLine>
      <ProductLine products={booksScience}>Наука и техника</ProductLine>
      <ProductLine products={booksBestsellers}>Бестселлеры</ProductLine>
      <ProductLine products={bookHistory}>Книги про историю</ProductLine>
      <ProductLine products={bookPhilosophy}>Философия и религия</ProductLine>
      <ProductLine products={booksBest}>Лучшие из лучших</ProductLine>
    </>
  );
};

export default MainProductsLine;
