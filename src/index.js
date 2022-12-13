import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import kasa from './assets/database/kasa.json';

function DisplayJson() {
  console.log(kasa)
  return (
    <div>
      {kasa.forEach((product) => (
        < span key={product.id}>{product.title}</span>
      ))
      }</div >
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <DisplayJson />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
