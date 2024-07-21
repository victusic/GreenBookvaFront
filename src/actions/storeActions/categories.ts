import { useSelector } from 'react-redux';
import { loadCategoriesCatalogAction } from '../../store/categoriesReducer';
import { loadCategoriesBottomLineAction } from '../../store/categoriesReducer';
import { loadCategoriesMenu2Action } from '../../store/categoriesReducer';
import { loadCategoriesMenu3Action } from '../../store/categoriesReducer';
import { RootState } from '../../store';

export const fetchCategoriesCatalog = (type) => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  return function (dispatchCategories) {
    fetch(`${apiUrl}category?type=` + type)
      .then((response) => response.json())
      .then((json) => dispatchCategories(loadCategoriesCatalogAction(json)));
  };
};

export const fetchCategoriesBottomLine = () => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  return function (dispatchCategories) {
    fetch(`${apiUrl}category?type=1`)
      .then((response) => response.json())
      .then((json) => dispatchCategories(loadCategoriesBottomLineAction(json)));
  };
};

export const fetchCategoriesMenu2 = () => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  return function (dispatchCategories) {
    fetch(`${apiUrl}category?type=2`)
      .then((response) => response.json())
      .then((json) => dispatchCategories(loadCategoriesMenu2Action(json)));
  };
};

export const fetchCategoriesMenu3 = () => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  return function (dispatchCategories) {
    fetch(`${apiUrl}category?type=3`)
      .then((response) => response.json())
      .then((json) => dispatchCategories(loadCategoriesMenu3Action(json)));
  };
};
