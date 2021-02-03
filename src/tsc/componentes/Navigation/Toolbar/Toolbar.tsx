import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationList from '../NavigationList/NavigationList';
import DrawerToggler from '../SideDrawer/DrawerToogle/DrawerToogle';

interface ToolbarProps {
  showMenu: () => void;
}

const toolbar = (props: ToolbarProps) => (
  <header className="Toolbar">
    <DrawerToggler clicked={props.showMenu} />
    <Logo />
    <nav className="DesktopOnly">
      <NavigationList />
    </nav>
  </header>
);

export default toolbar;
