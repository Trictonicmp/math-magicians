import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class CalcButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clickFn, value } = this.props;
    clickFn(value);
  }

  render() {
    const { value, buttonType } = this.props;
    const classNm = `calc-button ${buttonType}`;
    return (
      <span
        aria-hidden
        className={classNm}
        onClick={this.handleClick}
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
