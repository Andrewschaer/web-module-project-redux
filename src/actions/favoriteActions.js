export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const TOGGLE_SHOW_FAVORITES = 'TOGGLE_SHOW_FAVORITES';

export const deleteFavorite = (id)=>{
    return({type: DELETE_FAVORITE, payload:id});
}

export const addFavorite = (favMovie)=>{
    return({type: ADD_FAVORITE, payload:favMovie})
}

export const toggleShowFavorites = ()=>{
    return({type: TOGGLE_SHOW_FAVORITES})
}