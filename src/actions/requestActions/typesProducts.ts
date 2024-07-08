import {
  ProductCategoryDTO,
  ProductCategoryNameDTO,
  ProductSubcategoryDTO,
  ProductSubcategoryNameDTO,
  ProductTypeDTO,
  ProductTypeNameDTO,
} from '../types/requestActions';
import { AnyResponse } from '../types/types';

export const getCategories = async (index: number): Promise<AnyResponse<ProductCategoryDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/category?type=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getSubcategories = async (index: number): Promise<AnyResponse<ProductSubcategoryDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/subcategory?category=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getTypeName = async (index: number): Promise<AnyResponse<ProductTypeNameDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/type/name?type=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getCategoryName = async (index: number): Promise<AnyResponse<ProductCategoryNameDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/category/name?category=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getSubcategoryName = async (index: number): Promise<AnyResponse<ProductSubcategoryNameDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/subcategory/name?subcategory=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getTypeByCategory = async (index: number): Promise<AnyResponse<ProductTypeDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/type/category/name?category=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getTypeBySubcategory = async (index: number): Promise<AnyResponse<ProductTypeDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/type/subcategory/name?subcategory=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getCategoryBySubcategory = async (index: number): Promise<AnyResponse<ProductCategoryDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/category/subcategory/name?subcategory=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getTypeByProduct = async (index: number): Promise<AnyResponse<ProductTypeDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/type/product?product=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getCategoryByProduct = async (index: number): Promise<AnyResponse<ProductCategoryDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/category/product?product=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getSubcategoryByProduct = async (
  index: number,
): Promise<AnyResponse<ProductSubcategoryNameDTO>> => {
  try {
    const resp = await fetch(`https://db.greenbookva.shop/subcategory/product?product=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};
