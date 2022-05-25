import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class CalcButton extends React.Component {
  render() {
    const { value, clickFn, buttonType } = this.props;
    const classNm = `calc-button ${buttonType}`;
    return (
      <span
        aria-hidden
        className={classNm}
        onClick={() => clickFn(value)}
      >
        {value}
      </span>
    );
  }
}

CalcButton.propTypes = {
  value: PropTypes.string,
  buttonType: PropTypes.string,
  clickFn: PropTypes.func.isRequired,
};

CalcButton.defaultProps = {
  value: '',
  buttonType: '',
};
