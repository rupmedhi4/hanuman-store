
import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar'
import Cart from './Components/Body/Cart/Cart';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Navbar />
    <Cart/>
  </ChakraProvider>
  );
}

export default App;
