import { useSelector } from 'react-redux';
import { ProductDTO, ProductImageDTO, ProductImageListDTO, ReviewDTO } from '../types/requestActions';
import { AnyResponse } from '../types/types';
import { RootState } from '../../store';

export const getProductsNew = async (): Promise<AnyResponse<ProductDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}commodity/product/new`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getProductsBestsellers = async (): Promise<AnyResponse<ProductDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}commodity/product/bestseller`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getProductsBest = async (): Promise<AnyResponse<ProductDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}commodity/product/best`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getProductsByCategory = async (index): Promise<AnyResponse<ProductDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}commodity/product?category=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getProductsBySubcategory = async (index: number): Promise<AnyResponse<ProductDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}commodity/product?subcategory=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getProductsByType = async (index: number): Promise<AnyResponse<ProductDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}commodity/product/types?type=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getProductsByPromotion = async (index: number): Promise<AnyResponse<ProductDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}commodity/product?promotion=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getProductsNoPromotion = async (index: number): Promise<AnyResponse<ProductDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}commodity/product?no_promotion=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getProductsList = async (
  requestType: string,
  id: number,
  limit: number,
  page: number,
  sort: number,
  isStock: boolean,
  bindings: number[],
  badges: number[],
  authors: number[],
  publishers: number[],
  manufacturers: number[],
  minPrice: number,
  maxPrice: number,
): Promise<AnyResponse<ProductDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  const url = new URL(`${apiUrl}commodity/list/product`);
  const params: { [key: string]: string | number | boolean } = {
    limit,
    page,
    minPrice,
    maxPrice,
  };

  requestType === 'category' ? (params.category = id) : (params.subcategory = id);
  if (sort > 0) params.sort = sort;
  if (isStock) params.stock = isStock;
  if (minPrice) params.minPrice = minPrice;
  if (maxPrice) params.maxPrice = maxPrice;
  if (bindings) params.binding = bindings.map(String).join('|');
  if (authors) params.author = authors.map(String).join('|');
  if (publishers) params.publisher = publishers.map(String).join('|');
  if (manufacturers) params.manufacturer = manufacturers.map(String).join('|');

  if (badges) {
    const findNovelty = badges.findIndex((item) => item === 0);
    if (findNovelty !== -1) params.novelty = 'true';

    const findDiscount = badges.findIndex((item) => item === 1);
    if (findDiscount !== -1) params.discount = 'true';

    const findSalesLeader = badges.findIndex((item) => item === 2);
    if (findSalesLeader !== -1) params.sales_leader = 'true';
  }

  Object.keys(params).forEach((key) => url.searchParams.append(key, String(params[key])));

  try {
    const resp = await fetch(url);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getCountProductsList = async (
  requestType: string,
  id: number,
  isStock: boolean,
  bindings: number[],
  badges: number[],
  authors: number[],
  publishers: number[],
  manufacturers: number[],
  minPrice: number,
  maxPrice: number,
): Promise<AnyResponse<string>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  const url = new URL(`${apiUrl}commodity/info/list/product?`);

  const params: { [key: string]: string | number | boolean } = {
    minPrice,
    maxPrice,
  };

  requestType === 'category' ? (params.category = id) : (params.subcategory = id);
  if (isStock) params.stock = isStock;
  if (minPrice) params.minPrice = minPrice;
  if (maxPrice) params.maxPrice = maxPrice;
  if (bindings) params.binding = bindings.map(String).join('|');
  if (authors) params.author = authors.map(String).join('|');
  if (publishers) params.publisher = publishers.map(String).join('|');
  if (manufacturers) params.manufacturer = manufacturers.map(String).join('|');

  if (badges) {
    const findNovelty = badges.findIndex((item) => item === 0);
    if (findNovelty !== -1) params.novelty = 'true';

    const findDiscount = badges.findIndex((item) => item === 1);
    if (findDiscount !== -1) params.discount = 'true';

    const findSalesLeader = badges.findIndex((item) => item === 2);
    if (findSalesLeader !== -1) params.sales_leader = 'true';
  }
  Object.keys(params).forEach((key) => url.searchParams.append(key, String(params[key])));

  try {
    const resp = await fetch(url.toString());
    const totalCount = resp.headers.get('x-total-count');
    return { status: true, data: totalCount || '0' };
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getInfoProductsList = async (
  requestType: string,
  id: number,
  isStock: boolean,
  bindings: number[],
  minPrice: number,
  maxPrice: number,
): Promise<AnyResponse<ProductDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  const url = new URL(`${apiUrl}commodity/info/list/product?`);
  const params: { [key: string]: string | number | boolean } = {
    minPrice,
    maxPrice,
  };

  requestType === 'category' ? (params.category = id) : (params.subcategory = id);

  if (isStock) params.stock = isStock;

  if (bindings) {
    const joinedBindings = bindings.map(String).join('|');
    params.binding = joinedBindings;
  }

  Object.keys(params).forEach((key) => url.searchParams.append(key, String(params[key])));

  try {
    const resp = await fetch(url);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getProductsByAuthor = async (index: number): Promise<AnyResponse<ProductDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}commodity/product?author=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getProductsByManufacturer = async (index: number): Promise<AnyResponse<ProductDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}commodity/product?manufacturer=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getProductsByPublisher = async (index: number): Promise<AnyResponse<ProductDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}commodity/product?publisher=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getProductOne = async (index: number): Promise<AnyResponse<ProductDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}commodity/one/product/${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getProductOneImages = async (index: number): Promise<AnyResponse<ProductImageDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}commodity/one/product/${index}/images`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getProductOneImagesList = async (index: number): Promise<AnyResponse<ProductImageListDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}commodity/one/product/${index}/images/list`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getProductOneReviews = async (index: number): Promise<AnyResponse<ReviewDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}commodity/one/product/${index}/reviews`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};
