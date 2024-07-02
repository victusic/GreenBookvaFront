import React from 'react';

import Pad from '../../../ui/pad/Pad';

import ProfilePlate from '../../../modules/forSinglePages/group1/profile/profilePlate/ProfilePlate';
import ProfileButtonsLine from '../../../modules/forSinglePages/group1/profile/profileButtonsLine/ProfileButtonsLine';
import ProfileCardsLine from '../../../modules/forSinglePages/group1/profile/profileCardsLine/ProfileCardsLine';

const Profile: React.FC = () => {
  return (
    <Pad>
      <ProfilePlate />
      <ProfileButtonsLine />
      <ProfileCardsLine />
    </Pad>
  );
};

export default Profile;
