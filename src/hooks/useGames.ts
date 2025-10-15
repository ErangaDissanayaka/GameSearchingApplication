import type { GameQuery } from "../App";
import useData from "./Data";
import type { Genre } from "./UseGenre";

export interface Platform{
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  platforms: { platform: Platform }[];
}


const useGames = (gameQuery: GameQuery) =>
  useData<Game>("/games", {
    params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id }
  }, [gameQuery]);


export default useGames;
