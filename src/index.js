import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todo from './component/Todo';
import interview from './interview';

ReactDOM.render(
  <React.StrictMode>
    <interview />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
