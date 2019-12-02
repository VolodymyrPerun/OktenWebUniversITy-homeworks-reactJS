import React from 'react';
import logo from '../../logo.svg';
import { ButtonAsClass as Button } from '../Button/Button';
import './Header.css';

const CN = 'default-header';

export const Header = ({ className, greeting = "test", showLogo,children }) => {

  const renderMultipleElements = () => {
    return ([
      <div key="btn-element-1" className="btn-element">Btn 1</div>,
      <span key="btn-element-2" className="btn-element">Btn 2</span>,
      <a key="btn-element-3" className="btn-element" href="/#">Btn 3</a>
    ]);
  };

  return (
    <header className={`${CN} ${className}`}>
      { showLogo && (
        <img src={logo} className={`${CN}-logo`} alt="logo"/>
      )
      }

      {greeting}

      {renderMultipleElements()}
      {children}
      <Button label="Login" className={`${CN}-btn`}/>
    </header>
  );
};