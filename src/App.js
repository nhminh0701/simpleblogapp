import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchBox from './components/SearchBox'
import ConnectedPosts from './components/Posts'
import ConnectedUser from './components/UserProfile'

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
        
        <Router>
          <SearchBox />
          <Switch>
            <Route path='/users/:userId' component={ConnectedUser} />
            <Route path='' component={ConnectedPosts} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
