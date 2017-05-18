
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import thunk from 'redux-thunk';

import { getProducts } from './actions/products';

import App from './App';
import './index.css';

import rootReducer from './reducers/root';


const middleWare = applyMiddleware(thunk, createLogger());

const store = createStore(
  rootReducer,
  { counter: 100 },
  middleWare,
);

const action = getProducts();
store.dispatch(action);

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
