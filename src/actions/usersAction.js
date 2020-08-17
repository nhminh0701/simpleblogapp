export const REQUEST_USERS = 'REQUEST USERS'
export const RECEIVE_USERS = 'RECEIVE USERS'


const requestUsers = () => {
    return {
        type: REQUEST_USERS,
        payload: {
            fetching: true,
        }
    }
}

const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        payload: {
            fetching: false,
            users: users
        }
    }
}


export const requestUserData = () => (dispatch) => {
    dispatch(requestUsers())
    return fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => dispatch(receiveUsers(data)))
}