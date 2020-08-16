import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SearchBox from './components/SearchBox'
import Posts from './components/Posts'
import './App.css';

class App extends Component {

  
  render() {
    console.log(this.props);

    return (
      <div className="App">
        <SearchBox />
  
        <Router>
          <Route exact path='/' component={Posts} />
        </Router>
      </div>
    );
  }
}

export default App;
