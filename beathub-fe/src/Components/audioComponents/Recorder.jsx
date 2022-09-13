import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import { useReactMediaRecorder } from "react-media-recorder";
import './recordButton.css';

 
const recorder = new MicRecorder({
  bitRate: 128
});


 
function Recorder({setAudioArr, audioArr, recordingState, setRecordingState }) {
  
  const start = () => {

    if (audioArr.length) {
      audioArr?.forEach(file => file.element.play());
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
      const file = new File(buffer, `recording${Math.random() * 1000000}.mp3`, {
        type: 'audio/mp3',
        lastModified: Date.now()
      });
     
      let player = new Audio(URL.createObjectURL(file));
      
      setAudioArr([...audioArr, {element: player, src: player.src, file: file}]);

     
    }).catch((e) => {
      alert('We could not retrieve your message');
      console.log(e);
    });
    setRecordingState(false);
  };

  

  return (
    <div class='record-button-container'>
    <span class={`pulse-button ${!recordingState ? '' : 'recording'}`}
      onClick={!recordingState ? start : stop}>{!recordingState ? 'REC' : 'STOP'}</span>
  </div>
  )
}

export default Recorder;