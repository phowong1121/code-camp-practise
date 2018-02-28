import React from "react";
import ReactDOM from "react-dom";

class SayHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello!",
      count: 0
    };
  }
  // WARNING: this syntax is experimental!
  // Using an arrow here binds the method:
  handleClick = () => {
    this.state.count++;
    alert(this.state.message + " I was called " + this.state.count + " times~");
  };

  render() {
    return <button onClick={this.handleClick}>Say hello</button>;
  }
}

ReactDOM.render(<SayHello />, document.getElementById("root"));
