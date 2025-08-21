import { Grid, GridItem, useBreakpointValue, } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
const App = () => {
  const showAside = useBreakpointValue({ base: false, lg: true })

  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`
      }}>

        <GridItem area={"nav"}><NavBar /></GridItem>

        {showAside && (
          <GridItem area={"aside"} >Aside</GridItem>
        )}
       
        <GridItem area={"main"} ><GameGrid/></GridItem>

        <GridItem area={"footer"} >Footer</GridItem>

      </Grid>
    </>

  )
}

export default App
