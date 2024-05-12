import { defer } from 'react-router-dom';
import {
  getAuthor,
  getAuthorImages,
  getAuthorSlides,
  getManufacturer,
  getManufacturerSlides,
  getPublisher,
  getPublisherSlides,
} from '../requestActions/apm';
import {
  getProductsByAuthor,
  getProductsByManufacturer,
  getProductsByPublisher,
} from '../requestActions/commodity';

export const authorPage = async ({ params }) => {
  const index = params.id;

  return defer({
    author: getAuthor(index),
    authorSlides: getAuthorSlides(index),
    authorImages: getAuthorImages(index),
    authorProducts: getProductsByAuthor(index),
  });
};

export const manufacturerPage = async ({ params }) => {
  const index = params.id;

  return defer({
    manufacturer: getManufacturer(index),
    manufacturerSlides: getManufacturerSlides(index),
    manufacturerProducts: getProductsByManufacturer(index),
  });
};

export const publisherPage = async ({ params }) => {
  const index = params.id;

  return defer({
    publisher: getPublisher(index),
    publisherSlides: getPublisherSlides(index),
    publisherProducts: getProductsByPublisher(index),
  });
};
