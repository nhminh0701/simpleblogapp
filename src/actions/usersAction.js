export const SET_USERS = 'SET USERS'

export const sethUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users
    }
}