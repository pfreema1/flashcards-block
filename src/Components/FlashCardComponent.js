import React from 'react';

const FlashCardComponent = ({
  front,
  backText,
  backImage,
  handleClick,
  isFlipped,
  hasScrollBar,
  backEl
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
          ) : hasScrollBar ? (
            <div className="flashcard__fadeout-wrapper">
              <div className="flashcard__fadeout" />
              <div ref={backEl} className="flashcard__back-text">
                {backText}
              </div>
            </div>
          ) : (
            <div ref={backEl} className="flashcard__back-text">
              {backText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlashCardComponent;
