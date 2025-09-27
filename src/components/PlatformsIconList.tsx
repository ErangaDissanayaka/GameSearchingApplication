import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { HStack, Icon } from '@chakra-ui/react';
import type { Platform } from '../hooks/useGames'
import type { IconType } from 'react-icons';

interface PlatformsIconListProps {
    platforms: Platform[]
}
const PlatformsIconList = ({ platforms }: PlatformsIconListProps) => {
    const iconsMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        apple: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        web: BsGlobe,
    };

    return (
        <>
            <HStack gap={2}>
                {platforms.map((platform) => {
                    const PlatformIcon = iconsMap[platform.slug];
                    return PlatformIcon ? (
                        <Icon key={platform.id} as={PlatformIcon} />
                    ) : null;
                })}
            </HStack>

        </>
    )
}

export default PlatformsIconList
