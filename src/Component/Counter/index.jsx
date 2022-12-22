import React, { Component } from "react";
import "./style.css";

export default class Counter extends Component {
  state = {
    counter: this.props.initial || 0,
  };

  increment = () => {
    this.setState((prevState) => ({
      counter: this.props.initial
        ? prevState.counter + this.props.initial
        : prevState.counter + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => {
      if (prevState.counter > 0) {
        return {
          counter: this.props.initial
            ? prevState.counter - this.props.initial
            : prevState.counter - 1,
        };
      }
    });
  };

  /* array = ["ahmed", "mohammed", "mahmoud", "may", "hiba", "saleh", "reema"]; */

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

        {/*  <div>
          <ul>
            {this.array.map((todo, index) => {
              return <li key={index}>{todo}</li>;
            })}
          </ul>
        </div> */}
      </section>
    );
  }
}
