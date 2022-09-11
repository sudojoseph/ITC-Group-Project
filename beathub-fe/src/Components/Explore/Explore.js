import React from 'react'
import { Box, Flex, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

function Search() {
  return (
    <>
      <Flex direction='column' align='center' justify='space-between' border='2px'>
        <Box border='2px'>Browse your favorite music</Box>
        
        <InputGroup size='lg' width='50%' mt='3rem' mb='2rem'>
          <Input pr='4.5rem' placeholder='Browse' />
          <InputRightElement width='6rem' mr='0.5rem'>
            <Button h='1.75rem' size='lg' height='90%'>Search</Button>
          </InputRightElement>
        
        </InputGroup>
      </Flex>
    </>
  )
}

export default Search