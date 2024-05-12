import React from 'react';

import Pad from '../../../ui/pad/Pad';
import FavoritesGridPlate from '../../../modules/forSinglePages/group1/favorites/favoritesGridPlate/FavoritesGridPlate';
import { Await, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../../../ui/loader/Loader';
import FavoritesTitle from '../../../modules/forSinglePages/group1/favorites/favoritesTitle/FavoritesTitle';
import FavoritesNoProduct from '../../../modules/forSinglePages/group1/favorites/favoritesNoProduct/FavoritesNoProduct';
import { useSelector } from 'react-redux';
import NoProfile from '../../../modules/FCONoData/noProfile/NoProfile';

const Favorites = () => {
  const { products } = useLoaderData();
  const profile = useSelector((state) => state.profile.id);

  return (
    <Pad>
      <Suspense fallback={<Loader />}>
        {profile ? (
          <Await resolve={products}>
            {(products) => (
              <>
                <FavoritesTitle products={products} />
                <FavoritesGridPlate products={products} />
                <FavoritesNoProduct products={products} />
              </>
            )}
          </Await>
        ) : (
          <>
            <FavoritesTitle products={[]} />
            <NoProfile />
          </>
        )}
      </Suspense>
    </Pad>
  );
};

export default Favorites;
