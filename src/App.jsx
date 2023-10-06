import { ChakraProvider, Box, Flex, Text } from '@chakra-ui/react';
import Maincard from './Component/Card/Maincard';

//xs
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Flex h="100vh" fontWeight="bold">
         
        <Box
          w={{ base: '100%', md: '35%', sm:'0%' }}
           bg="#f8efe0"
           
           >

          <Text textAlign="start" fontSize="3xl" color="#212121" p={4} ml={7}   >
            Augusto.
          </Text>
        </Box>
        <Maincard />
        {/* Contenedor derecho */}
        <Box  
         w={{ base: '100%', md: '65%', sm:'100%' }}
         bg="#212121"
        >
        <Text textAlign="end" fontSize="3xl" color="#f8efe0" p={4} mr={14}>
            Personal Portfolio
          </Text> 
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
 
  