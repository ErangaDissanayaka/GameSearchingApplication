import useData from "../hooks/Data";
import type { Genre } from "../hooks/UseGenre";

const GenreList = () => {
    const { data } = useData<Genre>("/genres");
    return (
        <ul>
            {
                data.map((genre)=>(
                    <li key={genre.id}>{genre.name}</li>
                ))
            }
        </ul> 
    );
}

export default GenreList; 
