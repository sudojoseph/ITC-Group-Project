import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import MediaPlayer from './MediaPlayer';
import { Button } from '@chakra-ui/react';
import './recordButton.css';

 
const recorder = new MicRecorder({
  bitRate: 128
});
 
function Recorder({setAudioArr, audioArr, recordingState, setRecordingState}) {
  
  const start = () => {

    if (audioArr.length) {
      audioArr.forEach(file => file.play());
    }
  
    recorder.start().then(() => {
      //TODO: create user experience
    }).catch((e) => {
      console.error(e);
    });

    setRecordingState(true);
  }


  const stop = () => {
    recorder
    .stop()
    .getMp3().then(([buffer, blob]) => {
      // do what ever you want with buffer and blob
      // Creating MP3 file
      const file = new File(buffer, `recording${Math.random() * 1000000}.mp3`, {
        type: blob.type,
        lastModified: Date.now()
      });
  
     
      const player = new Audio(URL.createObjectURL(file));
      setAudioArr([...audioArr, player]);

      console.log(player);
     
    }).catch((e) => {
      alert('We could not retrieve your message');
      console.log(e);
    });
    setRecordingState(false);
  };

  return (
    <div class='record-button-container'>
    <span class={`pulse-button ${!recordingState ? '' : 'recording'}`}
      onClick={!recordingState ? start : stop}>{!recordingState ? 'Record' : 'stop'}</span>
  </div>
  )
}

export default Recorder;