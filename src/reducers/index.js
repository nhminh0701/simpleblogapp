import { combineReducers } from 'redux'
import { albumsReducer } from './albumsReducer'
import { commentsReducer } from './commentsReducer'
import { photosReducer } from './photosReducer'
import { postsReducer } from './postsReducer'
import { uersReducer } from './usersReducer'


export default combineReducers({
    albumsReducer,
    commentsReducer,
    photosReducer,
    postsReducer,
    uersReducer
})