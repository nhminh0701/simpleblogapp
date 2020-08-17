import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SearchBox from './components/SearchBox'
//import ConnectedPosts from './components/Posts'
import PostList from './components/Posts/PostList'
import PostDetail from './components/Posts/PostDetail'
import './App.css';

class App extends Component {
  componentDidMount() {
    if (this.props.state.posts.posts.length === 0) {
      this.props.requestPosts();
    }
    if (this.props.state.users.users.length === 0) {
      this.props.requestUsers();
    }
    if (this.props.state.albums.albums.length === 0) {
      this.props.requestalbums();
    }
    if (this.props.state.comments.comments.length === 0) {
      this.props.requestComments();
    }
    if (this.props.state.photos.photos.length === 0) {
      this.props.requestPhotos();
    }
  }
  
  render() {

    return (
      <div className="App">
        <SearchBox />
  
        <Router>
          <Route exact path='/post/:postId' component={PostDetail} />
          <Route exact path='/' component={PostList} />
        </Router>
      </div>
    );
  }
}

export default App;
