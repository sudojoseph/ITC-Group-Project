import DragDrop from './DragDrop';
import Recorder from './Recorder';
import React, { useState } from 'react';
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, Heading, Button, Flex } from '@chakra-ui/react';
import { postThread } from '../../lib/apiFunctionality';
import SendAudioModal from '../Create/SendAudioModal';
import AudioOutput from './AudioOutput';



function AudioContainer() {
    const [audioArr, setAudioArr] = useState([]);
    const [recordingState, setRecordingState] = useState(false);

    const submitThread = (data) => {
      const threadData = new FormData();
      for (let key in data) {
        threadData.append(key, data[key]);
      }
      let index = 0;
      audioArr.every(obj => {
        if (obj.toBeSaved === true) {
          return false;
        }
        index++;
        return true;
      });

      threadData.append('audioFile', audioArr[index].file);
      postThread(threadData);

    }

    const toggleTrackIncludes = (id) => {
      alert(id);
      setAudioArr([...audioArr.map((arrItem, index) => index === id ? {...arrItem, includeInRec: !arrItem.includeInRec} : arrItem = arrItem)]);
    };

    const checkToSave = (id) => {
      setAudioArr([...audioArr.map((arrItem, index) => index === id ? {...arrItem, toBeSaved: true} : {...arrItem, toBeSaved: false})]);
    }

  return (
    <Box borderWidth='1px' borderRadius='lg' w="600px" minH={'500px'} mt={'50px'} mb={'50px'}>
      <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab><b>Record Track</b></Tab>
          <Tab><b>Upload Track</b></Tab>
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
      <Box pt={36}>
        <AudioOutput audioArr={audioArr} toggleTrackIncludes={toggleTrackIncludes} checkToSave={checkToSave}/>    
      </Box>
      <Flex justify={'center'} p={'15px'}>
        {/* <Button onClick={send} color={'white'} backgroundColor={'#A61C4F'}>Submit Thread</Button>  */}
        {!audioArr.length ? '' : <SendAudioModal submitThread={submitThread} />}   
      </Flex>
    </Box>
    
  )
}

export default AudioContainer