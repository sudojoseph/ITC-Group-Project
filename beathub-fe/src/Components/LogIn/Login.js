import React, { useState } from 'react'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,
  useDisclosure, Button, FormControl,FormLabel,Input, Text, LinkBox, Flex} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import axios from 'axios';

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  const initialRef = React.useRef (null)
  const finalRef = React.useRef(null)


  const handleLogIn = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:8070/users/login", { email, password }, {withCredentials: true});
      console.log("axios login responce", res)
      if (res.data.ok) {
        localStorage.setItem('user', JSON.stringify(res.data.user))

        setCurrentUser(res.data.user)
        console.log(res.data)
        console.log(currentUser)

      }
      if (res.data.ok) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        console.log("current userr saved", res.data)}

    } catch (err) {
      console.log(err);
    }
  };


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
              <Input placeholder='Type your e-mail address' onChange={(e) => setEmail(e.target.value)} required />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Type your password' onChange={(e) => setPassword(e.target.value)} type="password" required />
            </FormControl>
          </ModalBody>

          <Flex direction='row'>
            <Text fontSize='14px' ml='1.70rem'>Don't have an account yet?</Text><Link to='/signup'><LinkBox onClick={onClose}>Create One</LinkBox></Link>
          </Flex>
          
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleLogIn}>
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