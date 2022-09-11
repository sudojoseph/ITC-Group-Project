import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    HStack,
    Flex,
    Box,
    Button,
    Text
} from '@chakra-ui/react'
import Login from '../LogIn/Login'



function Navbar() {
    return (
        <>
            <Flex justify='space-between' align='center' fontSize='20px' border='2px' pt='2rem' pb='2rem'>
                
                <Box ml='2rem'>
                    <HStack border='2px'>
                        <Link to='/'>MusicHub | </Link>
                        <Link to='/explore'>Explore | </Link>
                        <Link to='/about'>How It Works</Link>
                    </HStack>
                </Box>
                
                <Box>
                   <Login />
                </Box>
                
                <Menu>
                    <MenuButton as={Button} colorScheme='pink' mr='4rem'>
                        Profile
                    </MenuButton>
                    <MenuList>
                        <MenuGroup title='Profile'>
                            <MenuItem><Link to='/myaccount'>My Account</Link></MenuItem>
                            <MenuItem><Link to='/messages'>Messages</Link></MenuItem>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup title='My Music'>
                            <MenuItem><Link to='create'>Create Song</Link></MenuItem>
                            <MenuItem><Link to='forked'>Forked Tracks</Link></MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>

            </Flex>
        </>
    )
}

export default Navbar