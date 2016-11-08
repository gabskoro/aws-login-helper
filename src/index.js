import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';

window.debugging = {
  chrome,
  store
}

ReactDOM.render(
  <App storeLoader={store.load()} />,
  document.getElementById('root')
);
