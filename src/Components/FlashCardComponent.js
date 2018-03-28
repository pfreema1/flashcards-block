import React from 'react';

const FlashCardComponent = ({
  front,
  backText,
  backImage,
  handleClick,
  isFlipped,
  hasScrollBar,
  backEl,
  handleScroll,
  isScrolledToBottom
}) => {
  return (
    <div onClick={handleClick} className="flashcard-wrapper">
      <div className={isFlipped ? 'flipper' : 'unflip'}>
        <div className="flashcard flashcard__front">{front}</div>
        <div className="flashcard flashcard__back">
          {backImage ? (
            <img
              className="flashcard__image"
              src={backImage}
              alt="cute kitty"
            />
          ) : hasScrollBar ? (
            <div className="flashcard__fadeout-wrapper">
              <div
                className={
                  'flashcard__fadeout ' +
                  (isScrolledToBottom ? 'flashcard--hide-fadeout' : '')
                }
              />
              <div
                onScroll={handleScroll}
                ref={backEl}
                className="flashcard__back--scroll"
              >
                {backText}
              </div>
            </div>
          ) : (
            <div ref={backEl} className="flashcard__back--no-scroll">
              {backText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlashCardComponent;
