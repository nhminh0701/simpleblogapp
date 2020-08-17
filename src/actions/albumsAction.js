export const REQUEST_ALBUMS = 'REQUEST ALBUMS'
export const RECEIVE_ALBUMS = 'RECEIVE ALBUMS'

const requestAlbums = () => {
    return {
        type: REQUEST_ALBUMS,
        payload: {
            fetching: true
        }
    }
}


const receiveAlbums = (albums) => {
    return {
        type: RECEIVE_ALBUMS,
        payload: {
            fetching: false,
            albums: albums
        }
    }
}




export const requestAlbumsData = () => (dispatch) => {
    dispatch(requestAlbums())
    return fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then((data) => dispatch(receiveAlbums(data)))
}