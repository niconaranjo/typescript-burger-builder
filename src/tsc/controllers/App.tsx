import React, { Component } from 'react';

import Layout from '../hoc/Layout/Layout';

import BurgerBuilder from './BurgerBuilder/Burger-builder-controller';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
