import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

function MediaPlayer({src}) {
  return (
    <ReactAudioPlayer
    src={src}
        controls
    />
  )
}

export default MediaPlayer;