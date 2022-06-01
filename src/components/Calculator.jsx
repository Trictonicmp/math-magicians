import React, { useState } from 'react';
import CalcButton from './CalcButton';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculator, setCalculator] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonValue) => {
    setCalculator(calculate(calculator, buttonValue));
  };

  return (
    <div className="calculator">
      <span className="input">
        { calculator.total }
        { calculator.operation }
        { calculator.next }
      </span>
      <div className="buttons-container">
        <CalcButton value="AC" clickFn={handleButtonClick} />
        <CalcButton value="+/-" clickFn={handleButtonClick} />
        <CalcButton value="%" clickFn={handleButtonClick} />
        <CalcButton value="÷" buttonType="action-btn" clickFn={handleButtonClick} />
        <CalcButton value="7" clickFn={handleButtonClick} />
        <CalcButton value="8" clickFn={handleButtonClick} />
        <CalcButton value="9" clickFn={handleButtonClick} />
        <CalcButton value="x" buttonType="action-btn" clickFn={handleButtonClick} />
        <CalcButton value="4" clickFn={handleButtonClick} />
        <CalcButton value="5" clickFn={handleButtonClick} />
        <CalcButton value="6" clickFn={handleButtonClick} />
        <CalcButton value="-" buttonType="action-btn" clickFn={handleButtonClick} />
        <CalcButton value="1" clickFn={handleButtonClick} />
        <CalcButton value="2" clickFn={handleButtonClick} />
        <CalcButton value="3" clickFn={handleButtonClick} />
        <CalcButton value="+" buttonType="action-btn" clickFn={handleButtonClick} />
        <CalcButton value="0" buttonType="double-btn" clickFn={handleButtonClick} />
        <CalcButton value="." clickFn={handleButtonClick} />
        <CalcButton value="=" buttonType="action-btn" clickFn={handleButtonClick} />
      </div>
    </div>
  );
};

export default Calculator;
