import React from 'react';
import { connect } from 'react-redux';
import { deleteFavorite } from '../actions/favoriteActions';

import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    
    const handleDeleteFavorite = e => {
        props.deleteFavorite(e.target.value)
    }
    
    // props.displayFavorites ? 
    if (props.displayFavorites) {
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><button class="material-icons" value={movie.id} onClick={handleDeleteFavorite}>remove_circle</button></span>
                    </Link> 
                </div>
            })
        }
    </div>)}
    return null;
}

const mapStateToProps = (state) =>{
    return {
        favorites: state.favoritesReducer.favorites,
        displayFavorites: state.favoritesReducer.displayFavorites
    }
}

export default connect(mapStateToProps, { deleteFavorite })(FavoriteMovieList);