import React, { Component } from 'react';
import { getFavorite } from '../app.utils.js';
import { Link } from 'react-router-dom';

export default class FavoritesPage extends Component {
    state = {
        favorites: [],

    }
    componentDidMount = async () => {
        if (this.props.token) await this.favoritesFetch();
    }
    favoritesFetch = async () => {
        const favorites = await getFavorite(this.props.token);
        this.setState({ favorites })
    }
    render() {
        console.log('FAVES', this.state.favorites)
        return (
            <div className="movies-div">
                {
                    this.state.favorites.map(favorite =>
                        <Link to={`movies/${favorite.db_id}`}>
                            <div className="movie" key={favorite.id}>
                                <h3>{favorite.title}</h3>
                                <img src={`https://image.tmdb.org/t/p/original${favorite.poster_path}`} alt={favorite.title} />
                            </div>
                        </Link>)

                }

            </div>
        )
    }
}
