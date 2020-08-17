import { 
    REQUEST_ALBUMS,
    RECEIVE_ALBUMS
 } from '../actions/albumsAction'

export const albumsReducer = (state = { 
    albums: [], 
    fetching: false
}, action) => {
    switch (action.type) {
        case REQUEST_ALBUMS:
            return {
                ...state,
                fetching: action.payload.fetching
            };
        case RECEIVE_ALBUMS:
            return action.payload
        default:
            return state;
    }
}