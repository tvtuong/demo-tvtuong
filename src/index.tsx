import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import 'bootstrap/dist/js/bootstrap.js';
import './App.scss';
import { store } from './todo-redux/redux/store';
import { Provider } from 'react-redux';

const theme = extendTheme({
  // Set background to blackish color.
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'rgb(26,32,44)',
      },
    },
  },
});
const el = document.getElementById('app')!;
const root = createRoot(el);
root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>
);
