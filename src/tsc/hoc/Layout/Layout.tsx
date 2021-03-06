import React, { Component } from 'react';

import Aux from '../Aux/aux';

import Toolbar from '../../componentes/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../componentes/Navigation/SideDrawer/SideDrawer';

interface LayoutProps {
  children: React.ReactElement;
}

interface LayoutState {
  showSideDrawer: boolean;
}

class Layout extends Component {
  state: LayoutState = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState: LayoutState) => ({
      showSideDrawer: !prevState.showSideDrawer,
    }));
  };

  render() {
    return (
      <Aux>
        <Toolbar showMenu={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className="content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
