import { loadCategoriesCatalogAction } from '../../store/categoriesReducer';
import { loadCategoriesBottomLineAction } from '../../store/categoriesReducer';
import { loadCategoriesMenu2Action } from '../../store/categoriesReducer';
import { loadCategoriesMenu3Action } from '../../store/categoriesReducer';
import { apiUrl } from '../types/types';

export const fetchCategoriesCatalog = (type) => {
  return function (dispatchCategories) {
    fetch(`${apiUrl}category?type=` + type)
      .then((response) => response.json())
      .then((json) => dispatchCategories(loadCategoriesCatalogAction(json)));
  };
};

export const fetchCategoriesBottomLine = () => {
  return function (dispatchCategories) {
    fetch(`${apiUrl}category?type=1`)
      .then((response) => response.json())
      .then((json) => dispatchCategories(loadCategoriesBottomLineAction(json)));
  };
};

export const fetchCategoriesMenu2 = () => {
  return function (dispatchCategories) {
    fetch(`${apiUrl}category?type=2`)
      .then((response) => response.json())
      .then((json) => dispatchCategories(loadCategoriesMenu2Action(json)));
  };
};

export const fetchCategoriesMenu3 = () => {
  return function (dispatchCategories) {
    fetch(`${apiUrl}category?type=3`)
      .then((response) => response.json())
      .then((json) => dispatchCategories(loadCategoriesMenu3Action(json)));
  };
};
