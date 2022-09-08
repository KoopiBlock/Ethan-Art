import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {getData} from './Server';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

async function getDataFromServer(){
  const res = await getData();
  return res;
}

getDataFromServer().then(function(result) {
  console.log(result) // "Some User token"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
