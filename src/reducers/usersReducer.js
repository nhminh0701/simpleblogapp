import { 
    REQUEST_USERS,
    RECEIVE_USERS,
} from '../actions/usersAction'

export const uersReducer = (state = { 
    users: [],
    fetching: false, 
}, action) => {
    switch (action.type) {
        case REQUEST_USERS:
            return {
                ...state,
                fetching: action.payload.fetching
            };
        case RECEIVE_USERS:
            return action.payload
        default:
            return state;
    }
}