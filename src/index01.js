import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


function ClockElement(params) {
  return (
    <div>
      <h1>现在是北京时间：{params.date.toLocaleDateString()}</h1>
      <h2>{params.date.toLocaleTimeString()}</h2>
    </div>
  );
}

setInterval(() => {
  ReactDOM.render(<ClockElement date={new Date()} />, document.getElementById('root'));
}, 1000);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
