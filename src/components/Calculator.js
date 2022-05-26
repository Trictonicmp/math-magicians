import React from 'react';
import CalcButton from './CalcButton';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidUpdate() {
    const { total, next } = this.state;
    if (total === null && next === null) {
      this.setState({ total: 0 });
    }
  }

  handleButtonClick = (buttonValue) => {
    const newState = calculate(this.state, buttonValue);
    this.setState(newState);
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calculator">
        <span className="input">
          { total }
          { operation }
          { next }
        </span>
        <div className="buttons-container">
          <CalcButton value="AC" clickFn={this.handleButtonClick} />
          <CalcButton value="+/-" clickFn={this.handleButtonClick} />
          <CalcButton value="%" clickFn={this.handleButtonClick} />
          <CalcButton value="÷" buttonType="action-btn" clickFn={this.handleButtonClick} />
          <CalcButton value="7" clickFn={this.handleButtonClick} />
          <CalcButton value="8" clickFn={this.handleButtonClick} />
          <CalcButton value="9" clickFn={this.handleButtonClick} />
          <CalcButton value="x" buttonType="action-btn" clickFn={this.handleButtonClick} />
          <CalcButton value="4" clickFn={this.handleButtonClick} />
          <CalcButton value="5" clickFn={this.handleButtonClick} />
          <CalcButton value="6" clickFn={this.handleButtonClick} />
          <CalcButton value="-" buttonType="action-btn" clickFn={this.handleButtonClick} />
          <CalcButton value="1" clickFn={this.handleButtonClick} />
          <CalcButton value="2" clickFn={this.handleButtonClick} />
          <CalcButton value="3" clickFn={this.handleButtonClick} />
          <CalcButton value="+" buttonType="action-btn" clickFn={this.handleButtonClick} />
          <CalcButton value="0" buttonType="double-btn" clickFn={this.handleButtonClick} />
          <CalcButton value="." clickFn={this.handleButtonClick} />
          <CalcButton value="=" buttonType="action-btn" clickFn={this.handleButtonClick} />
        </div>
      </div>
    );
  }
}
