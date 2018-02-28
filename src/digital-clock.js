import React from "react";
import ReactDOM from "react-dom";

function tick() {
    const element = (
        <div>
            <h1>The time now is</h1>
            <h2>{new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById("container"));
}

handler = setInterval(tick, 1000);

function Welcome(props) {
    return (
        <div>
            <h1>Hello, {props.name}</h1> <div id="container" />
            <button className="toggle" onClick={()=>clearInterval(handler)}> hi</button>
        </div>
    );
}

const element3 = <Welcome name="Sara" />;
ReactDOM.render(element3, document.getElementById("root"));
