import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import './recordButton.css';

 
const recorder = new MicRecorder({
  bitRate: 128
});


 
function Recorder({setAudioArr, audioArr, recordingState, setRecordingState}) {
  
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


  const stop = async() => {
    recorder
    .stop()
    .getMp3().then(([buffer, blob]) => {
      console.log("🚀 ~ file: Recorder.jsx ~ line 34 ~ .getMp3 ~ buffer", buffer)
      const file = new File(buffer, `recording${Math.random() * 1000000}.mp3`, {
        type: blob.type,
        lastModified: Date.now()
      });  
      console.log("🚀 ~ file: Recorder.jsx ~ line 38 ~ file ~ file", file)
     
      let player = new Audio(URL.createObjectURL(file));
      
      setAudioArr([...audioArr, {element: player, src: player.src, blob: URL.createObjectURL(file)}]);

     
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