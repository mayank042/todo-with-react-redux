import React from 'react';
import { render } from 'react-dom';
import './style.css';
import TodoApp from './components/app';
import { createStore } from 'redux';
import todoApp from './reducers';
import { Provider } from 'react-redux';
var store = createStore(todoApp);
console.log(store.getState());
render(<Provider store={store}>
    <TodoApp />
  </Provider>, document.getElementById('root'));
//# sourceMappingURL=index.js.map