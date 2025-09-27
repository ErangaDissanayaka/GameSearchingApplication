import logo from '../assets/Logo.webp'
import { HStack,Image,Text } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <>
      <HStack>
        <Image src={logo} height={{ base: "40px", md: "50px", lg: "60px" }} />
       
        <Text fontSize="5xl" color="yellow.500">Game Explorer</Text>
      </HStack>
      
      
    </>
  )
}

export default NavBar
