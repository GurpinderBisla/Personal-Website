import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <About />
      <Resume />
      <Projects />
    </ChakraProvider>
  );
}

export default App;
