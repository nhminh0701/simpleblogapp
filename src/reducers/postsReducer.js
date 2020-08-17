import { 
    REQUEST_POSTS,
    RECEIVE_POSTS
 } from '../actions/postsAction'

export const postsReducer = (state = { 
    posts: [],
    fetching: false 
}, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                fetching: action.payload.fetching
            };
        case RECEIVE_POSTS:
            return action.payload;
        default:
            return state;
    }
}