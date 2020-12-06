import React from 'react';

import Aux from '../../hoc/aux';

interface LayoutProps {
  children: React.ReactElement;
}

const layout = (props: LayoutProps) => (
  <Aux>
    <div> Toolbar, SideDrawer, Backdrop</div>
    <main className="content">{props.children}</main>
  </Aux>
);

export default layout;
