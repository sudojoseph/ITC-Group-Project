import DragDrop from './DragDrop';
import Recorder from './Recorder';
import MediaPlayer from './MediaPlayer';
import React, { useState } from 'react';
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, Heading, Stack, Switch } from '@chakra-ui/react';
import { postThread } from '../../lib/apiFunctionality';;



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
      threadData.append('audioFile', audioArr[0].file);
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
            <Heading align="center" pb={13}>Upload Track</Heading>
            <DragDrop setAudioArr={setAudioArr} audioArr={audioArr} />
          </TabPanel>
        </TabPanels>
      </Tabs>
        {audioArr?.map((audioObj, index) => <Stack align='center' direction='row'><MediaPlayer src={audioObj.src} /> <span>{`Version ${index + 1}`}</span><Switch size='sm' /></Stack>)}
        <button onClick={send}>Send</button>        
    </Box>
    
  )
}

export default AudioContainer