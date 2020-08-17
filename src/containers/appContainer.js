import App from '../App'
import { connect } from 'react-redux'

import { requestAlbumsData } from '../actions/albumsAction'
import { requestCommentData } from '../actions/commentsAction'
import { requestPhotoData } from '../actions/photosAction'
import { requestPostData } from '../actions/postsAction'
import { requestUserData } from '../actions/usersAction'

const mapStateToProps = (state) => {
    return {
      state: state
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      requestalbums: () => dispatch(requestAlbumsData()),
      requestComments: () => dispatch(requestCommentData()),
      requestPhotos: () => dispatch(requestPhotoData()),
      requestPosts: () => dispatch(requestPostData()),
      requestUsers: () => dispatch(requestUserData())
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(App)