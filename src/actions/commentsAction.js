export const SET_COMMENTS = 'SET COMMENTS'

export const setComments = (comments) => {
    return {
        type: SET_COMMENTS,
        payload: comments
    }
}