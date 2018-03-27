import React, { Component } from 'react';
import './FlashCardBlockContainer.css';
import FlashCardContainer from './FlashCardContainer';

class FlashCardBlockContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vocabArr: props.data.vocab
    };
  }

  render() {
    const { vocabArr } = this.state;

    return (
      <div className="flashcard-block__wrapper">
        {vocabArr.map((vocabEl, index) => (
          <FlashCardContainer
            key={index}
            front={vocabEl.keyWord}
            back={vocabEl.definition}
          />
        ))}
      </div>
    );
  }
}

export default FlashCardBlockContainer;
