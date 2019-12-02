import React, { Component } from 'react';
import './Button.css';
// const Button = (props) => {
//
//
// };
const CN = 'default-btn';

export class ButtonAsClass extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { onClick } = this.props;
console.log('I\' here');
    onClick && onClick();
  }

  render() {
    const { className = '', type = 'button', disabled = false, label = '' } = this.props;

    return (
      <button
        className={`${CN} ${className}`}
        onClick={this.onClick}
        disabled={disabled}
        type={type}
      >
        {label}
      </button>
    );
  }
}

