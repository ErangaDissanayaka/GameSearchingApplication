import useData from "./Data";

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


const useGames = () => useData<Game[]>("/games");
 

export default useGames;
