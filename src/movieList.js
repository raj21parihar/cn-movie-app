import MovieCard from './movieCard';

export default function MovieList(props) {
    const { movies, addStars, removeStars, toggleCart, toggleFev } = props;
    return (
        <>
            {movies.map((movie) => (
                <MovieCard
                    movie={movie}
                    addStars={addStars}
                    removeStars={removeStars}
                    toggleCart={toggleCart}
                    toggleFev={toggleFev}
                />
            ))}
        </>
    );
}
