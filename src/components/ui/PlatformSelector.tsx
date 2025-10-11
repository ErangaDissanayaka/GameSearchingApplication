import {Button, MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@chakra-ui/react'
import usePlatforms from '../../hooks/usePlatforms'

const PlatformSelector = () => {

    const {data , errors} = usePlatforms();
    if(errors) return null; 
  return (
    <MenuRoot>
        <MenuTrigger asChild>
            <Button variant={'outline'} size={'lg'}>
                Platform Selector
            </Button>
        </MenuTrigger>

        <MenuContent width={'20%'} overflow={'auto'} position={'absolute'} zIndex={8}>
          {data.map((platform) => (
            <MenuItem value={platform.name}>{platform.name}</MenuItem>
          ))
          }
        </MenuContent>
    </MenuRoot>
  )
}

export default PlatformSelector
