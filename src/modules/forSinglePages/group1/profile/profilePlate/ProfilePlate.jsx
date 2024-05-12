import React from 'react';
import SingleTitle from '../../../../../ui/titles/singleTitle/SingleTitle';

import styles from './profilePlate.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  refreshCheckCodeAction,
  refreshModalUpdateProfileAction,
} from '../../../../../store/modalVisibleReducer';
import moment from 'moment/moment';
import NoAvatar from '../../../../../assets/img/no-avatar.png';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { fetchProfileCardsList } from '../../../../../actions/storeActions/profile';
import { refreshProfileAction, refreshSignStateAction } from '../../../../../store/signReducer';

const ProfilePlate = () => {
  const avatarRoute = useSelector((state) => state.imagesRoutes.avatar);

  const dispathProfile = useDispatch();
  const dispatchSign = useDispatch();
  const dispathModalVisible = useDispatch();
  const navigate = useNavigate();

  const profileId = useSelector((state) => state.profile.id);
  const name = useSelector((state) => state.profile.name);
  const surname = useSelector((state) => state.profile.surname);
  const mail = useSelector((state) => state.profile.mail);
  const points = useSelector((state) => state.profile.points);
  const color = useSelector((state) => state.profile.color);
  const image = useSelector((state) => state.profile.image);
  const birthday = useSelector((state) => state.profile.birthday);
  const orders = useSelector((state) => state.profile.orders);
  const formattedDate = moment(birthday).format('DD.MM.YYYY');

  useEffect(() => {
    if (profileId) {
      dispathProfile(fetchProfileCardsList(profileId));
    }
  }, [name]);

  //проверка на то, что пользователь подтвердил почту давно, и на наличие входа вообще, если пользователь зашёл по url

  useEffect(() => {
    const profileState = Cookies.get('profileId');
    if (profileState) {
      dispatchSign(refreshSignStateAction(0));
      dispatchSign(refreshProfileAction(profileState));
    } else {
      navigate('/');
    }
  }, []);

  function updateProfile() {
    const realCheck = Cookies.get('realCheck');
    {
      realCheck
        ? dispathModalVisible(refreshModalUpdateProfileAction(true))
        : dispathModalVisible(refreshCheckCodeAction(true));
    }
  }

  return (
    <>
      <SingleTitle>Профиль</SingleTitle>

      <div className={styles.profilePlate}>
        <div className={styles.flexPad}>
          {image ? (
            <img
              src={image.length < 26 ? avatarRoute + image : image}
              alt={name}
              className={styles.profileImg}
              onClick={updateProfile}
            ></img>
          ) : (
            <img
              src={NoAvatar}
              alt={'Фотография профиля отсутствует'}
              className={styles.profileImg}
              onClick={updateProfile}
            ></img>
          )}
          <div className={styles.infoPlate}>
            <div>
              <h3 className={styles.profileName} style={{ color: color }}>
                {name + ' ' + surname}
              </h3>
              <p className={styles.profileMail}>{mail}</p>
              <p className={styles.profileBirthday}>{'Дата рождения: ' + formattedDate}</p>
            </div>
            <h5 className={styles.profileOrders}>{'Количество заказов: ' + orders}</h5>
          </div>
        </div>

        <div className={styles.pointsPlate}>
          <h3 className={styles.pointsTitle}>Количество баллов:</h3>
          <h2 className={styles.pointsCount}>{points}</h2>
        </div>
      </div>

      <div className={styles.pointsMobileBlock}>
        <h5 className={styles.pointsMobileBlockText}>
          Количество баллов: <span className={styles.pointsMobileBlockCount}>{points}</span>
        </h5>
      </div>
    </>
  );
};

export default ProfilePlate;
