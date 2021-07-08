import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todo from './component/Todo';
import Interview from './Interview';

ReactDOM.render(
  <React.StrictMode>
    <Interview />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
