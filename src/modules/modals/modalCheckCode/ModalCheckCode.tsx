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

import { fetchCheckGetCode, fetchCheckPostCode } from '../../../actions/storeActions/sign';
import ModalWarning from '../ui/ModalWarning/ModalWarning';
import { refreshCheckCodeAction } from '../../../store/modalVisibleReducer';
import Form from '../ui/Form/Form';
import { RootState } from '../../../store';
import { AnyAction } from 'redux';

const ModalCheckCode: React.FC = () => {
  const visible = useSelector((state: RootState) => state.modalVisible.modalCheckCodeVisible);
  const [visibleModal, setVisibleModal] = useState(styles.modalNone);

  const [code, setCode] = useState();

  const [time, setTime] = useState(60);

  const [visibleWarning, setVisibleWarning] = useState(false);

  const dispatchModalVisible = useDispatch();
  const dispatchSign = useDispatch();

  const profileId = useSelector((state: RootState) => state.profile.id);
  const mail = useSelector((state: RootState) => state.profile.mail);
  const signState = useSelector((state: RootState) => state.sign.signState);
  const token = useSelector((state: RootState) => state.sign.token);

  useEffect(() => {
    {
      visible ? setVisibleModal('') : setVisibleModal(styles.modalNone);
    }
    setTime(60);
  }, [visible]);

  function newCode() {
    setTime(60);
    dispatchSign(fetchCheckGetCode(profileId) as unknown as AnyAction);
  }

  useEffect(() => {
    {
      visible && dispatchSign(fetchCheckGetCode(profileId) as unknown as AnyAction);
    }
  }, [visible]);

  useEffect(() => {
    {
      signState === '-4' && dispatchModalVisible(refreshCheckCodeAction(false));
    }
    {
      signState === '-5' ? setVisibleWarning(true) : setVisibleWarning(false);
    }
  }, [signState]);

  function goSign(e) {
    e.preventDefault();
    dispatchSign(fetchCheckPostCode(code, mail, token) as unknown as AnyAction);
  }

  return (
    <div className={visibleModal}>
      <Modal>
        <Form onSubmit={goSign}>
          <ModalTitle>Подтвержение действия</ModalTitle>
          <ModalReturn>
            Для подтверждения того, что это действительно вы, на почту был отправлен код подтверждения
          </ModalReturn>
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

export default ModalCheckCode;
