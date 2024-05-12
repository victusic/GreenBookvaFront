import { Provider } from 'react-redux';
import { store } from '../store';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Layout from '../pages/group6/layout/Layout';
import P404 from '../pages/group6/404/P404';
import Error from '../pages/group6/error/Error';
import About from '../pages/group4/about/About';
import BonusProgram from '../pages/group4/bonusProgram/BonusProgram';
import Feedback from '../pages/group4/feedback/Feedback';
import Promotions from '../pages/group5/promotions/Promotions';
import Profile from '../pages/group1/profile/Profile';
import Main from '../pages/group2/main/Main';

import Product0Level from '../pages/group2/product0Level/Product0Level';
import {
  mainPage,
  product0LevelPage,
  info1LevelPage,
  info2LevelPage,
  productPage,
  productImages,
} from '../actions/pageAcrions/group2';
import { promotionPage, promotionsPage } from '../actions/pageAcrions/group5';
import Promotion from '../pages/group5/promotion/Promotion';
import Product1Level from '../pages/group2/product1Level/Product1Level';
import Select from '../ui/select/Select';
import Product2Level from '../pages/group2/product2Level/Product2Level';
import ProductFind from '../pages/group2/productFind/ProductFind';
import Autor from '../pages/group3/autor/Autor';
import { authorPage, manufacturerPage, publisherPage } from '../actions/pageAcrions/group3';
import Manufacturer from '../pages/group3/manufacturer/Manufacturer';
import Publisher from '../pages/group3/publisher/Publisher';
import Favorites from '../pages/group1/favorites/Favorites';
import { cartPage, favoritesPage, ordersPage } from '../actions/pageAcrions/group1';
import Orders from '../pages/group1/orders/Orders';
import Cart from '../pages/group1/cart/Cart';
import Product from '../pages/group2/product/Product';
import ProductImages from '../pages/group6/productImages/ProductImages';

function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} loader={mainPage} errorElement={<Error />} />

          <Route path="1" element={<Select />} />

          <Route path="profile" element={<Profile />} />
          <Route path="favorites" element={<Favorites />} loader={favoritesPage} errorElement={<Error />} />
          <Route path="orders" element={<Orders />} loader={ordersPage} errorElement={<Error />} />
          <Route path="cart" element={<Cart />} loader={cartPage} errorElement={<Error />} />

          <Route
            path="type/:id"
            element={<Product0Level />}
            loader={product0LevelPage}
            errorElement={<Error />}
          />
          <Route
            path="category/:id"
            element={<Product1Level />}
            loader={info1LevelPage}
            errorElement={<Error />}
          />
          <Route
            path="subcategory/:id"
            element={<Product2Level />}
            loader={info2LevelPage}
            errorElement={<Error />}
          />
          <Route path="find/:findString" element={<ProductFind />} />
          <Route path="product/:id" element={<Product />} loader={productPage} errorElement={<Error />} />

          <Route path="author/:id" element={<Autor />} loader={authorPage} errorElement={<Error />} />
          <Route
            path="manufacturer/:id"
            element={<Manufacturer />}
            loader={manufacturerPage}
            errorElement={<Error />}
          />
          <Route
            path="publisher/:id"
            element={<Publisher />}
            loader={publisherPage}
            errorElement={<Error />}
          />

          <Route path="bonus" element={<BonusProgram />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="about" element={<About />} />

          <Route
            path="promotions"
            element={<Promotions />}
            loader={promotionsPage}
            errorElement={<Error />}
          />
          <Route
            path="promotion/:id"
            element={<Promotion />}
            loader={promotionPage}
            errorElement={<Error />}
          />

          <Route path="*" element={<P404 />} />
        </Route>
        <Route
          path="/product/:id/images"
          element={<ProductImages />}
          loader={productImages}
          errorElement={<Error />}
        />
      </>,
    ),
  );

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default Routes;
