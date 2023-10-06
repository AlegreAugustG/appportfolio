import { Box, Button, Text, Image,Flex} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'

function Profilecard() {
  return (
    <Flex justify="space-between" fontWeight="normal"
    >
    <Box p={4}  justify="flex-start" position="relative" pl="10%">
      <Text position="relative" left={{md:"-70%", sm:"-70%"}} top="40%"  transform="rotate(-90deg)" pointerEvents="none" > texto vertical </Text>
      {/* Otros elementos de Profilecard */}
      <Text fontSize="sm" pointerEvents="none">Germán Alegre</Text>
      <Text pointerEvents="none" fontSize="3xl" mb={4}>
        Full-Stack <br /> Developer.
      </Text>
      <Button borderRadius={0} fontSize="xs" bg="#212121" color="white" mt={4} mb="10"
       _hover={{
         bg: "#555", // Cambia el color de fondo al pasar el puntero
         textDecoration: "none", // Quita la subrayado al pasar el puntero
       }}
      >
        Start a project <ArrowForwardIcon />
      </Button>
    </Box>

    {/*
    style={{ 
    writingMode: "vertical-rl",
    transformOrigin: "left top",
    position: "absolute",
    top: "0",
    right: "0",     
      }}
    */}

    <Box  transform="rotate(-90deg)" position="absolute" right="4%"  top="40%"  >
  <Text   _hover={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'  }} _active={{ color: 'gray.400' }} style={{ fontSize: '10px' }}>About me</Text>
</Box>
    <Box
        
        h="100%"
        right={{md:'10%', sm:'15%' }}
        top={{md:'0%', sm:'6%'}}
        position={{md:'absolute', sm:'absolute'}}
        zIndex={{md:'-1', sm:'-1'}}
      >
      
      <Image id='img'
        h={{ md:"70%", sm:"70%" }}
        src="/src/assets/img/perfillimpio.png"
        alt="perfil.jpg"
        objectFit="cover"
      />

<style>
      {`
          @media (max-width: 1050px) {
            #img {
              height: 70%;
              position: relative;
              top: 5%;
              object-fit: cover;
          }
        `}
      </style>
    </Box>
  </Flex>
);
}

export default Profilecard;
 





