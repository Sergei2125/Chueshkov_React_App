import React, { Component } from "react";
import Counter from "../components/Counter";

class CounterPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      parityType: "even",
    };

    console.log("CONSTRUCTOR");
  }

  componentDidMount() {
    console.log("DID MOUNT");
  }

  componentDidUpdate() {
    console.log(this.state.parityType);
  }
  shouldComponentUpdate() {
    console.log("SHOULD COMPONENT UPDATE");
    return true;
  }

  componentWillUnmount() {
    console.log("DESTROYED");
  }

  handleIncrement = () => {
    this.setState((state) => {
      const incrementedValue = state.countValue + 1;
      const isEven = incrementedValue % 2 === 0 ? "even" : "odd";
      return {
        countValue: incrementedValue,
        parityType: isEven,
      };
    });
  };

  handleDecrement = () => {
    this.setState((state) => {
      const incrementedValue = state.countValue - 1;
      const isEven = incrementedValue % 2 === 0 ? "even" : "odd";
      return {
        countValue: incrementedValue,
        parityType: isEven,
      };
    });
  };

  handleReset = () => {
    this.setState((state) => {
      return {
        countValue: 0,
        parityType: "null",
      };
    });
  };
  render() {
    return (
      <Counter
        countValue={this.state.countValue}
        parityType={this.state.parityType}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        handleReset={this.handleReset}
      />
    );
  }
}

export default CounterPageContainer;
