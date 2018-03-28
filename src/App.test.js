import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import exampleData from './Data';
import Adapter from 'enzyme-adapter-react-16';
import FlashCardBlockContainer from './Containers/FlashCardBlockContainer';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<FlashCardBlockContainer />', () => {
  const wrapper = mount(<FlashCardBlockContainer data={exampleData} />);

  it('renders correct amount of flash cards', () => {
    const numOfCardsInData = exampleData.vocab.length;
    expect(wrapper.find('.flashcard-wrapper').length).toBe(numOfCardsInData);
  });

  it('tabIndex is correct', () => {
    wrapper.find('.flashcard-wrapper').forEach((node, index) => {
      const expectedTabIndex = index + 1;
      expect(node.props().tabIndex).toBe(expectedTabIndex);
    });
  });

  it('card starts with unflip class', () => {
    wrapper.find('.flashcard-wrapper').forEach(node => {
      expect(node.childAt(0).hasClass('unflip')).toBe(true);
    });
  });

  it('renders only one ui-instruction box', () => {
    expect(wrapper.find('.flashcard__ui-instruction').length).toBe(1);
  });

  it('renders correct amount of image cards', () => {
    const numOfImageCards = exampleData.vocab.reduce((prevVal, dataEl) => {
      if (dataEl.image) {
        return prevVal + 1;
      } else {
        return prevVal;
      }
    }, 0);

    expect(wrapper.find('.flashcard__image').length).toBe(numOfImageCards);
  });
});
