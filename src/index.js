import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Counter from './components/Counter';
import reportWebVitals from './reportWebVitals';
import Newcounter from './components/Newcounter';
import Writer from './components/LiveWrite';
import FCounter from './components/functionalCounter';
import Shop from './components/shop';

ReactDOM.render(
  //  <React.StrictMode>
    <Shop/>,
  // </React.StrictMode>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
