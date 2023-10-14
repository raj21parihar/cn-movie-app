import { Component } from 'react';
import MovieList from './movieList';
import Navbar from './navbar';
import { moviesData } from './moviesData';

import './index.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: moviesData,
            cartCount: 0
        };
    }

    addStars = (movie) => {
        let { movies } = this.state;
        const idx = movies.indexOf(movie);
        if (movies[idx].Stars >= 5) {
            return;
        }
        movies[idx].Stars += 0.5;
        this.setState({
            movies: movies,
        });
    };

    removeStars = (movie) => {
        let { movies } = this.state;
        const idx = movies.indexOf(movie);
        if (movies[idx].Stars <= 0) {
            return;
        }
        movies[idx].Stars -= 0.5;
        this.setState({
            movies: movies,
        });
    };

    toggleFev = (movie) => {
        let { movies } = this.state;
        const idx = movies.indexOf(movie);
        movies[idx].Fev = !movies[idx].Fev;
        this.setState({
            movies: movies,
        });
    };

    toggleCart = (movie) => {
        let { movies, cartCount } = this.state;
        const idx = movies.indexOf(movie);
        movies[idx].Cart = !movies[idx].Cart;
        if(movies[idx].Cart){
            cartCount++;
        } else{
            cartCount--;
        }
        this.setState({
            movies: movies,
            cartCount: cartCount
        });
    };

    render() {
        const {movies, cartCount} = this.state;
        return (
            <>
                <Navbar cartCount={cartCount}/>
                <MovieList
                    movies={movies}
                    addStars={this.addStars}
                    removeStars={this.removeStars}
                    toggleCart={this.toggleCart}
                    toggleFev={this.toggleFev}
                />
            </>
        );
    }
}

export default App;
