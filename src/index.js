
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';

import App from './App';
import './index.css';


function counterReducer(state = 10, action) {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  if (action.type === 'DECREMENT') {
    return state - 1;
  }
  return state;
}

const rootReducer = combineReducers({
  counter: counterReducer,
});

const middleWare = applyMiddleware(createLogger());

const store = createStore(rootReducer, middleWare);

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root'),
);
