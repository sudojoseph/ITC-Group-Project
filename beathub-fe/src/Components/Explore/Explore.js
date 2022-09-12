import React, { useEffect, useState } from 'react'
import { Box, Flex, Button, Input, InputGroup, InputRightElement, Select, Text, List, ListItem, ListIcon, OrderedList, UnorderedList } from '@chakra-ui/react'

function Search() {

  const [songs, setSongsList] = useState([{
    title: '',
    genre: '',
    length: '',
    creator: '',
    creator_id: ''
  }])

  useEffect(() => {
    const mockSongs = [
      {
        title: 'I Wanna Hold Your Hand',
        genre: 'Rock',
        length: 95,
        creator: 'Lennon/McCartney',
        creator_id: 1
      },

      {
        title: 'Hit Me Baby One More Time',
        genre: 'Pop',
        length: 125,
        creator: 'Britney Spears',
        creator_id: 2
      },

      {
        title: 'Hava Nagila',
        genre: 'Regional',
        length: 7521,
        creator: 'Tzvi Ben Yaakov',
        creator_id: 3
      }
    ]

    setSongsList(mockSongs)
  }, [])




  return (
    <>
      <Flex direction='column' align='center' justify='space-between'>
        <Box>
          <Text fontSize='2rem' mt='2rem'>Browse your favorite music</Text>
        </Box>

        <InputGroup size='lg' width='50%' mt='3rem' mb='2rem'>
          <Input pr='4.5rem' placeholder='Browse' />
          <InputRightElement width='6rem' mr='0.5rem'>
            <Button h='1.75rem' size='lg' height='90%'>Search</Button>
          </InputRightElement>
        </InputGroup>

        <Flex direction='row' mr='30rem'>
          <Select variant='flushed' placeholder='Genres' w='100%' mr='4rem' size='sm'>
            <option value='rock'>Rock</option>
            <option value='pop'>Pop</option>
            <option value='jazz'>Jazz</option>
            <option value='edm'>EDM</option>
            <option value='regional'>Regional</option>
          </Select>
          <Select variant='flushed' placeholder='Length' w='100%' size='sm'>
            <option value='short'>0 - 30s</option>
            <option value='medium'>30s - 2min</option>
            <option value='long'>2min --</option>
          </Select>
        </Flex>

        <Box display='flex' direction='column' mt='4rem'>
          <List spacing={10} fontSize='1.5rem'>
            {songs.map((song) => {
              return (
                <div>
                  <ListItem borderBottom='2px'>
                  (PLAYER BUTTON HERE) {song.title} by {song.creator} - {song.length} minutes
                  </ListItem>
                </div>
              )
            })}
          </List>

        </Box>

      </Flex>
    </>
  )
}

export default Search