import { Card, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";

interface GamecardProp{
    game:Game;
}
const GameCard = ({ game }: GamecardProp) => {
  return (
    <>
      <Card.Root borderRadius={"2xl"} overflow={"hidden"}>
        <Image src={game.background_image} />
        <Card.Body>
          <Card.Title>{game.name}</Card.Title>
        </Card.Body>
      </Card.Root>
    </>
  )
}

export default GameCard
