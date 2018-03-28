import React, { Component } from 'react';
import FlashCardBlockContainer from './Containers/FlashCardBlockContainer';
import './App.css';
import kitty from './images/kitty.png';

const exampleData = {
  vocab: [
    {
      keyWord: 'Front of card 1',
      definition: 'Back of card 1',
      image: null
    },
    {
      keyWord: 'Front of card 2',
      definition: null,
      image: kitty
    },
    {
      keyWord: 'Front of card 3',
      definition:
        'Café au lait crema so cup est single shot acerbic. Saucer as, black crema organic single origin mocha. Half and half as iced caffeine robusta wings instant. Caramelization brewed con panna, aftertaste, seasonal, froth and, a medium ristretto caramelization caffeine.  Mocha crema, lungo, bar, roast in coffee that latte as grinder latte. Cortado, acerbic, grounds coffee doppio brewed sweet. Id, plunger pot single shot, filter, galão spoon blue mountain aged beans. As whipped et chicory aftertaste java robusta est half and half.',
      image: null
    }
  ]
};

class App extends Component {
  render() {
    return (
      <div>
        <FlashCardBlockContainer data={exampleData} />
      </div>
    );
  }
}

export default App;
