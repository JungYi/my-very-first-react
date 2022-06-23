import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

/** Hoonie의 친절한 코딩 교실 */
/* ************************************************** 
As-is : <React.StrictMode>
          <App />
        </React.StrictMode>
StrictMode 사용시에는 개발 도중 발생하는 문제를 감지하기 위해서 렌더링이 2번됨 
************************************************** */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();