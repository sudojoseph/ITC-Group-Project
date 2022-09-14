import React, { useEffect, useState } from 'react'
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
    const [profileUser, setProfileUser] = useState("");
    const user = localStorage.getItem("user");
    useEffect(() => {

        if (user) {
            setProfileUser(user);
        }
      }, []);
      useEffect(() => {
        if(user===null){
            setProfileUser(null)
      }}, [profileUser]);
    
    return (
        <>
            <Flex justify='space-between' align='center' fontSize='20px' pt='2rem' pb='2rem' backgroundColor='#A61C4F'>
                
                <Box ml='2rem'>
                    <HStack display='flex' w='150%' justify='space-around' fontSize='20px'>
                        <Text fontSize='30px' mr='4rem' color='white'><Link to='/'>MusicHub</Link></Text>
                        <Text color='white'><Link to='/explore'>Explore</Link></Text>
                        <Text color='white'><Link to='/about'>How It Works</Link></Text>
                    </HStack>
                </Box>
                
                <Box>
                   <Login setProfileUser={setProfileUser}/>
                </Box>
                
                <Menu>
                    {profileUser ? <MenuButton as={Button} backgroundColor='#F2F2F2' mr='4rem'>
                        Profile
                    </MenuButton> : null}
                    
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