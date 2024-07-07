import React from 'react';

import styles from './profileButtonsLine.module.scss';
import HighPaddingButton from '../../../../../ui/buttons/highPaddingButton/HighPaddingButton';
import Cookies from 'js-cookie';

import {
  refreshCheckCodeAction,
  refreshModalDeleteProfileAction,
  refreshModalUpdateProfileAction,
} from '../../../../../store/modalVisibleReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProfileButtonsLine: React.FC = () => {
  const dispatchModalVisible = useDispatch();
  const navigate = useNavigate();

  function updateProfile() {
    const realCheck = Cookies.get('realCheck');
    {
      realCheck
        ? dispatchModalVisible(refreshModalUpdateProfileAction(true))
        : dispatchModalVisible(refreshCheckCodeAction(true));
    }
  }

  function deleteProfile() {
    const realCheck = Cookies.get('realCheck');
    {
      realCheck
        ? dispatchModalVisible(refreshModalDeleteProfileAction(true))
        : dispatchModalVisible(refreshCheckCodeAction(true));
    }
  }

  function exit() {
    Cookies.remove('profileId');
    navigate('/');
    window.location.reload();
  }

  return (
    <div className={styles.buttonLine}>
      <HighPaddingButton onClick={updateProfile}>Редактировать профиль</HighPaddingButton>
      <HighPaddingButton onClick={deleteProfile}>Удалить профиль</HighPaddingButton>
      <HighPaddingButton onClick={exit} style={{ background: '#D3DFDA' }}>
        Выйти
      </HighPaddingButton>
    </div>
  );
};

export default ProfileButtonsLine;
