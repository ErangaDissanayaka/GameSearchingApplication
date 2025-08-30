import { Card, HStack, Image, Text } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformsIconList from "./PlatformsIconList";
import CriticScore from "./CriticScore";

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
          <HStack justifyContent={"space-between"}>
            <PlatformsIconList platforms={game.platforms.map(p => p.platform)} />
            <CriticScore score={game.metacritic} />
          </HStack>
        </Card.Body>
      </Card.Root>
    </>
  )
}

export default GameCard
