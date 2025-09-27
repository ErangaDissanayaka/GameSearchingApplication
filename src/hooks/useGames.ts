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


const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", {
    params: { genres: selectedGenre?.id }
  }, [selectedGenre?.id]);
 

export default useGames;
