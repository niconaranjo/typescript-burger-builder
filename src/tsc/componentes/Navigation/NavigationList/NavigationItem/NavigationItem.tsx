import React from 'react';

interface NavigationItemInterface {
  children: React.ReactElement | string;
  link: string;
}

const NavigationItem = (props: NavigationItemInterface) => (
  <li className="NavigationItem">
    <a href={props.link}>{props.children}</a>
  </li>
);

export default NavigationItem;
