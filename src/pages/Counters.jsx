import React, { Component } from "react";
import Counterss from "../Component/Counterss";

const counters = [
  { id: 1, count: 0 },
  { id: 2, count: 0 },
  { id: 3, count: 0 },
];
export default class Counters extends Component {
  state = {
    counters,
    total: 0,
  };

  increment = (id, steps = 1) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + steps };
          }
          return item;
        }),
      };
    });
  };

  decrement = (id, steps = 1) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === id && item.count > 0) {
            return { ...item, count: item.count - steps };
          }
          return item;
        }),
      };
    });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((item) => (
          <Counterss
            key={item.id}
            {...item}
            increment={this.increment}
            decrement={this.decrement}
          />
        ))}
        <h1>
          Total amount:
          {this.state.counters.reduce((acc, curr) => acc + curr.count, 0)}
        </h1>
      </div>
    );
  }
}
