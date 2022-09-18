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
    try {
      const res = axios.get('http://localhost:8070/thread').then((res) => {
        console.log(res.data.thread)
        setSongsList(res.data.thread)
      })
    } catch (error) {
      console.error(error)
    }
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
        </Flex>


        <Box display='flex' direction='column' mt='4rem' >
          <List spacing={20} fontSize='1.5rem'>
            {songs.map((song) => {
              return (
                <>
                  <Flex align='center' p='2rem' direction='column' boxShadow='4px 4px 7px 4px #5b5b5b47' rounded='md' bg='#121214' color='white' borderRadius='10px' >

                    <Flex align='left' direction='column'>
                      <MediaPlayer src={song.audioFile} />
                      <Flex direction='column'>
                        <Text mt='1rem' fontSize='15px' fontWeight='bold'>{`"${song.title}"`}</Text><Text mt='0.7rem' ml='15rem' fontSize='12px'>{`${song.bpm} BPM`}</Text>
                      </Flex>
                    </Flex>

                    <Flex justifyContent='space-around' mt='2rem'>
                      <Select variant='flushed' placeholder='Forks' size='sm' w='50%' mr='5rem'>
                        <option style={{ backgroundColor: 'black' }}>{song?.subThreads?.length}</option>
                      </Select>
                      <Button backgroundColor='#6C75F5' color='white' _hover={{ backgroundColor: '#F2F2F2', color: '#6C75F5' }} p='1.2rem' fontSize='13px' onClick={() => {
                        songs.map((item) => {
                          if (song._id === item._id) {
                            console.log('O item é', item)
                            //const resp = axios.post(`http://localhost:8070/thread/${item._id}/subthread`, item).then((res) => {})
                          }
                        }
                        )
                      }}>Fork Track</Button>
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