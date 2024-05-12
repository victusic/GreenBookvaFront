import React from 'react';

import ModalSign from '../../modules/modals/modalSign/ModalSign';
import ModalSignCode from '../../modules/modals/modalSignCode/ModalSignCode';
import ModalSignUp from '../../modules/modals/modalSignUp/ModalSignUp';
import ModalSignUpFinish from '../../modules/modals/modalSignUpFinish/ModalSignUpFinish';
import ModalUpdateProfile from '../../modules/modals/modalUpdateProfile/ModalUpdateProfile';
import ModalDeleteProfile from '../../modules/modals/modalDeleteProfile/ModalDeleteProfile';
import ModalViewCard from '../../modules/modals/modalViewCard/ModalViewCard';
import ModalDeleteCard from '../../modules/modals/modalDeleteCard/ModalDeleteCard';
import ModalAddCard from '../../modules/modals/modalAddCart/ModalAddCart';
import ModalCheckCode from '../../modules/modals/modalCheckCode/ModalCheckCode';
import ModalOrder from '../../modules/modals/modalOrder/ModalOrder';
import ModalProductLimit from '../../modules/modals/modalProductLimit/ModalProductLimit';
import ModalPay from '../../modules/modals/modalPay/ModalPay';
import ModalAddReview from '../../modules/modals/modalAddReview/ModalAddReview';
import ModalUpdateReview from '../../modules/modals/modalUpdateReview/ModalUpdateReview';
import ModalDeleteReview from '../../modules/modals/modalDeleteReview/ModalDeleteReview';
import ModalInfoCookie from '../../modules/modals/modalInfoCookie/ModalInfoCookie';

const Modals = () => {
  return (
    <>
      <ModalSign />
      <ModalSignCode />
      <ModalSignUp />
      <ModalSignUpFinish />
      <ModalUpdateProfile />
      <ModalDeleteProfile />
      <ModalViewCard />
      <ModalDeleteCard />
      <ModalAddCard />
      <ModalCheckCode />
      <ModalPay />
      <ModalOrder />
      <ModalProductLimit />
      <ModalAddReview />
      <ModalUpdateReview />
      <ModalDeleteReview />
      <ModalInfoCookie />
    </>
  );
};

export default Modals;
