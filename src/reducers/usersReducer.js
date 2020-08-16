import { SET_USERS } from '../actions/usersAction'

export const uersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case SET_USERS:
            return action.payload;
        default:
            return state;
    }
}