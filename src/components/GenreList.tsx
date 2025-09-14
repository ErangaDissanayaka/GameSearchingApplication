import { HStack, Image, ListItem, ListRoot, Text } from "@chakra-ui/react";
import useData from "../hooks/Data";
import type { Genre } from "../hooks/UseGenre";
import getOptimizedUrl from "../Services/image-url";

const GenreList = () => {
    const { data } = useData<Genre>("/genres");
    return (
        <ListRoot>
            {
                data.map((genre)=>(
                   <ListItem key={genre.id} padding={4}>
                    <HStack>
                       <Image boxSize="40px" borderRadius={10} src={getOptimizedUrl(genre.image_background)} alt={genre.name} />
                       <Text fontSize={"lg"} fontWeight={"bold"}>{genre.name}</Text>
                    </HStack>
                   </ListItem>
                ))
            }
        </ListRoot>
    );
}

export default GenreList; 
