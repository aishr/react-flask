import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/style';

// render the main component
ReactDOM.render(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
  document.getElementById('app')
);
