import React, {Component} from 'react';
import './LikedPetsList.scss';

const CN = 'liked-pets-list';
/*
export const LikedPetsList = (props) => {
  const { list } = props;
  return (
    <div className={CN}>
      {
        list.map(pet => {
          return (
            <img
              key={pet}
              src={pet}
              alt="pet"
            />
          )
        })
      }
    </div>
  );
};
*/

export class LikedPetsList extends Component {
  constructor(props) {
    super();

    this.state = {
      urlList: props.list || []
    };

  }

  componentDidUpdate() {
    console.log('LikedPetsList componentDidUpdate');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { list } = nextProps;
    const { urlList } = prevState;

    if (list.length !== urlList.length) {
      return {
        urlList: list
      }
    }
    console.log('LikedPetsList getDerivedStateFromProps');

    return null;
  }

  render() {
    console.log('LikedPetsList render');

    const { urlList } = this.state;

    console.log(this.props);

    return (
      <div className={CN}>
        <div className={`${CN}__label`}>text</div>
        {
          urlList.map(pet => {
            return (
              <img
                key={pet}
                src={pet}
                alt="pet"
              />
            )
          })
        }
      </div>
    );
  }
}
