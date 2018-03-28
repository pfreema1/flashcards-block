import React, { Component } from 'react';
import FlashCardComponent from '../Components/FlashCardComponent';
import './FlashCardContainer.css';

class FlashCardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false,
      hasScrollBar: false
    };
  }

  componentDidMount() {
    // if the element is overflowing (has a scrollbar),
    // lets setState to conditionally apply styling
    // if (this.backEl) {
    //   console.log('this.backEl:  ', this.backEl);
    //   console.log('scrollHeight:  ', this.backEl.scrollHeight);
    //   console.log('clientHeight:  ', this.backEl.clientHeight);
    //   console.log('offsetHeight:  ', this.backEl.offsetHeight);
    //   console.log('scrollTop:  ', this.backEl.scrollTop);
    //   console.log(
    //     'parent clientHeight:  ',
    //     this.backEl.parentNode.clientHeight
    //   );
    // }

    if (this.backEl) {
      const backElParentClientHeight = this.backEl.parentNode.clientHeight;
      const backElClientHeight = this.backEl.clientHeight;

      if (backElClientHeight > backElParentClientHeight) {
        this.setState({ hasScrollBar: true });
      }
    }

    // if (this.backEl && this.backEl.scrollHeight > this.backEl.clientHeight) {
    //   this.setState({ hasScrollBar: true });
    // }
  }

  handleClick = () => {
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  };

  checkHeight = el => {
    // console.log('el:  ', el);
    // // if the element is overflowing (has a scrollbar),
    // // lets setState to conditionally apply styling
    // if (el && el.scrollHeight > el.clientHeight) {
    //   this.setState({ hasScrollBar: true });
    // }
  };

  render() {
    const { front, backText, backImage } = this.props;
    const { isFlipped, hasScrollBar } = this.state;

    return (
      <FlashCardComponent
        handleClick={this.handleClick}
        front={front}
        backText={backText}
        isFlipped={isFlipped}
        backImage={backImage}
        hasScrollBar={hasScrollBar}
        backEl={el => (this.backEl = el)}
      />
    );
  }
}

export default FlashCardContainer;
