import { SET_POSTS } from '../actions/postsAction'

export const postsReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case SET_POSTS:
            return action.payload;
        default:
            return state;
    }
}