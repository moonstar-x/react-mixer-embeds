import React, { Component } from 'react';
import { MixerChat } from 'react-mixer-embed';

class App extends Component {
  render() {
    return (
      <div>
        <MixerChat channel="travpiper" composer={false} />
      </div>
    );
  }
}

export default App;
