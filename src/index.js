import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppTitle from './components/AppTitle';

ReactDOM.render(
  <React.StrictMode>
    <AppTitle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
