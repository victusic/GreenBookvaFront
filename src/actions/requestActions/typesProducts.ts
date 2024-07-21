import { useSelector } from 'react-redux';
import {
  ProductCategoryDTO,
  ProductCategoryNameDTO,
  ProductSubcategoryDTO,
  ProductSubcategoryNameDTO,
  ProductTypeDTO,
  ProductTypeNameDTO,
} from '../types/requestActions';
import { AnyResponse } from '../types/types';
import { RootState } from '../../store';

export const getCategories = async (index: number): Promise<AnyResponse<ProductCategoryDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}category?type=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getSubcategories = async (index: number): Promise<AnyResponse<ProductSubcategoryDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}subcategory?category=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getTypeName = async (index: number): Promise<AnyResponse<ProductTypeNameDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}type/name?type=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getCategoryName = async (index: number): Promise<AnyResponse<ProductCategoryNameDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}category/name?category=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getSubcategoryName = async (index: number): Promise<AnyResponse<ProductSubcategoryNameDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}subcategory/name?subcategory=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getTypeByCategory = async (index: number): Promise<AnyResponse<ProductTypeDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}type/category/name?category=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getTypeBySubcategory = async (index: number): Promise<AnyResponse<ProductTypeDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}type/subcategory/name?subcategory=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getCategoryBySubcategory = async (index: number): Promise<AnyResponse<ProductCategoryDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}category/subcategory/name?subcategory=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getTypeByProduct = async (index: number): Promise<AnyResponse<ProductTypeDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}type/product?product=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getCategoryByProduct = async (index: number): Promise<AnyResponse<ProductCategoryDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}category/product?product=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getSubcategoryByProduct = async (
  index: number,
): Promise<AnyResponse<ProductSubcategoryNameDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}subcategory/product?product=${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};
