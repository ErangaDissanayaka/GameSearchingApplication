import { Button, HStack, Image, Spinner } from "@chakra-ui/react";
import { List, ListItem } from "@chakra-ui/react";
import type { Genre } from "../hooks/UseGenre";
import getOptimizedUrl from "../Services/image-url";
import useGenres from "../hooks/UseGenre";

interface GenreListProps {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null; 
}

const GenreList = ({ onSelectedGenre, selectedGenre }: GenreListProps) => {
  const { data, loading, errors } = useGenres();

  if (loading) return <Spinner />;
  if (errors) return null;

  return (
    <List.Root spaceY={5} padding={2}>
      {data.flat().map((genre: Genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              boxSize="40px"
              borderRadius={10}
              src={getOptimizedUrl(genre.image_background)}
              alt={genre.name}
              objectFit="cover"
            />
            <Button
              variant={selectedGenre?.id === genre.id ? "solid" : "ghost"}
              fontSize="lg"
              fontWeight="bold"
              onClick={() => onSelectedGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
