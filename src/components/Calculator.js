import React from 'react';
import CalcButton from './CalcButton';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '0',
    };
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div className="calculator">
        <input type="text" value={inputValue} />
        <div className="buttons-container">
          <CalcButton value="AC" />
          <CalcButton value="+/-" />
          <CalcButton value="%" />
          <CalcButton value="÷" buttonType="action-btn" />
          <CalcButton value="7" />
          <CalcButton value="8" />
          <CalcButton value="9" />
          <CalcButton value="x" buttonType="action-btn" />
          <CalcButton value="4" />
          <CalcButton value="5" />
          <CalcButton value="6" />
          <CalcButton value="-" buttonType="action-btn" />
          <CalcButton value="1" />
          <CalcButton value="2" />
          <CalcButton value="3" />
          <CalcButton value="+" buttonType="action-btn" />
          <CalcButton value="0" buttonType="double-btn" />
          <CalcButton value="." />
          <CalcButton value="=" buttonType="action-btn" />
        </div>
      </div>
    );
  }
}
