import { ProductCategory } from '../../utils/types';

export interface CategoriesState {
  categoriesCatalog: ProductCategory[];
  categoriesBottomLine: ProductCategory[];
  categoriesMenu2: ProductCategory[];
  categoriesMenu3: ProductCategory[];
}

export const LOAD_CATEGORIES_CATALOG = 'LOAD_CATEGORIES_CATALOG';
export const LOAD_CATEGORIES_BOTTOM_LINE = 'LOAD_CATEGORIES_BOTTOM_LINE';
/* Список жанров для меню 1 берётся из нижней линии*/
export const LOAD_CATEGORIES_MENU_2 = 'LOAD_CATEGORIES_MENU_2';
export const LOAD_CATEGORIES_MENU_3 = 'LOAD_CATEGORIES_MENU_3';

export interface LoadCategoriesCatalogAction {
  type: typeof LOAD_CATEGORIES_CATALOG;
  payload: ProductCategory[];
}

export interface LoadCategoriesBottomLineAction {
  type: typeof LOAD_CATEGORIES_BOTTOM_LINE;
  payload: ProductCategory[];
}

export interface LoadCategoriesMenu2Action {
  type: typeof LOAD_CATEGORIES_MENU_2;
  payload: ProductCategory[];
}

export interface LoadCategoriesMenu3Action {
  type: typeof LOAD_CATEGORIES_MENU_3;
  payload: ProductCategory[];
}

export type CategoriesActionTypes =
  | LoadCategoriesCatalogAction
  | LoadCategoriesBottomLineAction
  | LoadCategoriesMenu2Action
  | LoadCategoriesMenu3Action;
