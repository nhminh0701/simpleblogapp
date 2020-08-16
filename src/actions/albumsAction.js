export const SET_ALBUMS = 'SET ALBUMS'

export const setAlbums = (albums) => {
    return {
        type: SET_ALBUMS,
        payload: albums
    }
}