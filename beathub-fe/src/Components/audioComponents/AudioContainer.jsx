import React, { useState } from 'react';
import Recorder from './Recorder';
import MediaPlayer from './MediaPlayer';
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, Heading, Stack, Switch } from '@chakra-ui/react';
import { postThread } from '../../lib/apiFunctionality';

function AudioContainer() {
    const [audioArr, setAudioArr] = useState([]);
    const [recordingState, setRecordingState] = useState(false);
    const send = () => {
      const data = {
        title: 'Joseph and Dan are sending data',
        genre: 'Rock',
        bpm: 128,
        text: 'Some more text, you"re not tired yet'
      }
      const threadData = new FormData();
      for (let key in data) {
        threadData.append(key, data[key]);
      }
      threadData.append('audioFile', audioArr[0].src);
      console.log("🚀 ~ file: AudioContainer.jsx ~ line 22 ~ send ~ audioArr[0].src", audioArr[0].src)
      postThread(threadData);

    }
  return (
    <Box borderWidth='1px' borderRadius='lg' w="400px" height={'500px'} mt={'50px'}>
      <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab>Record Track</Tab>
          <Tab>Upload Track</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading align="center">Record Audio</Heading>
            <Recorder audioArr={audioArr} setAudioArr={setAudioArr} recordingState={recordingState} setRecordingState={setRecordingState} />
          </TabPanel>
          <TabPanel>
            <Heading align="center">Upload Track</Heading>
          </TabPanel>
        </TabPanels>
      </Tabs>
        {audioArr?.map((audioObj, index) => <Stack align='center' direction='row'><MediaPlayer file={audioObj.element} /> <span>{`Version ${index + 1}`}</span><Switch size='sm' /></Stack>)}
        <button onClick={send}>Send</button>        
    </Box>
    
  )
}

export default AudioContainer