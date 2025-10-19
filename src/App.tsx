import { Box, Grid, GridItem, useBreakpointValue, } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import type { Genre } from "./hooks/UseGenre"
import { useState } from "react"
import PlatformSelector from "./components/ui/PlatformSelector"
import type { Platform } from "./hooks/usePlatforms"
import SearchInput from "./components/ui/SearchInput"

export interface GameQuery{
  genre: Genre | null
  platform: Platform | null
}
const App = () => {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const showAside = useBreakpointValue({ base: false, lg: true })

  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`
      }}>

        <GridItem 
          alignItems={"center"}
          area={"nav"} 
          position="sticky" 
          top={0} 
          zIndex={1} 
          bg={"black"}
          >
          <NavBar />
          
        </GridItem>

        {showAside && (
          <GridItem
            area={"aside"}
            paddingX={5}
            position={"sticky"}
            top={0}
            height={"85vh"}
            overflowY={"auto"}
            css={{ "&::-webkit-scrollbar": { display: "none" },
            msOverflowStyle: "none",
            scrollbarWidth: "none"
          }}>
            <GenreList
              onSelectedGenre={(genre: Genre) => setGameQuery({ ...GameQuery, genre })}
              selectedGenre={GameQuery.genre}
            />
          </GridItem>
        )}

        <GridItem area={"main"} paddingY={5} >

          <PlatformSelector  
          selectedPlatform ={GameQuery.platform}
          onSelectedPlatform={(platform)=> setGameQuery({ ...GameQuery, platform })}/>
          <GameGrid gameQuery={GameQuery}/>
        </GridItem>

        <GridItem area={"footer"} bg={"brown"} w={"full"}>
          <Box w={"full"} textAlign={"center"} p={4}>Footer</Box>
        </GridItem>
          
      </Grid>
    </>

  )
}

export default App
