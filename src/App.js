import React, { Component } from 'react';
import FlashCardBlockContainer from './Containers/FlashCardBlockContainer';
import './App.css';

const exampleData = {
  vocab: [
    {
      keyWord: 'foo',
      definition:
        'Rise allows customers to create responsive single page, vertically scrolling lessons which include a variety of modular elements called Blocks. These Blocks can be as simple as text and image layouts, videos, image galleries, to more complex components like interactive flash cards, tabbed modules and accordions.Rise allows customers to create responsive single page, vertically scrolling lessons which include a variety of modular elements called Blocks. These Blocks can be as simple as text and image layouts, videos, image galleries, to more complex components like interactive flash cards, tabbed modules and accordions.Rise allows customers to create responsive single page, vertically scrolling lessons which include a variety of modular elements called Blocks. These Blocks can be as simple as text and image layouts, videos, image galleries, to more complex components like interactive flash cards, tabbed modules and accordions.Rise allows customers to create responsive single page, vertically scrolling lessons which include a variety of modular elements called Blocks. These Blocks can be as simple as text and image layouts, videos, image galleries, to more complex components like interactive flash cards, tabbed modules and accordions.'
    }
    // {
    //   keyWord: 'bar',
    //   definition: 'place holder here'
    // },
    // {
    //   keyWord: 'baz',
    //   definition: 'place holder here'
    // }
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
