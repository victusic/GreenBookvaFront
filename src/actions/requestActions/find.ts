import { ProductDTO } from '../types/requestActions';
import { AnyResponse } from '../types/types';

export const getFindProductsList = async (
  findString: string,
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
  const url = new URL('https://db.greenbookva.shop/find');
  const params: { [key: string]: string | number | boolean } = {
    findString,
    limit,
    page,
    minPrice,
    maxPrice,
  };

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

export const getFindCountProductsList = async (
  findString: string,
  isStock: boolean,
  bindings: number[],
  badges: number[],
  authors: number[],
  publishers: number[],
  manufacturers: number[],
  minPrice: number,
  maxPrice: number,
): Promise<AnyResponse<string>> => {
  const url = new URL('https://db.greenbookva.shop/find/info');

  const params: { [key: string]: string | number | boolean } = {
    findString: findString,
    min_price: minPrice,
    max_price: maxPrice,
  };

  if (isStock) params.stock = isStock;
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

export const getFindInfoProductsList = async (
  findString: string,
  isStock: boolean,
  bindings: number[],
  minPrice: number,
  maxPrice: number,
): Promise<AnyResponse<ProductDTO[]>> => {
  const url = new URL('https://db.greenbookva.shop/find/info');
  const params: { [key: string]: string | number | boolean } = {
    findString,
    minPrice,
    maxPrice,
  };

  if (isStock) params.stock = isStock;

  if (bindings) params.binding = bindings.map(String).join('|');

  Object.keys(params).forEach((key) => url.searchParams.append(key, String(params[key])));

  try {
    const resp = await fetch(url);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};
