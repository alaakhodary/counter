import React, { Component } from "react";

export default class Counterss extends Component {
  render() {
    return (
      <div style={{ padding: 20 }}>
        <button
          onClick={() => this.props.increment(this.props.id, this.props.steps)}
          style={{ padding: 10 }}
        >
          +
        </button>
        <p style={{ padding: 10 }}>{this.props.count}</p>
        <button
          onClick={() => this.props.decrement(this.props.id, this.props.steps)}
          style={{ padding: 12 }}
        >
          -
        </button>
      </div>
    );
  }
}
