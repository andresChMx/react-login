import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAhLMbbtHpXxw-n0U0r-8PRBOOIhyVdCDE",
  authDomain: "login-consigueventas.firebaseapp.com",
  projectId: "login-consigueventas",
  storageBucket: "login-consigueventas.appspot.com",
  messagingSenderId: "329562187101",
  appId: "1:329562187101:web:cdbdbe55d85f36227c34b4",
  measurementId: "G-BN90D19M80"
};
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
