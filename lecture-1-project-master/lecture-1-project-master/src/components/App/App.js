import React, { Component } from 'react';
import { people } from '../../constants/people';
import { ButtonAsClass as Button } from '../Button/Button';
import { Header } from '../Header/Header';
import Checkbox from '../Checkbox/Checkbox';
import { Input } from '../Input/Input';

import './App.css';

const CN = 'App';

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

class AppTheReal extends Component {
  constructor() {
    super();

    this.greeting = 'Hello, world!';

    this.state = {
      isChecked: false,
      inputValue: '',
      isDarkTheme: true
    };

    this.onApplyBtnClick = this.onApplyBtnClick.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  renderActionsBlock() {
    return (
      <div className="actions-block">
        <Button
          label="Cancel"
          className={`${CN}__btn ${CN}__btn--error`}
          onClick={this.onApplyBtnClick}
        />

        <Button
          label="Apply"
          className={`${CN}__btn`}
          onClick={this.onApplyBtnClick}
        />
      </div>
    );
  }

  onApplyBtnClick() {
    const {isDarkTheme} = this.state;

    this.setState({
      isDarkTheme: !isDarkTheme
    });
  }

  onCheck(e) {
    const { isChecked } = this.state;

    this.setState({
      isChecked: !isChecked
    }, () => {
      console.log('state changed');
    });
  }

  onInputChange = (inputValue) => {
    this.setState({
      inputValue
    });
  };

  render() {
    const { isChecked, inputValue, isDarkTheme } = this.state;
    const greetingElement = (<div className="class-12">{this.greeting}</div>);

    console.log('App render');

    const darkThemeClass = isDarkTheme ? `${CN}__dark` : '';

    return (
      <div className={`${CN} ${darkThemeClass}`}>
        <Header
          className="App-header"
          showLogo={true}
        >
          <div>this is children of header</div>
        </Header>

        <div>
          {greetingElement}
        </div>

        <Checkbox label="Click me" isChecked={isChecked} onChange={this.onCheck}/>

        <Input value={inputValue} onChange={this.onInputChange}/>
        <div className="divider"/>
        <ul className="list">{renderPeopleList()}</ul>
        {this.renderActionsBlock()}
      </div>
    );
  }
}

export default AppTheReal;
