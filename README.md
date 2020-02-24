# react-mixer-embed

> A Mixer player embed React component.

[![npm version](https://img.shields.io/npm/v/react-mixer-embeds.svg)](https://www.npmjs.com/package/react-mixer-embeds)
[![npm downloads](https://badgen.net/npm/dt/react-mixer-embeds)](https://www.npmjs.com/package/react-mixer-embeds)
[![bundle size](https://badgen.net/bundlephobia/minzip/react-mixer-embeds)](https://bundlephobia.com/result?p=react-mixer-embeds)
[![github stars](https://badgen.net/github/stars/moonstar-x/react-mixer-embeds)](https://github.com/moonstar-x/react-mixer-embeds)
[![github issues](https://badgen.net/github/issues/moonstar-x/react-mixer-embeds)](https://github.com/moonstar-x/react-mixer-embeds/issues)

## Installation

```bash
npm install --save react-mixer-embeds
```

or

```bash
yarn add react-mixer-embeds
```

## Available Props

### MixerPlayer

* `channel` **\<String\>**: The name of the channel to stream. **Required**.
* `id` **\<String\>**: ID of the embed's `iframe` node. (Default: `mixer-player-embed`)
* `width` **\<Number|String\>**: Player embed width in pixels. Allows strings formatted as percentage (i.e `50%`). (Default: `940`)
* `height` **\<Number|String\>**: Player embed height in pixels. Allows strings formatted as percentages (i.e `50%`). (Default: `480`)
* `disableCostream` **\<Boolean\>**: Set this to true to prevent the embed from displaying CoStreams. (Default: `false`)
* `disableLowLatency` **\<Boolean\>**: Set this to true to disable FTL Playback. This will mae the video HLS instead. (Default: `false`)
* `muted` **\<Boolean\>**: Set this to true to mute the video player on load. This prop is a bit unreliable because streams will almost
 always start up muted and sometimes VODs remember what the volume was set to. (Default: `false`)
* `disableLinks` **\<Boolean\>**: Set this to true to prevent links within the embed. (Default: `false`)
* `hideChannel` **\<Boolean\>**: Set this to true to hide the channel/"Watch on Mixer" link for this embed. (Default: `false`)
* `video` **\<String\>**: Provide a VOD id to embed a VOD. The channel must be the VOD's author. (Default: `null`)
* `time` **\<String\>**: Time in the VOD where playback starts. Needs to be formatted like: `1h2m3s`. (Default: `null`)
* `allowFullscreen` **\<Boolean\>**: Whether the player can enter fullscreen or not. The fullscreen button in the player will remain
 visible regardless of the value of this prop.
 * `...props`: The rest of the props are supplied to the `iframe` node where the embed is mounted.
 
 ### MixerChat
 
 * `channel` **\<String\>**: The name of the channel to embed the chat. **Required**.
 * `composer` **\<Boolean\>**: Set this to false if you want to hide the text area to write messages. (Default: `true`)
 * `id` **\<String\>**: ID of the embed's `iframe` node. (Default: `mixer-chat-embed`)
 * `width` **\<Number|String\>**: Chat embed width in pixels. Allows strings formatted as percentage (i.e `50%`). (Default: `350`)
 * `height` **\<Number|String\>**: Chat embed height in pixels. Allows strings formatted as percentages (i.e `50%`). (Default: `500`)

## Example usage

```jsx
import React from 'react';
import { MixerChat, MixerPlayer } from 'react-mixer-embeds';

const Stream = () => {
  return (
    <div>
      <MixerChat channel="moonstar_x" />
      <MixerPlayer channel="moonstar_x" />
    </div>
  );
}
```

## Author

This component bundle was made by [moonstar-x](https://github.com/moonstar-x).
