import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';
import configureStore from './store/store';
import axios from 'axios';
import App from './App';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore({});
  const root = document.getElementById('root');
  window.axios = axios;
  ReactDOM.render(<Root store={store} />, root);
});
