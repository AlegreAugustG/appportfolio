import Navbar from '../Navbar/Navbar';
import Skillcard from '../Card/Skillcard';
import Profilecard from '../Card/Profilecard';
import Contact from '../Form/Contact';
 
import { Box,   } from '@chakra-ui/react';
 
 
 
 
function Maincard() {
  return (
    <Box
      w="90%" // 80% de ancho
      h="85vh" // 80% de alto
      zIndex="1" // Z-index para mostrar por encima de los contenedores
      boxShadow="lg" // Sombra
      border="1px" // Borde
      borderColor="gray.300" // Color del borde
      bg="#f8f8f8" // Color de fondo
      position="absolute" // Posición absoluta para estar por encima de otros elementos
      top="15%" // Espaciado superior
      left="5%" // Espaciado izquierdo
    >
      <Navbar />
      <Profilecard />
      <Skillcard />
      
     <Contact/>         
      
    </Box>
  );
}

export default Maincard;
