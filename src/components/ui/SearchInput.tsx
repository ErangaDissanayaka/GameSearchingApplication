import { Input } from '@chakra-ui/react'

const SearchInput = () => {
  return (
    <Input display={{ base: "none", md: "flex" }} width={"40%"} border={"2"}  borderColor={"white"} borderRadius={20} variant={"outline"} placeholder='Search Games...' />
  )
}

export default SearchInput
