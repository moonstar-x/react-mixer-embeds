import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getChatEmbedURL } from '../utils';
import { CHAT_DEFAULT_WIDTH, CHAT_DEFAULT_HEIGHT } from '../constants';

class MixerChat extends Component {
  componentDidMount() {
    this._validateProps();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this._validateProps();
  }

  _validateProps() {
    if (!this.props.channel) {
      throw new Error('A channel prop must be supplied to MixerChat!');
    }
  }

  render() {
    const { channel, composer, id, height, width, ...props } = this.props;

    return (
      <iframe
        title={`Mixer Chat - ${id}`}
        id={id}
        src={getChatEmbedURL(channel, composer)}
        height={height}
        width={width}
        {...props}
      />
    );
  }
}

MixerChat.propTypes = {
  channel: PropTypes.string.isRequired,
  composer: PropTypes.bool,
  id: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MixerChat.defaultProps = {
  composer: true,
  id: 'mixer-chat-embed',
  height: CHAT_DEFAULT_HEIGHT,
  width: CHAT_DEFAULT_WIDTH
};

export default MixerChat;
