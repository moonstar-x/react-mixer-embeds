import React, { Component } from 'react';
import { MixerChat, MixerPlayer } from 'react-mixer-embed';

class App extends Component {
  render() {
    return (
      <div>
        <MixerChat channel="SauceLegendary" />
        <MixerPlayer channel="SauceLegendary" video="cYihkEpL4kiNLbN4tQrvUQ" time="1h2m10s" allowFullscreen={false} />
      </div>
    );
  }
}

export default App;
