import React, { Component } from 'react';
import { people } from '../../constants/people';

import { Header  } from '../Header/Header';

import './App.css';

function renderPeopleList() {
  return people.map(person => {
    const { firstName, lastName, avatar, address = 'New York' } = person;

    return (
      <li className="list-item" key={`${firstName} ${lastName}`}>
        <div>{firstName}</div>
        <div>{lastName}</div>
        <img
          src={avatar}
          className="avatar"
          alt={`avatar for ${firstName} ${lastName}`}
        />
        <div>{address}</div>
      </li>
    );
  });
}

function renderBtn() {
  return (
    <div className="actions-block">
      <div className="btn-wrapper">
        <button type="button">Cancel</button>
      </div>
      <div className="btn-wrapper">
        <button type="button">Apply</button>
      </div>
    </div>
  );
}

/*
function App() {
  const greeting = 'Hello, world!';
  const greetingElement = (<div className="class-12">{greeting}</div>);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        {greetingElement}

        {renderMultipleElements()}
      </header>

      <ul className="list">{renderPeopleList()}</ul>

      {
        React.createElement('div', null, 'Hello guys!')
      }

      {renderBtn()}
    </div>
  );
}
*/

class AppTheReal extends Component {
  render() {
    const greeting = 'Hello, world!';
    const greetingElement = (<div className="class-12">{greeting}</div>);

    return (
      <div className="App">
        <Header
          className="App-header"
          showLogo={true}
        >
          <div>this is children of header</div>
        </Header>

        <div>
          <span>test</span>
        </div>

        <div className="divider"/>
        <ul className="list">{renderPeopleList()}</ul>

        {
          React.createElement('div', null, 'Hello guys!')
        }

        {renderBtn()}
      </div>
    );
  }
}

export default AppTheReal;
