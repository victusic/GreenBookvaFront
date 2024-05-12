import { defer } from 'react-router-dom';
import {
  getProductOne,
  getProductOneImages,
  getProductOneImagesList,
  getProductOneReviews,
  getProductsBest,
  getProductsBestsellers,
  getProductsByAuthor,
  getProductsByCategory,
  getProductsByManufacturer,
  getProductsByPublisher,
  getProductsBySubcategory,
  getProductsByType,
  getProductsNew,
} from '../requestActions/commodity';
import { getPromotionsSlider, getRecommendationBanner } from '../requestActions/mainPage';
import {
  getCategories,
  getCategoryBySubcategory,
  getCategoryName,
  getTypeBySubcategory,
  getSubcategories,
  getTypeByCategory,
  getTypeName,
  getSubcategoryName,
  getTypeByProduct,
  getCategoryByProduct,
  getSubcategoryByProduct,
} from '../requestActions/typesProducts';

export const mainPage = async () => {
  return defer({
    promotions: getPromotionsSlider(),
    recommandationBanner: getRecommendationBanner(),
    booksNew: getProductsNew(),
    booksArt: getProductsByCategory(11),
    booksScience: getProductsByCategory(4),
    booksBestsellers: getProductsBestsellers(),
    bookHistory: getProductsBySubcategory(22),
    bookPhilosophy: getProductsByCategory(10),
    booksBest: getProductsBest(),
  });
};

export const product0LevelPage = async ({ params }) => {
  const index = params.id;

  return defer({
    type: getTypeName(index),
    categories: getCategories(index),
    products: getProductsByType(index),
  });
};

export const info1LevelPage = async ({ params }) => {
  const index = params.id;

  return defer({
    type: getTypeByCategory(index),
    categoryName: getCategoryName(index),
    subcategories: getSubcategories(index),
  });
};

export const info2LevelPage = async ({ params }) => {
  const index = params.id;

  return defer({
    type: getTypeBySubcategory(index),
    subcategoryName: getSubcategoryName(index),
    category: getCategoryBySubcategory(index),
  });
};

export const productPage = async ({ params }) => {
  const index = params.id;

  const productTypeLoad = await getTypeByProduct(index);
  const productTypeId = productTypeLoad[0].id;

  const productCategoryLoad = await getCategoryByProduct(index);
  const productCategoryId = productCategoryLoad[0].id;
  const productCategoryName = productCategoryLoad[0].name;

  const productSubcategoryLoad = await getSubcategoryByProduct(index);
  const productSubcategoryId = productSubcategoryLoad[0].id;

  const productData = await getProductOne(index);
  const productAuthorId = productData[0].autor_id;
  const productAuthorName = productData[0].autor_name;
  const productAuthorSurname = productData[0].autor_surname;
  const productPublisherId = productData[0].publisher_id;
  const productPublisherName = productData[0].publisher;
  const productManufactuerId = productData[0].manufacturer_id;
  const productManufactuerName = productData[0].manufacturer;

  if (productTypeId === 1) {
    return defer({
      product: productData,
      images: getProductOneImages(index),
      reviews: getProductOneReviews(index),
      type: productTypeLoad,
      category: productCategoryLoad,
      subcategory: productSubcategoryLoad,
      product1Line: getProductsBySubcategory(productSubcategoryId),
      product2LineName: `Книги автора: ${productAuthorName} ${productAuthorSurname && productAuthorSurname}`,
      product2Line: getProductsByAuthor(productAuthorId),
      product3LineName: `Книги издательства: ${productPublisherName}`,
      product3Line: getProductsByPublisher(productPublisherId),
    });
  } else {
    return defer({
      product: productData,
      images: getProductOneImages(index),
      reviews: getProductOneReviews(index),
      type: productTypeLoad,
      category: productCategoryLoad,
      subcategory: productSubcategoryLoad,
      product1Line: getProductsBySubcategory(productSubcategoryId),
      product2LineName: `Товары ${productManufactuerName}`,
      product2Line: getProductsByManufacturer(productManufactuerId),
      product3LineName: productCategoryName,
      product3Line: getProductsByCategory(productCategoryId),
    });
  }
};

export const productImages = async ({ params }) => {
  const index = params.id;

  return defer({
    imagesList: getProductOneImagesList(index),
  });
};
