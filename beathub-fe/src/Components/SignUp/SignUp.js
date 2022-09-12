import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Button,
    Flex
} from '@chakra-ui/react'

function SignUp() {
    return (
        <>
            <Box ml='30rem' mr='30rem' mt='1rem' border='2px' pt='2rem' pl='3rem' pr='3rem' pb='1.5rem'>
                <FormControl>
                    <FormLabel fontSize='15px'>First name</FormLabel>
                    <Input fontSize='15px' mb='1.5rem' placeholder='First name' />
                    <FormLabel fontSize='15px'>Last name</FormLabel>
                    <Input fontSize='15px' mb='1.5rem' placeholder='Last name' />
                    <FormLabel fontSize='15px'>E-mail Address</FormLabel>
                    <Input fontSize='15px' mb='1.5rem' placeholder='E-mail' />
                    <Flex justifyContent='center'>
                    <FormLabel fontSize='15px'>Add a profile image</FormLabel>
                    <Button ml='35%' fontSize='15px'>Upload</Button>
                    </Flex>
                    <FormLabel fontSize='15px'>Create a Password</FormLabel>
                    <Input placeholder='Min 8 characters...' fontSize='15px' mb='1.5rem' type='password' />
                    <FormLabel fontSize='15px'>Re-type Password</FormLabel>
                    <Input placeholder='Re-type password' fontSize='15px' mb='1.5rem' type='password' />
                    <Button ml='35%' fontSize='15px'>Create Account</Button>
                </FormControl>
            </Box>
        </>
    )
}

export default SignUp