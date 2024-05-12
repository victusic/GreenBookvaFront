import React from 'react';

import Pad from '../../../ui/pad/Pad';
import Loader from '../../../ui/loader/Loader';
import { Suspense } from 'react';
import PromotionPlate from '../../../modules/forSinglePages/group5/promotion/promotionPlate/PromotionPlate';
import NavigateLine from '../../../ui/navigate/navigateLine/NavigateLine';
import NavigateElement from '../../../ui/navigate/navigateElement/NavigateElement';
import NavigateArrow from '../../../ui/navigate/navigateArrow/NavigateArrow';

const Promotion = () => {
  return (
    <Pad>
      <Suspense fallback={<Loader />}>
        <NavigateLine>
          <NavigateElement route="/promotions">Акции</NavigateElement>
        </NavigateLine>

        <PromotionPlate />
      </Suspense>
    </Pad>
  );
};

export default Promotion;
