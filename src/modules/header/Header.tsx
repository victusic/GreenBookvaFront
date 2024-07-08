import React from 'react';

import styles from './header.module.scss';

import CentralLine from './components/centralLine/CentralLine';
import BottomLine from './components/bottomLine/BottomLine';
import TopLine from './components/topLine/TopLine';
import LocationPlate from './components/locationPlate/LocationPlate';
import Catalog from './components/catalog/Catalog';
import Menu from './components/menu/Menu';

const Header: React.FC = () => {
  return (
    <header className={styles.plate}>
      <LocationPlate />
      <Catalog />
      <Menu />
      <TopLine />
      <CentralLine />
      <BottomLine />
    </header>
  );
};

export default Header;
