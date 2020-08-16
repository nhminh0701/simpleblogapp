export const SET_PHOTOS = 'SET PHOTOS'

export const setPhotos = (photos) => {
    return {
        type: SET_PHOTOS,
        payload: photos
    }
}