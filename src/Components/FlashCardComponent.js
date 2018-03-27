import React from 'react';

const FlashCardComponent = ({ front, back, handleClick, isFlipped }) => {
  return (
    <div onClick={handleClick} className="flashcard-wrapper">
      <div className={isFlipped ? 'flipper' : 'unflip'}>
        <div className="flashcard flashcard--front">{front}</div>
        <div className="flashcard flashcard--back">{back}</div>
      </div>
    </div>
  );
};

export default FlashCardComponent;
