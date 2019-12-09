import React, { Component } from 'react';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import { LikedPetsList } from '../LikedPetsList/LikedPetsList';

import './App.scss';
import PetPreview from '../PetPreview/PetPreview';

const CN = 'App';

class App extends Component {
  loadDoggo = async () => {
    const { url } = this.state;
    let response = await fetch(url);

    console.log('App load doggo');

    if (response.ok) {
      let { message = '' } = await response.json();
      this.setState({
        doggoUrl: message
      });
    } else {
      alert('Error HTTP: ' + response.status);
    }
  };

  onLikeDoggo = () => {
    const { doggoUrl, likedDoggos } = this.state;

    if (doggoUrl && !likedDoggos.includes(doggoUrl)) {
      const doggos = [...likedDoggos];

      doggos.push(doggoUrl);

      this.setState({
        likedDoggos: doggos
      });
    }
  };

  onLoadDoggoClick = () => {
    this.loadDoggo();
  };

  constructor() {
    super();

    this.state = {
      url: 'https://dog.ceo/api/breeds/image/random',
      doggoUrl: '',
      likedDoggos: []
    };

    console.log('App constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('App getDerivedStateFromProps');

    return null;
  }

  componentDidMount() {
    console.log('App componentDidMount');
    this.loadDoggo();
  }

  render() {
    const { doggoUrl, likedDoggos } = this.state;

    console.log('App render');
    return (
      <div className={`${CN}`}>
        <Header
          className="App-header"
          showLogo
          greeting="Doggo app"
        />

        <div className={`${CN}__container`}>
          <div className={`${CN}__left-side`}>
            <PetPreview imageUrl={doggoUrl}/>
            <div>
              <Button label="Load new doggo" onClick={this.onLoadDoggoClick}/>
              <Button label="Like doggo" onClick={this.onLikeDoggo}/>
            </div>
          </div>
          <LikedPetsList list={likedDoggos}/>
        </div>
      </div>
    );
  }
}

export default App;
