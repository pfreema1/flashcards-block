import React, { Component } from 'react';
import FlashCardComponent from '../Components/FlashCardComponent';
import './FlashCardContainer.css';

class FlashCardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  };

  render() {
    const { front, backText, backImage } = this.props;
    const { isFlipped } = this.state;

    return (
      <FlashCardComponent
        handleClick={this.handleClick}
        front={front}
        backText={backText}
        isFlipped={isFlipped}
        backImage={backImage}
      />
    );
  }
}

export default FlashCardContainer;
