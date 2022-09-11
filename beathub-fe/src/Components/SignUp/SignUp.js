import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box
} from '@chakra-ui/react'

function SignUp() {
    return (
        <>
            <Box ml='20rem' mr='20rem' mt='4rem' border='2px'>
                <FormControl isRequired>
                    <FormLabel>First name</FormLabel>
                    <Input placeholder='First name' />
                </FormControl>
            </Box>
        </>
    )
}

export default SignUp