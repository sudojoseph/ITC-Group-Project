import React from 'react';
import { Flex } from '@chakra-ui/react';
import AudioContainer from '../audioComponents/AudioContainer';

function Create() {
  return (
    <Flex minWidth='100vw' justify='center'>
        <AudioContainer />
    </Flex>
  )
}

export default Create