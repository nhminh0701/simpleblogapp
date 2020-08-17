export const REQUEST_POSTS = 'REQUEST POSTS'
export const RECEIVE_POSTS = 'RECEIVE POSTS'


const requestPosts = () => {
    return {
        type: REQUEST_POSTS,
        payload: {
            fetching: true
        }
    }
};

const receivePosts = (posts) => {
    return {
        type: RECEIVE_POSTS,
        payload: {
            posts: posts,
            fetching: false
        }
    }
};

export const requestPostData = () => (dispatch) => {
    dispatch(requestPosts())
    return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => dispatch(receivePosts(data)))
}