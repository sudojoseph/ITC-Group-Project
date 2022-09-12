import React from 'react'
import { Box, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function Messages() {
  return (
    <>
      <Box>
        <Text ml='21rem' mt='3rem' fontSize='50px'>Messages</Text>
      </Box>

      <Box ml='21rem' mr='21rem' mt='3rem'>
        <Tabs>
          <TabList>
            <Tab>Inbox</Tab>
            <Tab>Unread</Tab>
            <Tab>Archived</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>Inbox messages!</p>
            </TabPanel>
            <TabPanel>
              <p>Unread messages!</p>
            </TabPanel>
            <TabPanel>
              <p>Archived messages!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  )
}

export default Messages