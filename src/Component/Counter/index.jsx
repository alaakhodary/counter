import React, { Component } from "react";
import "./style.css";

export default class Counter extends Component {
  state = {
    counter: 0,
  };
  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => {
      if (prevState.counter > 0) {
        return {
          counter: prevState.counter - 1,
        };
      }
    });
  };
  render() {
    return (
      <section className="section-1">
        <button onClick={this.increment} className="btn-2">
          +
        </button>
        <button onClick={this.decrement} className="btn-1">
          -
        </button>
        <span>{this.state.counter}</span>
      </section>
    );
  }
}
