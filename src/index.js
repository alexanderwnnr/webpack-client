import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store.js'
import { Provider } from 'react-redux'
import './index.css'

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const render = Component => {
  root.render(
    <Provider store={store}>
      <PersistGate loading={<div>loading...</div>} persistor={persistor}>
      <Component />
    </PersistGate>
    
    </Provider>
  );
};

render(App);

