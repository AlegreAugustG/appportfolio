import { Box } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'

function Navbar() {
  return (
    <Box p={4} fontSize="sm" textAlign="center" w={{ sm: '65%', md: '100%' }}>
      {/* Checkbox y label solo para dispositivos sm  xs*/}
      <input type="checkbox" id="button_menu"   className="md:hidden hidden" />
      <label id="_menu" htmlFor="button_menu" className="  cursor-pointer md:hidden active:text-gray-400">
        <HamburgerIcon />
      </label>

      {/* Contenido del menú */}
      <p className='sm:block   
                     sm:top-9.5 md:top-6 left-10 absolute
                    flex justify-center md:justify-start mr-6 pointer-events-none' >Augusto</p>
                    
      <nav id="menu" className="
      menu flex sm:flex-col
      md:flex-row md:justify-between md:m-1
      md:relative md:top-0 md:right-0
      flex-col absolute  top-3 right-24
      ">

        <ul  className=" sm:block md:relative  md:top-0 
                         md:left-0 sm:top-10 sm:left-10 sm:absolute
                         flex justify-center md:justify-start md:mr-6">
          <li className="text-center md:text-left sm:hidden">   </li>
        </ul>
        <ul id="sub_menu" className="
        sm:m-0 sm:flex-row sm:gap-5 sm:relative
        sm:-right-20 sm:top-1 md:flex-row flex justify-center
        md:justify-start md:gap-8 mt-4 md:mt-0
        
        flex-wrap
 
        ">
          
          <li className="hover:underline hover:cursor-pointer focus:text-black active:text-gray-400 md:block select-none flex flex-col items-center md:items-start">
            About
           <p className='absolute top-1  pl-5  md:block md:non hidden   sm:hidden'>.</p>
          </li>
          <li className="hover:underline hover:cursor-pointer focus:text-black active:text-gray-400 md:block select-none   ">Works</li>
          <li className="hover:underline hover:cursor-pointer focus:text-black active:text-gray-400   select-none md:block">Clients</li>
          <li className="hover:underline hover:cursor-pointer focus:text-black active:text-gray-400 md:block select-none">Insights</li>
        </ul>
        <ul id="sub_menu" className="sm:gap-5 sm:relative  sm:-right-24 md:right-6  hover: sm:m-0 flex justify-center md:justify-end mt-4 sm:mt-4 md:mt-1">
          <li className=" hover:underline hover:cursor-pointer focus:text-black active:text-gray-400 md:block select-none text-center md:text-right">Let´s Talk</li>
        </ul>
      </nav>

      {/* Estilos aplicados cuando el checkbox no está marcado (oculta el menú en sm) */}
      <style>
      {`
          @media (max-width: 767.9px) {
            #button_menu:not(:checked) ~ #menu {
              display: none;
            }
            #button_menu:checked ~ #menu {
              display: flex;
              flex-direction: column;
              position: absolute;
             
          
            }
            #_menu{
              position:relative;
              right:-20%;
              
           }
            #button_menu{
              position:relative;
              right:-25%;
               }
          }

          @media (max-width: 639px) {
            
            #menu {
              display: flex;
              flex-direction: column;
              position:absolute;
              right: 0%;
              top:0%;

            }
            #sub_menu{
              flex-wrap: wrap; 
              gap: 10%;  
            }
            #_menu{
              position:absolute;
              top:3%;
              right:44%;
 
           }
            #button_menu{
              position:absolute;
              top:3%;
              right:44%;
               }
 
          }


        `}
      </style>
    </Box>
  );
}

export default Navbar;



//Lo mismo pero con use state
// import { Box, Checkbox } from '@chakra-ui/react';
// import { useState } from 'react';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <Box p={4} fontSize="sm" textAlign="center" w={{sm:'65%', md:'100%'}}>
//       <label htmlFor="button_menu">Funcional Mostrar menu</label>
//       <Checkbox
//         id="button_menu"
//         isChecked={isMenuOpen}
//         onChange={toggleMenu}
//       />
//       <nav
//         id="menu"
//         className={`menu flex flex-col md:flex-row md:justify-between md:m-1 ${
//           isMenuOpen ? 'block' : 'hidden'
//         }`}
//       >
//         {/* ... Tu contenido de menú aquí */}
//       </nav>
//     </Box>
//   );
// }

// export default Navbar;
 



//efecto pero solo con css
// function Navbar() {
//   return (
//     <Box p={4} fontSize="sm" textAlign="center" w={{ sm: '65%', md: '100%' }}>
//       <input type="checkbox" id="button_menu" className="hidden" />
//       <label htmlFor="button_menu" className="cursor-pointer">
//       <HamburgerIcon/> 
//       </label>
//       <nav id="menu" className="menu flex flex-col md:flex-row md:justify-between md:m-1">
//         <ul className="flex justify-center md:justify-start md:mr-6">
//           <li className="text-center md:text-left">Augusto</li>
//         </ul>
//         <ul className="flex justify-center md:justify-start md:gap-8 mt-4 md:mt-0">
//           <li className="flex flex-col items-center md:items-start">
//             About
//             <p className="mt-1">.</p>
//           </li>
//           <li className="hidden md:block">Works</li>
//           <li className="hidden md:block">Clients</li>
//           <li className="hidden md:block">Insights</li>
//         </ul>
//         <ul className="flex justify-center md:justify-end mt-4 md:mt-0">
//           <li className="text-center md:text-right">Let´s Talk</li>
//         </ul>
//       </nav>
//       {/* Estilos aplicados cuando el checkbox no está marcado */}
//       <style>
//         {`
//           #button_menu:not(:checked) ~ #menu {
//             display: none;
//           }
//         `}
//       </style>
//     </Box>
//   );
// }

// export default Navbar;