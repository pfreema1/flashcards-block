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
    console.log('CLICKED!');

    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  };

  render() {
    const { front, back } = this.props;
    const { isFlipped } = this.state;

    return (
      <FlashCardComponent
        handleClick={this.handleClick}
        front={front}
        back={back}
        isFlipped={isFlipped}
      />
    );
  }
}

export default FlashCardContainer;
