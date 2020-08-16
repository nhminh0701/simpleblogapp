export const SET_POSTS = 'SET POSTS'


export const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        payload: posts
    }
};