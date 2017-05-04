
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';

import App from './App';
import './index.css';

import rootReducer from './reducers/root';


const middleWare = applyMiddleware(createLogger());

const store = createStore(
  rootReducer,
  { counter: 100 },
  middleWare,
);

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
