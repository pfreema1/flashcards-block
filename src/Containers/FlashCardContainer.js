import React, { Component } from 'react';
import FlashCardComponent from '../Components/FlashCardComponent';
import './FlashCardContainer.css';

class FlashCardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false,
      hasScrollBar: false,
      isScrolledToBottom: false
    };
  }

  componentDidMount() {
    // if the content on the back of the card overflows, lets update
    // state so we can apply the text fadeout styling
    if (this.backEl) {
      const backElParentClientHeight = this.backEl.parentNode.clientHeight;
      const backElClientHeight = this.backEl.clientHeight;

      if (backElClientHeight > backElParentClientHeight) {
        this.setState({ hasScrollBar: true });
      }
    }
  }

  handleClick = () => {
    this.setState(prevState => {
      if (!prevState.isFlipped && this.backEl) {
        this.backEl.scrollTop = 0;
      }

      return { isFlipped: !prevState.isFlipped, isScrolledToBottom: false };
    });
  };

  handleKeyDown = e => {
    console.log(e.key);
    if (e.key === 'Enter' || e.key === ' ') {
      this.handleClick();
    }
  };

  handleScroll = () => {
    if (
      this.backEl.scrollTop + this.backEl.offsetHeight ===
      this.backEl.scrollHeight
    ) {
      this.setState({ isScrolledToBottom: true });
    } else if (this.state.isScrolledToBottom) {
      this.setState({ isScrolledToBottom: false });
    }
  };

  render() {
    const { front, backText, backImage, index } = this.props;
    const { isFlipped, hasScrollBar, isScrolledToBottom } = this.state;

    return (
      <FlashCardComponent
        handleClick={this.handleClick}
        front={front}
        backText={backText}
        isFlipped={isFlipped}
        backImage={backImage}
        hasScrollBar={hasScrollBar}
        backEl={el => (this.backEl = el)}
        handleScroll={this.handleScroll}
        isScrolledToBottom={isScrolledToBottom}
        index={index}
        handleKeyDown={this.handleKeyDown}
      />
    );
  }
}

export default FlashCardContainer;
