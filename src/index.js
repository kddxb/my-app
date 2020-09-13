import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//函数组件
function Clock1(props) {
  return (
    <div>
      <h1>当前时间：</h1>
      <h2>{props.date.toLocaleTimeString()}</h2>
    </div>
  );
}

//类组件
class Clock2 extends React.Component {
  constructor() {
    super();
  }

  state = {
    date: new Date()
  };

  render() {
    let element = (
      <div>
        <h1>当前时间：</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
    return element;
  }

  componentDidMount(){
    setInterval(() => {
    this.setState(
      {
        date: new Date()
      }
    );
    }, 1000);
  };
}

let element = (
  <div>
    <Clock1 date={new Date()} />
    <Clock2 />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
