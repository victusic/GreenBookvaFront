import React from 'react';

import Pad from '../../../ui/pad/Pad';
import Loader from '../../../ui/loader/Loader';
import { Suspense } from 'react';
import SingleTitle from '../../../ui/titles/singleTitle/SingleTitle';
import { Await, useLoaderData } from 'react-router-dom';
import TitleApm from '../../../modules/forSinglePages/group3/apm/titleApm/TitleApm';
import SlideApm from '../../../modules/forSinglePages/group3/apm/slideApm/SlideApm';

import NoManufacturer from '../../../assets/img/no-manufacturer.png';
import ProductLine from '../../../modules/products/productLine/ProductLine';

const Manufacturer = () => {
  const { manufacturer, manufacturerSlides, manufacturerProducts } = useLoaderData();

  return (
    <Pad>
      <Suspense fallback={<Loader />}>
        <SingleTitle>Производитель</SingleTitle>

        <Await resolve={manufacturer}>
          {(manufacturer) => (
            <TitleApm info={manufacturer[0]} imagePath="manufacturers" image={NoManufacturer} />
          )}
        </Await>

        <Await resolve={manufacturerSlides}>
          {(manufacturerSlides) =>
            manufacturerSlides.map((slide, index) => (
              <SlideApm key={index} imagePath="manufacturers" info={slide} />
            ))
          }
        </Await>

        <Await resolve={manufacturer}>
          {(manufacturer) => (
            <Await resolve={manufacturerProducts}>
              {(manufacturerProducts) => (
                <ProductLine products={manufacturerProducts}>
                  Товары бренда {manufacturer[0].name}
                </ProductLine>
              )}
            </Await>
          )}
        </Await>
      </Suspense>
    </Pad>
  );
};

export default Manufacturer;
