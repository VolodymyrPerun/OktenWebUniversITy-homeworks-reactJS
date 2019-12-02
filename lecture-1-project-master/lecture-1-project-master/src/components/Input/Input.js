import React, { Component } from 'react';
import './Input.css';

export class Input extends Component {
  constructor(props) {
    super(props);

  }

  onChange = (e = {}) => {
    const {onChange} = this.props;
    const {value = ''} = e.target;

    onChange && onChange(value);
  };

  render() {
    const {className, value} = this.props;

    return (
      <input type="text" className={className} onChange={this.onChange} value={value}/>
    );
  }
}
