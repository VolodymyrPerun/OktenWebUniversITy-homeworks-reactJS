import React from 'react';
import logo from '../logo.svg';
import './Header.scss';

const CN = 'default-header';

export const Header = ({ className, greeting = "test", showLogo, children } ) => {
  return (
    <header className={`${CN} ${className}`}>
      { showLogo && (
        <img src={logo} className={`${CN}-logo`} alt="logo"/>
      )
      }

      {greeting}
      {children}
    </header>
  );
};