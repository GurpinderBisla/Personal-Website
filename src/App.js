import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <About />
      <Resume />
    </ChakraProvider>
  );
}

export default App;
