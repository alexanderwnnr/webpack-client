import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const render = Component => {
  root.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  );
};

render(App);

