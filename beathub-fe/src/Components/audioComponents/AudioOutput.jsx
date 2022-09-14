import React from 'react';
import MediaPlayer from './MediaPlayer';
import './AudioOutput.css';
import { Stack, Checkbox, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot } from '@chakra-ui/react';



function AudioOutput({audioArr, toggleTrackIncludes, checkToSave}) {
  return (
    <div>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Save final</Th>
              <Th>Audio Track</Th>
              <Th>Include while recording</Th>
            </Tr>
          </Thead>
          <Tbody>
            {audioArr?.map((audioObj, index) => <Tr key={index}>
              <Td>
                <Checkbox isChecked={audioObj.toBeSaved} onChange={() => checkToSave(index)}/>
              </Td>
              <Td>
                <MediaPlayer src={audioObj.src} />
              </Td>
              <Td>
                <Checkbox size='lg' colorScheme='purple' isChecked={audioObj.includeInRec} onChange={() => toggleTrackIncludes(index)}/>
              </Td>
            </Tr>)}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default AudioOutput;