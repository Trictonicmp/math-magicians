import operate from './logic/operate';
import calculate from './logic/calculate';

describe('operate() tests', () => {
  const numberOne = '3';
  const numberTwo = '4';
  const sum = '+';

  test('test: 3 + 4 to equal 7', () => {
    expect(operate(numberOne, numberTwo, sum)).toEqual('7');
  });

  const minus = '-';
  test('test: 3 - 4 to equal -1', () => {
    expect(operate(numberOne, numberTwo, minus)).toEqual('-1');
  });

  const multiply = 'x';
  test('test: 3 x 4 to equal 12', () => {
    expect(operate(numberOne, numberTwo, multiply)).toEqual('12');
  });

  const divide = '÷';
  test('test: 3 / 4 to equal 0.75', () => {
    expect(operate(numberOne, numberTwo, divide)).toEqual('0.75');
  });
});

describe('calculate() tests', () => {
  let calculator = { total: 0, next: null, operation: null };
  calculator = calculate(calculator, '7');

  test('expect calcualtor to match object { total: null, next: "7" }', () => {
    expect(calculator).toMatchObject({ total: null, next: '7' });
  });

  let calculatorOp = { total: null, next: '7' };
  calculatorOp = calculate(calculatorOp, '+');

  test('expect calculatorOp to match object { total: "7", next: null, operation: "+" }', () => {
    expect(calculatorOp).toMatchObject({ total: '7', next: null, operation: '+' });
  });

  let calculatorN2 = { total: '7', next: null, operation: '+' };
  calculatorN2 = calculate(calculatorN2, '5');

  test('expect calculatorN2 to match object { total: "7", next: "5", operation: "+" }', () => {
    expect(calculatorN2).toMatchObject({ total: '7', next: '5', operation: '+' });
  });

  let calculatorResult = { total: '7', next: '5', operation: '+' };
  calculatorResult = calculate(calculatorResult, '=');
  test('expect calculatorResult to match object { total: "12", next: null, operation: null }', () => {
    expect(calculatorResult).toMatchObject({ total: '12', next: null, operation: null });
  });
});
