import React, { Component } from 'react'
import { getMovies, getFavorite, addFavorite } from '../app.utils';
import { Link } from 'react-router-dom';

export default class MoviePage extends Component {
    state = {
        movies: [],
        movieSearch: '',
        favorites: []
    }
    componentDidMount = async () => {
        if (this.props.token) await this.favoritesFetch();
    }

    favoritesFetch = async () => {
        const favorites = await getFavorite(this.props.token);
        this.setState({ favorites })
    }
    getFlicks = async () => {
        const movies = await getMovies(this.state.movieSearch);
        this.setState({ movies: movies });
    }
    handleSearchChange = e => { this.setState({ movieSearch: e.target.value }) };
    handleSearchSubmit = async e => {
        e.preventDefault();
        await this.getFlicks();
    }
    handleFavoriteClick = async (booger) => {
        await addFavorite({
            title: booger.title,
            vote_average: booger.vote_average,
            release_date: booger.release_date,
            overview: booger.overview,
            poster_path: booger.poster_path,
            db_id: booger.id
        }, this.props.token);

        await this.favoritesFetch();
    }
    isAFavorite = (movie) => {
        if (!this.props.token) return true;
        const findAFave = this.state.favorites.find(favorite => favorite.db_id === movie.id);
        return Boolean(findAFave);
    }

    render() {
        console.log('favorites:', this.state.favorites);
        console.log(this.state.movies);

        return (
            <div>
                SEARCH MOVIES!
                <form onSubmit={this.handleSearchSubmit}>
                    <label>
                        <input value={this.state.movieSearch} onChange={this.handleSearchChange} />
                    </label>
                    <button>Lets go!</button>
                </form>
                <div className="movies-div">
                    {
                        this.state.movies.map((movie, i) =>
                            <Link to={`movies/${movie.id}`}>
                                <div key={`${movie.title}-${i}`} className="movie">
                                    <h3>{movie.title}</h3>
                                    <p>User Score: {movie.vote_average}</p>
                                    <p>{
                                        this.isAFavorite(movie)
                                            ? 'A FAVE!'
                                            :
                                            <button onClick={() => this.handleFavoriteClick(movie)}>Add To Favorites</button>}
                                    </p>
                                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                                </div>
                            </Link>)
                    }
                </div>


            </div >
        )
    }
}
