import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ChakraProvider,Box,Text,VStack,Code,Grid,theme} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './Components/Navbar/Navbar.js';
import Explore from './Components/Explore/Explore';
import HowItWorks from './Components/How It Works/HowItWorks';
import Home from './Components/Home/Home';
import Login from './Components/LogIn/Login.js';
import SignUp from './Components/SignUp/SignUp';
import MyAccount from './Components/MyAccount/MyAccount';
import Messages from './Components/Messages/Messages';
import Create from './Components/Create/Create';
import Forked from './Components/Forked/Forked';


export const UseContext = React.createContext()


function App() {
  return (
    <UseContext.Provider value = {''}>
    <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Box textAlign="center">
        <Navbar />
      </Box>
      <Routes>
          <Route path='/' element={ <Home/> }></Route>
          <Route path='/myaccount' element={ <MyAccount/> }></Route>
          <Route path='/messages' element={ <Messages/> }></Route>
          <Route path='/create' element={ <Create/> }></Route>
          <Route path='/forked' element={ <Forked/> }></Route>
          <Route path='/explore' element={ <Explore/> }></Route>
          <Route path='/about' element={ <HowItWorks/> }></Route>
          <Route path='/login' element={ <Login/> }></Route>
          <Route path='/signup' element={ <SignUp/> }></Route>
        </Routes>
    </BrowserRouter>
    </ChakraProvider>
    </UseContext.Provider>
  );
}

export default App;
 