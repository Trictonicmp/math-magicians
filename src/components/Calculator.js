import React from 'react';
import CalcButton from './CalcButton';
import operate from '../logic/operate';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton = (buttonValue) => {
    console.log(buttonValue);
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div className="calculator">
        <input
          type="text"
          value={inputValue}
        />
        <div className="buttons-container">
          <CalcButton value="AC" clickFn={this.handleButton} />
          <CalcButton value="+/-" clickFn={this.handleButton} />
          <CalcButton value="%" clickFn={this.handleButton} />
          <CalcButton value="÷" buttonType="action-btn" clickFn={this.handleButton} />
          <CalcButton value="7" clickFn={this.handleButton} />
          <CalcButton value="8" clickFn={this.handleButton} />
          <CalcButton value="9" clickFn={this.handleButton} />
          <CalcButton value="x" buttonType="action-btn" clickFn={this.handleButton} />
          <CalcButton value="4" clickFn={this.handleButton} />
          <CalcButton value="5" clickFn={this.handleButton} />
          <CalcButton value="6" clickFn={this.handleButton} />
          <CalcButton value="-" buttonType="action-btn" clickFn={this.handleButton} />
          <CalcButton value="1" clickFn={this.handleButton} />
          <CalcButton value="2" clickFn={this.handleButton} />
          <CalcButton value="3" clickFn={this.handleButton} />
          <CalcButton value="+" buttonType="action-btn" clickFn={this.handleButton} />
          <CalcButton value="0" buttonType="double-btn" clickFn={this.handleButton} />
          <CalcButton value="." clickFn={this.handleButton} />
          <CalcButton value="=" buttonType="action-btn" clickFn={this.handleButton} />
        </div>
      </div>
    );
  }
}
