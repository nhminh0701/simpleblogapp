export const REQUEST_COMMENTS = 'REQUEST COMMENTS'
export const RECEIVE_COMMENTS = 'RECEIVE COMMENTS'


const requestComments = () => {
    return {
        type: REQUEST_COMMENTS,
        payload: {
            fetching: true
        }
    }
}

const receiveComments = (comments) => {
    return {
        type: RECEIVE_COMMENTS,
        payload: {
            fetching: false,
            comments: comments
        }
    }
}

export const requestCommentData = () => (dispatch) => {
    dispatch(requestComments())
    return fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => dispatch(receiveComments(data)))
}