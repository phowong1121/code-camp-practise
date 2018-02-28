import React from "react";
import ReactDOM from "react-dom";
foo(){
  const element = (
    <div>
      <h1>hello!</h1>
      <h2>It is {new Date().toLocaleTimeString('en-US')}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('container'));
}
const bar = ();
ReactDOM.render(bar, document.getElementById('root'));