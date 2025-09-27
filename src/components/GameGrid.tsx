import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import type { Genre } from "../hooks/UseGenre";

interface GameGridProps {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: GameGridProps) => {
  const { data, errors, loading } = useGames(selectedGenre);
  const skeleton =[1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <>
      {errors && <p>{errors}</p>}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} padding={10} gap={6}>
        {loading && skeleton.map((skeleton) => (
          <GameCardSkeleton key={skeleton} />
        ))}
        {data.flat().map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>

    </>

  );
}

export default GameGrid
