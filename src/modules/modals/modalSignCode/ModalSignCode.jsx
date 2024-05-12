import React, { useEffect, useState } from 'react';
import Modal from '../../../ui/modal/Modal';
import ModalButton from '../ui/ModalButton/ModalButton';

import { useDispatch, useSelector } from 'react-redux';
import styles from '../modalNone.module.scss';
import ModalTitle from '../ui/ModalTitle/ModalTitle';
import ModalDescription from '../ui/ModalDescription/ModalDescription';
import ModalInput from '../ui/ModalInput/ModalInput';
import ModalReturn from '../ui/ModalReturn/ModalReturn';
import ModalTimer from '../ui/ModalTimer/ModalTimer';

import { refreshModalSIgnCodeVisibleAction } from '../../../store/modalVisibleReducer';
import { refreshModalSIgnVisibleAction } from '../../../store/modalVisibleReducer';
import { refreshModalSIgnUpVisibleAction } from '../../../store/modalVisibleReducer';

import { fetchSignPostCode, fetchSignGetCode } from '../../../actions/storeActions/sign';
import { fetchProfileBase } from '../../../actions/storeActions/profile';
import Cookies from 'js-cookie';
import { refreshProfileAction, refreshSignStateAction } from '../../../store/signReducer';
import ModalWarning from '../ui/ModalWarning/ModalWarning';
import Form from '../ui/Form/Form';

const ModalSignCode = () => {
  const visible = useSelector((state) => state.modalVisible.modalSignCodeVisible);
  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  const [code, setCode] = useState();

  const [time, setTime] = useState(60);

  const [visibleWarning, setVisibleWarning] = useState(false);

  const dispatchModalVisible = useDispatch();
  const dispatchSign = useDispatch();
  const dispatchProfile = useDispatch();

  const mail = useSelector((state) => state.sign.mail);
  const token = useSelector((state) => state.sign.token);
  const profile = useSelector((state) => state.sign.profile);
  const signState = useSelector((state) => state.sign.signState);

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
    setTime(60);
  }, [visible]);

  function returnModal() {
    dispatchModalVisible(refreshModalSIgnVisibleAction(true));
    dispatchModalVisible(refreshModalSIgnCodeVisibleAction(false));
    dispatchSign(refreshSignStateAction(''));
    setCode('');
  }

  function newCode() {
    setTime(60);
    dispatchSign(fetchSignGetCode(mail));
  }

  function goSign(e) {
    e.preventDefault();
    dispatchSign(fetchSignPostCode(code, mail, token));
  }

  useEffect(() => {
    if (profile) {
      dispatchProfile(fetchProfileBase(profile));
    }
  }, [profile]);

  useEffect(() => {
    if (signState === 0) {
      dispatchModalVisible(refreshModalSIgnCodeVisibleAction(false));
    }
    if (signState === 1) {
      dispatchModalVisible(refreshModalSIgnCodeVisibleAction(false));
      dispatchModalVisible(refreshModalSIgnUpVisibleAction(true));
    }
    {
      signState === -5 ? setVisibleWarning(true) : setVisibleWarning(false);
    }
  }, [signState]);

  //автозаход в профиль
  useEffect(() => {
    setVisibleWarning(false);
    const profileState = Cookies.get('profileId');
    if (profileState) {
      dispatchSign(refreshSignStateAction(0));
      dispatchSign(refreshProfileAction(profileState));
    }
  }, []);

  return (
    <div className={visibleModal}>
      <Modal>
        <Form onSubmit={goSign}>
          <ModalTitle>Вход и регистрация</ModalTitle>
          <ModalReturn onClick={returnModal}>❮ Указать другой адрес почты</ModalReturn>
          <ModalDescription>Код отправлен на почту: {mail}</ModalDescription>
          <ModalWarning visibleWarning={visibleWarning}>Код указан неверно</ModalWarning>
          <ModalInput type="text" placeholder="Код" value={code} onChange={(e) => setCode(e.target.value)} />
          <ModalTimer newCode={newCode} setTime={setTime} time={time} />
          <ModalButton>Продолжить</ModalButton>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalSignCode;
