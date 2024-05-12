import React, { useEffect, useState } from 'react';
import Modal from '../../../ui/modal/Modal';
import ModalButton from '../ui/ModalButton/ModalButton';

import { useDispatch, useSelector } from 'react-redux';
import styles from '../modalNone.module.scss';
import ModalTitle from '../ui/ModalTitle/ModalTitle';
import ModalFinish from '../ui/ModalFinish/ModalFinish';
import { refreshProfileAction } from '../../../store/signReducer';

const ModalSignUpFinish = () => {
  const visible = useSelector((state) => state.modalVisible.modalSignUpFinishVisible);
  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  const dispatchSign = useDispatch();

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
  }, [visible]);

  const signState = useSelector((state) => state.sign.signState);
  const profile = useSelector((state) => state.sign.profile);

  useEffect(() => {
    if (signState === 2) {
      dispatchSign(refreshProfileAction(profile));
    }
  }, [signState]);

  return (
    <div className={visibleModal}>
      <Modal>
        <ModalTitle>Регистрация</ModalTitle>
        <ModalFinish />
        <ModalButton onClick={() => window.location.reload()}>Перейти к покупкам</ModalButton>
      </Modal>
    </div>
  );
};

export default ModalSignUpFinish;
