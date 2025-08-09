import { Grid, GridItem, useBreakpointValue, } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
const App = () => {
  const showAside = useBreakpointValue({ base: false, lg: true })

  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`
      }}>

        <GridItem area={"nav"} bg={"blue.500"}><NavBar /></GridItem>

        {showAside && (
          <GridItem area={"aside"} bg={"yellow"}>Aside</GridItem>
        )}
       
        <GridItem area={"main"} bg={"whiteAlpha.700"}>Main Content</GridItem>

        <GridItem area={"footer"} bg={"red.400"}>Footer</GridItem>

      </Grid>
    </>

  )
}

export default App
