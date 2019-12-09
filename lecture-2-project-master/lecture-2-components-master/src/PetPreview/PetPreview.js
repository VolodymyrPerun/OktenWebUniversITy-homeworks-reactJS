import React, { Component } from 'react';
import './PetPreview.scss';

const CN = 'pet-preview';

class PetPreview extends Component {
  constructor() {
    super();

    console.log('PetPreview constructor');
  }

  componentDidMount() {
    console.log('PetPreview componentDidMount');
  }

  componentDidUpdate() {
    console.log('PetPreview componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('PetPreview componentWillUnmount');
  }

  render() {
    const { imageUrl } = this.props;

    console.log('PetPreview render');

    return (
      <div className={CN}>
        {imageUrl && <img className={`${CN}__image`} src={imageUrl} alt=""/>}
      </div>
    );
  }
}

PetPreview.propTypes = {};

export default PetPreview;
