import useGenres from "../hooks/UseGenre"

const GenreList = () => {
    const { genre, errors, loading } = useGenres();
    return (
        <ul>
            {
                genre.map((genre)=>(
                    <li key={genre.id}>{genre.name}</li>
                ))
            }
        </ul>
    );
}

export default GenreList; 
