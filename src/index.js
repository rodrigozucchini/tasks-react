import React from 'react';
import ReactDOM from 'react-dom';
//Los estilos propios deben ir debajo de bootstrap para que no se pisen
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingFinal from './AppRoutingFinal';


ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    <AppRoutingFinal></AppRoutingFinal>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
