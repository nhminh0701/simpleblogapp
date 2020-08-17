import { 
    REQUEST_COMMENTS,
    RECEIVE_COMMENTS
 } from '../actions/commentsAction'

export const commentsReducer = (state = { 
    comments: [],
    fetching: false, 
}, action) => {
    switch (action.type) {
        case REQUEST_COMMENTS:
            return {
                ...state,
                fetching: action.payload.fetching
            };
        case RECEIVE_COMMENTS:
            return action.payload;
        default:
            return state;
    }
}