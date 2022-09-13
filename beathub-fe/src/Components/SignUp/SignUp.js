import React, { useState } from 'react'
import axios from "axios";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Button,
    Flex,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react'


function SignUp() {
    const [userInfo, setUserInfo] = useState({});
    const handleTextChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
      };

      const handleSignup = async (e) => {
        try {
          e.preventDefault();
          const res = await axios.post(
            "http://localhost:8070/users/signup",
            userInfo
          );
          console.log(res.data);
          if (res) {
            // localStorage.setItem("token", JSON.stringify(res.data.token));
            console.log("signup responce", res);
          }
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <>
            <Box ml='30rem' mr='30rem' mt='1rem' border='2px' pt='2rem' pl='3rem' pr='3rem' pb='1.5rem'>
                <FormControl>
                    <FormLabel fontSize='15px'>First name</FormLabel>
                    <Input fontSize='15px' mb='1.5rem' placeholder='First name'  type="text" id="firstName"
                     onChange={handleTextChange} required/>
                    <FormLabel fontSize='15px'>Last name</FormLabel>
                    <Input fontSize='15px' mb='1.5rem' placeholder='Last name' type="text" id="lastName"
                     onChange={handleTextChange}/>
                    <FormLabel fontSize='15px'>E-mail Address</FormLabel>
                    <Input fontSize='15px' mb='1.5rem' placeholder='E-mail' type="email" id="email"
                     onChange={handleTextChange} required/>
                    <Flex justifyContent='center'>
                    <FormLabel fontSize='15px'>Add a profile image</FormLabel>
                    <Button ml='35%' fontSize='15px'>Upload</Button>
                    </Flex>
                    <FormLabel fontSize='15px'>Create a Password</FormLabel>
                    <Input placeholder='Min 8 characters...' fontSize='15px' mb='1.5rem' type='password' id="password"
                     onChange={handleTextChange} required />
                    <FormLabel fontSize='15px'>Re-type Password</FormLabel>
                    <Input placeholder='Re-type password' fontSize='15px' mb='1.5rem' type='password' id="repassword"
                     onChange={handleTextChange} required/>
                    <Button ml='35%' fontSize='15px' onClick={handleSignup}>Create Account</Button>
                </FormControl>
                <Button onClick={handleSignup}>Sign up</Button>
                
            </Box>
        </>
    )
}

export default SignUp