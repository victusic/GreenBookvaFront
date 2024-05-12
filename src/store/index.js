import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { locationReducer } from './locationReducer';
import { currentReducer } from './currentReducer';
import { headerElementsReducer } from './headerElementsReducer';
import { townsListReducer } from './townsListReducer';
import { categoriesReducer } from './categoriesReducer';
import { exchangeRateReducer } from './exchangeRateReducer';
import { modalVisibleReducer } from './modalVisibleReducer';
import { signReducer } from './signReducer';
import { profileReducer } from './profileReducer';
import { stocksReducer } from './stocksReducer';
import { filterProductsReducer } from './filterProductsReducer';
import { sortReducer } from './sortReducer';
import { externalLinksReducer } from './externalLinks';
import { imagesRoutesReducer } from './imagesRoutes';

const rootReducer = combineReducers({
  location: locationReducer,
  current: currentReducer,
  headersElements: headerElementsReducer,
  townsList: townsListReducer,
  categories: categoriesReducer,
  exchange: exchangeRateReducer,
  modalVisible: modalVisibleReducer,
  sign: signReducer,
  profile: profileReducer,
  stocks: stocksReducer,
  filter: filterProductsReducer,
  sort: sortReducer,
  externalLinks: externalLinksReducer,
  imagesRoutes: imagesRoutesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
