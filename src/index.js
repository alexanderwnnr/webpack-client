import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

import './index.css'

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const render = Component => {
  root.render(
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

render(App);

