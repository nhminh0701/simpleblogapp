import { SET_PHOTOS } from '../actions/photosAction'

export const photosReducer = (state = { photos: [] }, action) => {
    switch (action.type) {
        case SET_PHOTOS:
            return action.payload;
        default:
            return state;
    }
}