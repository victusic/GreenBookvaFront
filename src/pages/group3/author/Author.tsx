import React from 'react';

import Pad from '../../../ui/pad/Pad';
import Loader from '../../../ui/loader/Loader';
import { Suspense } from 'react';
import SingleTitle from '../../../ui/titles/singleTitle/SingleTitle';
import TitleApm from '../../../modules/forSinglePages/group3/apm/titleApm/TitleApm';
import { Await, useLoaderData } from 'react-router-dom';
import SlideApm from '../../../modules/forSinglePages/group3/apm/slideApm/SlideApm';
import ImagesApm from '../../../modules/forSinglePages/group3/apm/imagesApm/ImagesApm';

import NoAuthor from '../../../assets/img/no-author.png';
import ProductLine from '../../../modules/products/productLine/ProductLine';
import { Author as AuthorType, AuthorImages, Product, Slides } from '../../../utils/types';

const Author: React.FC = () => {
  const author: AuthorType = useLoaderData() as AuthorType;
  const authorSlides: Slides[] = useLoaderData() as Slides[];
  const authorImages: AuthorImages[] = useLoaderData() as AuthorImages[];
  const authorProducts: Product[] = useLoaderData() as Product[];

  return (
    <Pad>
      <Suspense fallback={<Loader />}>
        <SingleTitle>Автор</SingleTitle>

        <Await resolve={author}>
          {(author) => <TitleApm info={author[0]} imagePath="authors" image={NoAuthor} />}
        </Await>

        <Await resolve={authorSlides}>
          {(authorSlides) =>
            authorSlides.map((slide, index) => <SlideApm key={index} imagePath="authors" info={slide} />)
          }
        </Await>

        <Await resolve={authorImages}>
          {(authorImages) => <ImagesApm imagePath="authors" info={authorImages} />}
        </Await>

        <Await resolve={author}>
          {(author) => (
            <Await resolve={authorProducts}>
              {(authorProducts) => (
                <ProductLine products={authorProducts}>
                  Книги автора {author[0].name + ' '}
                  {author[0].surname && author[0].surname}
                </ProductLine>
              )}
            </Await>
          )}
        </Await>
      </Suspense>
    </Pad>
  );
};

export default Author;
