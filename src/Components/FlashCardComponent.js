import React from 'react';

const FlashCardComponent = ({
  front,
  backText,
  backImage,
  handleClick,
  isFlipped
}) => {
  return (
    <div onClick={handleClick} className="flashcard-wrapper">
      <div className={isFlipped ? 'flipper' : 'unflip'}>
        <div className="flashcard flashcard--front">{front}</div>
        <div className="flashcard flashcard--back">
          {backImage ? (
            <img
              className="flashcard__image"
              src={backImage}
              alt="kitty picture"
            />
          ) : (
            <p>{backText}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlashCardComponent;
