import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PLAYER_DEFAULT_HEIGHT, PLAYER_DEFAULT_WIDTH } from '../constants';
import { getPlayerEmbedURL } from '../utils';

class MixerPlayer extends Component {
  render() {
    const {
      channel,
      id,
      width,
      height,
      disableCostream,
      disableLowLatency,
      muted,
      disableLinks,
      hideChannel,
      video,
      time,
      allowFullscreen,
      ...props
    } = this.props;

    const options = {
      disableCostream,
      disableLowLatency,
      muted,
      disableLinks,
      hideChannel,
      vod: video,
      t: time
    };

    return (
      <iframe
        title={`Mixer Player - ${id}`}
        id={id}
        allowFullScreen={allowFullscreen}
        src={getPlayerEmbedURL(channel, options)}
        width={width}
        height={height}
        {...props}
      />
    );
  }
}

MixerPlayer.propTypes = {
  channel: PropTypes.string.isRequired,
  id: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disableCostream: PropTypes.bool,
  disableLowLatency: PropTypes.bool,
  muted: PropTypes.bool,
  disableLinks: PropTypes.bool,
  hideChannel: PropTypes.bool,
  video: PropTypes.string,
  time: PropTypes.string,
  allowFullscreen: PropTypes.bool
};

MixerPlayer.defaultProps = {
  id: 'mixer-player-embed',
  width: PLAYER_DEFAULT_WIDTH,
  height: PLAYER_DEFAULT_HEIGHT,
  disableCostream: false,
  disableLowLatency: false,
  muted: false,
  disableLinks: false,
  hideChannel: false,
  video: null,
  time: null,
  allowFullscreen: true
};

export default MixerPlayer;
