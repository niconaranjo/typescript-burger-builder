/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationList from '../NavigationList/NavigationList';

interface ToolbarProps {
  showMenu: () => void;
}

const toolbar = (props: ToolbarProps) => (
  <header className="Toolbar">
    <div onClick={props.showMenu}>MENU</div>
    <Logo />
    <nav className="DesktopOnly">
      <NavigationList />
    </nav>
  </header>
);

export default toolbar;
