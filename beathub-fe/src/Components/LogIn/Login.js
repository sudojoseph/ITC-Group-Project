import React from 'react'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,
  useDisclosure, Button, FormControl,FormLabel,Input, Text, LinkBox, Flex} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef (null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button onClick={onOpen}>Login</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input ref={initialRef} placeholder='Type your e-mail address' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Type your password' />
            </FormControl>
          </ModalBody>

          <Flex direction='row'>
            <Text fontSize='14px' ml='1.70rem'>Don't have an account yet?</Text><Link to='/signup'><LinkBox onClick={onClose}>Create One</LinkBox></Link>
          </Flex>
          
          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Enter
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
 

export default Login