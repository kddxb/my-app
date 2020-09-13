import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//<h1>{Math.round(Math.sin(Math.PI / 6.0) * 10) / 10}</h1>

let h1 = <h1>标题1</h1>;
let h2 = <h2 className='test'>标题2</h2>;
let i = 0;
let element = (
  <div>
    {(++i % 2 === 0) ? h1 : h2}
  </div>
);

setInterval(() => {
  ReactDOM.render(element, document.getElementById('root'));
}, 1000);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
