import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.scss';
import { store } from './app/store';
import { Provider } from 'react-redux';
const el = document.getElementById('app')!;
const root = createRoot(el);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
