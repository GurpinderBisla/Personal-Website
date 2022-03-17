import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Header from './Components/Header';
import About from './Components/About';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <About />
    </ChakraProvider>
  );
}

export default App;
