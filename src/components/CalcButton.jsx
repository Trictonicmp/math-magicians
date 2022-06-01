import React from 'react';
import PropTypes from 'prop-types';

const CalcButton = (props) => {
  const { value, clickFn, buttonType } = props;
  return (
    <span
      aria-hidden
      className={`calc-button ${buttonType}`}
      onClick={() => { clickFn(value); }}
    >
      {value}
    </span>
  );
};

CalcButton.propTypes = {
  value: PropTypes.string,
  buttonType: PropTypes.string,
  clickFn: PropTypes.func.isRequired,
};

CalcButton.defaultProps = {
  value: '',
  buttonType: '',
};

export default CalcButton;
