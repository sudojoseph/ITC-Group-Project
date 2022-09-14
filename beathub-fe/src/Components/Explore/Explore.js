import React, { useEffect, useState } from 'react'
import MediaPlayer from '../audioComponents/MediaPlayer'
import { Box, Flex, Button, Input, InputGroup, InputRightElement, Select, Text, List, ListItem, ListIcon, OrderedList, UnorderedList } from '@chakra-ui/react'
import axios from 'axios'

function Search() {

  const [songs, setSongsList] = useState([{
    title: '',
    genre: '',
    length: '',
    creator: '',
    creator_id: ''
  }])

  useEffect(() => {
    try{
      const res = axios.get('http://localhost:8070/thread').then((res) => {
        console.log(res.data.thread)
        setSongsList(res.data.thread)
      })
    } catch(error) {
      console.error(error)}
  }, [])

  function forkTracks() {
    try {
      // THIS IS A WORKING IN PROGRESS YET (START)
      const id = songs.map((song)=>{console.log(song._id)})
      const thread = songs.find()
      const resp = axios.post(`http://localhost:8070/thread/:id/subthread`, thread, { "Content-Type": "multipart/form-data" });
      // THIS IS A WORKIN IN PROGRESS YET (END)
    } catch (error) {
      console.error(error);
    }
  }


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
        </Flex>


        <Box display='flex' direction='column' mt='4rem' border='2px'>
          <List spacing={20} fontSize='1.5rem'>
            {songs.map((song) => {
              return (
                <>
                  <Flex align='center' p='2rem' direction='column'>
                    <MediaPlayer src={song.audioFile} />
                    <Text mt='2rem'>{`"${song.title}" BPM:${song.bpm}`}</Text>
                    <Flex justifyContent='space-around' mt='2rem'>
                      <Select variant='flushed' placeholder='Forks' size='sm' w='50%' mr='5rem'>
                        <option>{song?.subThreads?.length}</option>
                      </Select>
                      <Button p='1.5rem' onClick={forkTracks}>Fork Track</Button>
                    </Flex>
                  </Flex>
                </>
              )
            })}
          </List>

        </Box>

      </Flex>
    </>
  )
}

export default Search