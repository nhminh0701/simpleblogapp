export const REQUEST_PHOTOS = 'REQUEST PHOTOS'
export const RECEIVE_PHOTOS = 'RECEIVE PHOTOS'

const requestPhotos = () => {
    return {
        type: REQUEST_PHOTOS,
        payload: {
            fetching: true
        }
    }
}

const receivePhotos = (photos) => {
    return {
        type: RECEIVE_PHOTOS,
        payload: {
            fetching: false,
            photos: photos
        }
    }
}

export const requestPhotoData = () => (dispatch) => {
    dispatch(requestPhotos())
    return fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => dispatch(receivePhotos(data)))
}