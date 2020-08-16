import App from '../App'
import { connect } from 'react-redux'

import { setAlbums } from '../actions/albumsAction'
import { setComments } from '../actions/commentsAction'
import { setPhotos } from '../actions/photosAction'
import { setPosts } from '../actions/postsAction'
import { sethUsers } from '../actions/usersAction'

const mapStateToProps = (state) => {
    return {
      albums: state.albums,
      comments: state.comments,
      photos: state.photos,
      posts: state.posts,
      users: state.users
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setAlbums: (albums) => {dispatch(setAlbums(albums))},
      setComments: (comments) => {dispatch(setComments(comments))},
      setPhotos: (photos) => {dispatch(setPhotos(photos))},
      setPosts: (posts) => {dispatch(setPosts(posts))},
      sethUsers: (users) => {dispatch(sethUsers(users))}
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(App)