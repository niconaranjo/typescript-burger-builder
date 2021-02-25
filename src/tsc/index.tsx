import ReactDOM from 'react-dom';
import React from 'react';
import '../scss/index.scss';

import App from './controllers/App';

require('dotenv').config();

ReactDOM.render(<App />, document.getElementById('root'));
