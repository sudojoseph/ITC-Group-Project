import React from 'react'
import {Box, Flex, Text} from '@chakra-ui/react'

function HowItWorks() {
  return (
    <>
    <Flex direction='column'>
      <Box textAlign='center' pb='2rem' pt='3rem'>
        <Text fontSize='2rem'>BeatHub is an open source platform for musicians all over the world</Text>
      </Box>
      <Box textAlign='center' pt='1rem' pb='1rem'>
        <Text fontSize='1.5rem'>Create, contribute and make music together!</Text>
      </Box>
      
      <Box textAlign='center'>
        <Text></Text>
      </Box>
    </Flex>
    </>
  )
}

export default HowItWorks