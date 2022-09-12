import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

function MediaPlayer({file}) {
  return (
    <ReactAudioPlayer
    src={file.src}
        controls
    />
  )
}

export default MediaPlayer;