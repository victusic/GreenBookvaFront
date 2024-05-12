import React from 'react';
import WarningElement from '../../../ui/warningElement/WarningElement';
import Pad from '../../../ui/pad/Pad';

const P404 = () => {
  return (
    <Pad>
      <WarningElement status="404" statusText="Ой! Кажется, такой страницы нет" is404={true} />
    </Pad>
  );
};

export default P404;
