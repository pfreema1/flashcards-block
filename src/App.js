import React, { Component } from 'react';
import FlashCardBlockContainer from './Containers/FlashCardBlockContainer';
import exampleData from './Data';

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
