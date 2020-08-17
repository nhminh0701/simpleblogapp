import { 
    REQUEST_PHOTOS,
    RECEIVE_PHOTOS
 } from '../actions/photosAction'

export const photosReducer = (state = { 
    photos: [],
    fetching: false, 
}, action) => {
    switch (action.type) {
        case REQUEST_PHOTOS:
            return {
                ...state,
                fetching: action.payload.fetching
            };
        case RECEIVE_PHOTOS:
            return action.payload
        default:
            return state;
    }
}