import React from 'react';

import { ChakraProvider } from '@chakra-ui/react'
import Home from './Home';
import theme from './const/Theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home></Home>
    </ChakraProvider >
  );
}

export default App;
