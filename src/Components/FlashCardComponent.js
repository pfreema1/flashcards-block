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
  isScrolledToBottom,
  index,
  handleKeyDown
}) => {
  return (
    <div
      onClick={handleClick}
      className="flashcard-wrapper"
      tabIndex={index + 1}
      onKeyDown={handleKeyDown}
    >
      <div className={isFlipped ? 'flipper' : 'unflip'}>
        <div className="flashcard flashcard__front">
          {front}
          {index === 0 && (
            <div className="flashcard__ui-instruction">Click to flip</div>
          )}
        </div>
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
                tabIndex="-1"
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
