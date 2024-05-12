import React from 'react';

import Pad from '../../../ui/pad/Pad';
import Loader from '../../../ui/loader/Loader';
import { Suspense } from 'react';
import SingleTitle from '../../../ui/titles/singleTitle/SingleTitle';
import { Await, useLoaderData } from 'react-router-dom';
import TitleApm from '../../../modules/forSinglePages/group3/apm/titleApm/TitleApm';
import SlideApm from '../../../modules/forSinglePages/group3/apm/slideApm/SlideApm';

import NoPublisher from '../../../assets/img/no-publisher.png';
import ProductLine from '../../../modules/products/productLine/ProductLine';

const Publisher = () => {
  const { publisher, publisherSlides, publisherProducts } = useLoaderData();

  return (
    <Pad>
      <Suspense fallback={<Loader />}>
        <SingleTitle>Издательство</SingleTitle>

        <Await resolve={publisher}>
          {(publisher) => <TitleApm info={publisher[0]} imagePath="publishers" image={NoPublisher} />}
        </Await>

        <Await resolve={publisherSlides}>
          {(publisherSlides) =>
            publisherSlides.map((slide, index) => (
              <SlideApm key={index} imagePath="publishers" info={slide} />
            ))
          }
        </Await>

        <Await resolve={publisher}>
          {(publisher) => (
            <Await resolve={publisherProducts}>
              {(publisherProducts) => (
                <ProductLine products={publisherProducts}>Книги издательсва {publisher[0].name}</ProductLine>
              )}
            </Await>
          )}
        </Await>
      </Suspense>
    </Pad>
  );
};

export default Publisher;
