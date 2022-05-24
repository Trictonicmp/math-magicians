import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class CalcButton extends React.Component {
  render() {
    const { value, clickFn } = this.props;
    return (
      <span
        aria-hidden
        className="calc-button"
        onClick={() => clickFn(value)}
      >
        {value}
      </span>
    );
  }
}

CalcButton.propTypes = {
  value: PropTypes.string,
  clickFn: PropTypes.func.isRequired,
};

CalcButton.defaultProps = {
  value: '',
};