/* eslint-disable react/no-deprecated */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

console.log(process.env.REACT_APP_GITHUB_TOKEN);
// We pass key github config values to the application here.
ReactDOM.render(
  <React.StrictMode>
    <div hidden id='gitenv' data-git-token={process.env.REACT_APP_GITHUB_TOKEN} data-git-domain={process.env.REACT_APP_GITHUB_DOMAIN}></div>

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
