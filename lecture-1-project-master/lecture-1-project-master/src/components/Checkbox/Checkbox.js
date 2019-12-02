import React from 'react';
import './Checkbox.css';

const CN = 'default-checkbox';

const Checkbox = (props) => {
  const { onChange, isChecked, label = 'checkbox' } = props;

  console.log('Checkbox render');
  return (
    <div className={CN}>
      <input type="checkbox" onChange={onChange} checked={isChecked}/>
      <div className={`${CN}-label`}>{label}</div>
    </div>
  );
};

export default Checkbox;