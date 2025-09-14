import { HStack, Image, ListItem, ListRoot, Spinner, Text } from "@chakra-ui/react";
import type { Genre } from "../hooks/UseGenre";
import getOptimizedUrl from "../Services/image-url";
import useGenres from "../hooks/UseGenre";

const GenreList = () => {
    const { data, loading, errors } = useGenres();
    if (loading) return <Spinner />;
    if (errors) return null;
    return (
        <ListRoot>
            {
                (Array.isArray(data) ? data.flat() : []).map((genre: Genre) => (
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
