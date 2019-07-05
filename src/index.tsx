import React from 'react';
import { render } from 'react-dom';
import './style.css';
import TodoApp from './components/app';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(todoApp, composeWithDevTools(applyMiddleware()));

console.log(store.getState());

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
