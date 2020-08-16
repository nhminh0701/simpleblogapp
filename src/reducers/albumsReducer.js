import { SET_ALBUMS } from '../actions/albumsAction'

export const albumsReducer = (state = { albums: [] }, action) => {
    switch (action.type) {
        case SET_ALBUMS:
            return action.payload;
        default:
            return state;
    }
}