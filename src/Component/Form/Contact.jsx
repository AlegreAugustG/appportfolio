import {
  
  Center,
  Input,
  FormControl,
  FormLabel,
  Button,
  Textarea,
} from "@chakra-ui/react";
 

    function Contact() {
      return (
        <Center h={{md:'100vh', sm:'100vh'}}
        >
           
          <form
            action=""
            className="bg-white p-6 rounded-lg shadow-lg    md:w-2/5 sm:w-2/4 font-normal "
          >
            <FormControl>
              <FormLabel> </FormLabel>
              <Input
                type="text"
                placeholder="Nombre"
                mb="4"
                p="2"
                border="1px"
                borderColor="gray.300"
                borderRadius="md"
              />
            </FormControl>
            <FormControl>
              <FormLabel> </FormLabel>
              <Input
                type="email"
                placeholder="Email"
                mb="4"
                p="2"
                border="1px"
                borderColor="gray.300"
                borderRadius="md"
              />
            </FormControl>
            <FormControl>
              <FormLabel> </FormLabel>
              <Input
                type="text"
                placeholder="Asunto"
                mb="4"
                p="2"
                border="1px"
                borderColor="gray.300"
                borderRadius="md"
              />
            </FormControl>
            <FormControl>
              <FormLabel> </FormLabel>
              <Textarea
                placeholder="Mensaje"
                mb="4"
                p="2"
                border="1px"
                borderColor="gray.300"
                borderRadius="md"
              />
            </FormControl>
            <Button
              w={{md: '40%', sm: '50%'}}
              type="submit"
              bg="#212121"
              color="white"
              py="2"
              borderRadius="md"
              _hover={{ bg: "#555" }}
              transitionDuration="300ms"
            >
              Enviar
            </Button>
          </form>
        </Center>



    
        // <section className='
        // flex items-center 
        // justify-center h-screen 
        // '>
        //     <form action="" className=' bg-white p-6 rounded-lg shadow-lg flex flex-col w-96'>
        //         <input type="text" placeholder='Nombre' className='mb-4 p-2 border border-gray-300 rounded-md'/>
        //         <input type='email' placeholder='Email' className='mb-4 p-2 border border-gray-300 rounded-md'/>
        //         <input type="text" placeholder='Asunto' className='mb-4 p-2 border border-gray-300 rounded-md'/>
        //         <input type="text" placeholder='Mensaje' className='mb-4 p-2 border border-gray-300 rounded-md'/>
        //         <input type="Submit" className='bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300'/>
        //         </form>
        //   </section>
 
  );
}

export default Contact;