import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationList = () => (
  <ul className="NavigationList">
    <NavigationItem link="./">Burger </NavigationItem>
    <NavigationItem link="/checkout">Checkout</NavigationItem>
  </ul>
);

export default NavigationList;
