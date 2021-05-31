import React, { Component } from "react";
import Counter from "../../../commonComponents/Counter";

class CounterPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
    };

    console.log("CONSTRUCTOR");
  }

  componentDidMount() {
    console.log("DID MOUNT");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.countValue !== this.state.countValue) {
      this.setState((state) => {
        const value = this.state.countValue % 2 === 0;
        return {
          value,
        };
      });
    }
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
      return {
        ...state,
        countValue: incrementedValue,
      };
    });
  };

  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState((state) => {
        const incrementedValue = state.countValue - 1;

        return {
          ...state,
          countValue: incrementedValue,
        };
      });
    }
  };

  handleReset = () => {
    this.setState((state) => {
      return {
        ...state,
        countValue: 0,
      };
    });
  };
  render() {
    return (
      <Counter
        countValue={this.state.countValue}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        handleReset={this.handleReset}
      />
    );
  }
}

export default CounterPageContainer;
