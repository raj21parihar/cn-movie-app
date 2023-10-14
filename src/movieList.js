import { Component } from 'react';
import MovieCard from './movieCard';

export default class MovieList extends Component {
    render() {
        const { movies, addStars, removeStars, toggleCart, toggleFev } =
            this.props;
        return (
            <>
                {movies.map((movie) => (
                    <MovieCard movie={movie}
                    addStars={addStars}
                    removeStars={removeStars}
                    toggleCart={toggleCart}
                    toggleFev={toggleFev}
                     />
                ))}
            </>
        );
    }
}
