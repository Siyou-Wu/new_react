import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyNote from './MyNote';
import MyJsonViewer from './MyJsonViewer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <MyJsonViewer json={{
      tier1_1: {
        tier1_1_1: {
          tier1_1_1_1: "33",
          tier1_1_1_2: "44"
        },
        tier1_1_2: {
          tier1_1_2_1: "55"
        }
      }
    }} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
