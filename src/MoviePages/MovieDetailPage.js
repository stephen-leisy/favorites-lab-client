import React, { Component } from 'react';
import { getMovieById } from '../app.utils.js';

export default class MovieDetailPage extends Component {
    state = {
        movieData: {},
    }

    componentDidMount = async () => {
        await this.movieFetch();
    }

    movieFetch = async () => {
        const movie = await getMovieById(this.props.match.params.movie);
        this.setState({ movieData: movie });
    }

    render() {
        console.log(this.props.match.params.movie)
        console.log('new movie', this.state.movieData);
        return (

            < div >
                {

                    <div className="movie-detail">
                        <h3>{this.state.movieData.title}</h3>
                        <p>User Score: {this.state.movieData.vote_average} Release Date: {this.state.movieData.release_date}</p>
                        <img src={`https://image.tmdb.org/t/p/original${this.state.movieData.poster_path}`} alt={this.state.movieData.title} />
                        <p>{this.state.movieData.overview}</p>
                    </div>
                }
            </div >
        )
    }
}
