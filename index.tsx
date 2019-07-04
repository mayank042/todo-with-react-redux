import React from 'react';
import { render } from 'react-dom';
import './style.css';
import App from './components/app';
import { createStore } from 'redux';
import todoApp from './reducers';
import { Provider } from 'react-redux';

const store = createStore(todoApp);

console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
