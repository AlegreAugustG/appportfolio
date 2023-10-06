import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  
  Center,
  Input,
  FormControl,
  FormLabel,
  Button,
  Textarea,
} from "@chakra-ui/react";

 

    function Contact() {
      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rr5sl5n', 'template_p2en8la', form.current, '3EO2Wi3NG1z9VpJDi')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

      return (
        <Center h={{md:'100vh', sm:'100vh'}}
        >
           
          <form  ref={form} onSubmit={sendEmail}
            action=""
            className="bg-white p-6 rounded-lg shadow-lg    md:w-2/5 sm:w-2/4 font-normal "
          >
            <FormControl>
              <FormLabel> </FormLabel>
              <Input
                name="user_name"
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
                name="user_email" 
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
                name="asunto"
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
                name="message"
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
              value="Send"
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