
import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar'
import Cart from './Components/Body/Cart/Cart';
import FeatureProducts from './Components/FeatureProducts/FeatureProducts';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Navbar />
    <Cart/>
    <FeatureProducts/>
  </ChakraProvider>
  );
}

export default App;
