import React, { useState } from 'react';
import Recorder from './Recorder';
import MediaPlayer from './MediaPlayer';
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, Heading, Stack, Switch } from '@chakra-ui/react';
import DragDrop from './DragDrop';

function AudioContainer() {
    const [audioArr, setAudioArr] = useState([]);
    const [recordingState, setRecordingState] = useState(false);
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
            <DragDrop />
          </TabPanel>
        </TabPanels>
      </Tabs>
        {audioArr?.map((audioObj, index) => <Stack align='center' direction='row'><MediaPlayer file={audioObj.element} /> <span>{`Version ${index + 1}`}</span><Switch size='sm' /></Stack>)}        
    </Box>
  )
}

export default AudioContainer