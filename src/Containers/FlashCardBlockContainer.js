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
      <div>
        <h1 className="flashcard-block__title">Flashcards Block</h1>
        <div className="flashcard-block__wrapper">
          {vocabArr.map((vocabEl, index) => (
            <FlashCardContainer
              key={index}
              frontContent={vocabEl.keyWord}
              backText={vocabEl.definition}
              backImage={vocabEl.image}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default FlashCardBlockContainer;
