import { SET_COMMENTS } from '../actions/commentsAction'

export const commentsReducer = (state = { comments: [] }, action) => {
    switch (action.type) {
        case SET_COMMENTS:
            return action.payload;
        default:
            return state;
    }
}