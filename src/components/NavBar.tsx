import logo from '../assets/Logo.webp'
import { HStack,Image,Text } from '@chakra-ui/react'
import SearchInput from './ui/SearchInput'

interface NavBarProps{
  onSearch : (searchText: string) => void;
}
const NavBar = ({onSearch}:NavBarProps) => {
  return (
  <>
  <HStack
  gapX={{ base: 2, md: 100 }}
  width="100%">

  <Image src={logo} height={{ base: "40px", md: "50px", lg: "60px" }} />

  <Text
    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
    fontFamily="serif"
    color="yellow.500"
    whiteSpace="nowrap"  
  >
    Game Explorer
  </Text>

  <SearchInput onSearch={onSearch}/>
</HStack>


    </>
  )
}

export default NavBar
