import { MIXER_CHAT_URL, MIXER_PLAYER_URL } from './constants';

const getChatEmbedURL = (channel, composer) => {
  return `${MIXER_CHAT_URL}/${channel}?composer=${composer}`;
};

const getPlayerEmbedURL = (channel, { disableCostream, disableLowLatency, muted, disableLinks, hideChannel, vod, t }) => {
  const vodQuery = vod ? `&vod=${vod}` : '';
  const tQuery = t ? `&t=${t}` : '';
  const mutedQuery = muted ? `&muted=${muted}` : '';
  return `${MIXER_PLAYER_URL}/${channel}?disableCostream=${disableCostream}&disableLowLatency=${disableLowLatency}&disableLinks=${disableLinks}&hideChannel=${hideChannel}${mutedQuery}${vodQuery}${tQuery}`;
};

export {
  getChatEmbedURL,
  getPlayerEmbedURL

};
