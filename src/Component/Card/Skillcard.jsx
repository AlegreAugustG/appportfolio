 
import { Box, Text, } from '@chakra-ui/react';
import { SunIcon,MoonIcon,AtSignIcon,LinkIcon } from '@chakra-ui/icons'
import 'material-symbols';
function Skillcard() {
  return (
    <Box    
     
    w={{ base: '100%', md: '90%', sm:'100%'  }}
    ml={{ base: '0',   md: '5%',   }}
    h={{base: '100',   md:'38vh', sm:'50vh'  }}
 
    > 

    {/*border="1px solid black"*/}
{/* section*1>ul*3>h3>li{lorem}*1 */}
      
      <section className='
      hover:cursor-pointer  
      md:flex
      md:justify-between 
      md:flex-row   
      md:text-start

      flex-col flex  
      text-center
      gap-4  font-normal 
      w-full h-full
 
        ' >
     
      <div  id='iconos' className=' md:relative  
      sm:flex  sm:flex-row sm:gap-3  sm:pl-16 sm:pb-4
       flex   flex-row  gap-3  md:pl-0 md:pr-0  md:pb-4 pl-16  pb-4'>
          <p className='md:absolute md:right-0  md:-top-7  md:pr-0 hover:cursor-pointer active:text-gray-400'><AtSignIcon/></p>
          <p className='hover:cursor-pointer active:text-gray-400'><LinkIcon/> </p>
      </div>
     

<Text  bg="#212121" className='shadow-xl    ' color="white"     >
          <Box  className='   flex  items-center  justify-center '  
          
          P={{ sm:'2',    md:'0'}} 
          mt={{sm:'4',   md:'6'}}
          ml={{sm:'0',   md:'6'}}
          border={{sm:'',md:"0.1px solid gray"}}
          w={{sm:' ', md:"15%"}}
          h={{sm:' ', md:"25%"}}
          >
          <span className='material-symbols-outlined text-custom-gray'>
          schema
          </span>
          </Box>
      <Box  >
                <h3 className=' ml-6 mt-2'>Design System Analysis </h3>
                <p className=' ml-6  mt-2 text-xs text-custom-gray'>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Sit  </p>
      </Box>
      </Text>
 

      <Text  bg="white" className='shadow-xl    ' color="black"     >
          <Box  className='   flex  items-center  justify-center '  
          
          P={{ sm:'2',    md:'0'}} 
          mt={{sm:'4',   md:'6'}}
          ml={{sm:'0',   md:'6'}}
          border={{sm:'',md:"0.1px solid #f8efe0"}}
          w={{sm:' ', md:"15%"}}
          h={{sm:' ', md:"25%"}}
          >
            
          <span className='material-symbols-outlined'>
          Devices
          </span>
          </Box>
      <Box  >
                <h3 className=' ml-6 mt-2'>Web Development  </h3>
                <p className=' ml-6  text-xs mt-2 text-custom-gray'>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Sit  </p>
      </Box>
      </Text>


      <Text  bg="white" className='shadow-xl    ' color="black"     >
          <Box  className='   flex  items-center  justify-center '  
          
          P={{ sm:'2',    md:'0'}} 
          mt={{sm:'4',   md:'6'}}
          ml={{sm:'0',   md:'6'}}
          border={{sm:'',md:"0.1px solid #f8efe0"}}
          w={{sm:' ', md:"15%"}}//ancho de cards 
          h={{sm:' ', md:"25%"}}//alto de cards 
          >
          <span className='material-symbols-outlined'>
          phone_iphone
          </span>
          </Box>
      <Box  >
                <h3 className=' ml-6 mt-2'>Mobile Development </h3>
                <p className=' ml-6  text-xs text-custom-gray mt-2'>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Sit  </p>
      </Box>
      </Text>
   
    <div id='iconos' className='
     md:relative sm:absolute sm:pl-9 sm:pb-4
     absolute md:pl-0 md:pr-0 md:pb-2 pl-9  pb-4'> 
         <p className='hover:cursor-pointer active:text-gray-400'> <MoonIcon/> </p>
          <p className=' md:absolute md:right-0  md:-top-7 hover:cursor-pointer active:text-gray-400'><SunIcon/></p>
     </div>
      </section>

      <style>
      {`
          @media (max-width: 639px) {
            #iconos{
              
             
            }
          }
        `}
      </style>

    </Box>
  );
}

export default Skillcard;