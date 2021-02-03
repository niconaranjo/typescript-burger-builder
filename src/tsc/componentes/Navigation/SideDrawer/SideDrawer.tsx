import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationList from '../NavigationList/NavigationList';
import Backdrop from '../../UI/Backdrop/Backdrop';

interface SideDrawerInterface {
  open: boolean;
  closed: () => void;
}

const SideDrawer = (props: SideDrawerInterface) => (
  <>
    <Backdrop show={props.open} click={props.closed} />
    <div className={props.open ? 'SideDrawer Open' : 'SideDrawer Close'}>
      <Logo />
      <NavigationList />
    </div>
  </>
);

export default SideDrawer;
