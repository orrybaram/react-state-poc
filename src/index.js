import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import { tableStore } from './mobx/store';

ReactDOM.render((
    <Provider tableStore={tableStore}>
      <App />
    </Provider>
), document.getElementById('root'));
