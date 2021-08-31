import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.scss'
import { reducer } from './reducer/reducer';
import App from './App/App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
