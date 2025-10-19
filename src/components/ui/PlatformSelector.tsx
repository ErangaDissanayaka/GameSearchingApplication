import {Button, MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@chakra-ui/react'
import usePlatforms from '../../hooks/usePlatforms'
import type { Platform } from '../../hooks/usePlatforms';

interface PlatformSelectorProps{
  onSelectedPlatform : (platfrm:Platform) => void
  selectedPlatform : Platform | null
}
const PlatformSelector = ({onSelectedPlatform, selectedPlatform }: PlatformSelectorProps) => {

    const {data , errors} = usePlatforms();
    if(errors) return null; 
  return (
    <MenuRoot>
        <MenuTrigger asChild width={{base:"100%", md:"20%"}} >
            <Button variant={'outline'} size={'lg'}>
                {selectedPlatform ? selectedPlatform.name : "Select platform"}
            </Button>
        </MenuTrigger>

        <MenuContent width={'20%'} overflow={'auto'} position={'absolute'} zIndex={8}>
          {data.map((platform) => (
            <MenuItem onClick={()=> onSelectedPlatform(platform)} value={platform.name}>{platform.name}</MenuItem>
          ))
          }
        </MenuContent>
    </MenuRoot>
  )
}

export default PlatformSelector
