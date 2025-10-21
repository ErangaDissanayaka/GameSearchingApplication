import { Input } from '@chakra-ui/react'
import { useRef } from 'react'

interface SearchInputProps{
  onSearch : (searchText: string) => void;
}
const SearchInput = ({ onSearch }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form 
      style={{width: "full", display: "flex", justifyContent: "flex-end"}} 
      onSubmit={(e) =>{ 
        e.preventDefault()
        if (inputRef.current) onSearch(inputRef.current.value)
      }}
    >
      <Input 
        ref={inputRef}
        display={{ base: "none", md: "flex" }} 
        width={"350px"} border={"2"}  
        borderColor={"white"} 
        borderRadius={20} 
        variant={"outline"} 
        placeholder='Search Games...'
      />
    </form>
  )
}

export default SearchInput
