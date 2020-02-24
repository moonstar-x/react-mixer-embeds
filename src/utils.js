import { MIXER_CHAT_URL } from './constants';

const getChatEmbedURL = (channel, composer) => {
  return `${MIXER_CHAT_URL}/${channel}?composer=${composer}`;
};

export {
  getChatEmbedURL
};
