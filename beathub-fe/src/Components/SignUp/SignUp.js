import React, { useState } from 'react'
import axios from "axios";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Button
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
            // navigate("/search");
          }
        } catch (err) {
          console.log(err);
        }
      };





    return (
        <>
            <Box ml='20rem' mr='20rem' mt='4rem' border='2px'>
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Email'  type="email" id="email"
                     onChange={handleTextChange} required/>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder='Password' type="password" id="password"
                     onChange={handleTextChange} required />
                    <FormLabel>Repeat password</FormLabel>
                    <Input placeholder='Repeat password' type="password" id="repassword"
                     onChange={handleTextChange} required/>
                    <FormLabel>First name</FormLabel>
                    <Input placeholder='First name' type="text" id="firstName"
                     onChange={handleTextChange} required/>
                    <FormLabel>Last name</FormLabel>
                    <Input placeholder='Last name' type="text" id="lastName"
                     onChange={handleTextChange}/>
                </FormControl>
                <Button onClick={handleSignup}>Sign up</Button>
                
            </Box>
        </>
    )
}

export default SignUp