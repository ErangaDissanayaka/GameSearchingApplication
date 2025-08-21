import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, errors } = useGames();
  return (
    <>
      {errors && <p>{errors}</p>}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} padding={10} gap={6}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>

    </>

  );
}

export default GameGrid
