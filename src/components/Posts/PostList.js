import React, { Component } from 'react'
import { Post } from './Post'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

const POST_PER_LOAD = 5

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postsAmount: POST_PER_LOAD
        }
        this.onClickLoadMorePost = this.onClickLoadMorePost.bind(this)
        this.isStillFetching = this.isStillFetching.bind(this)
    }

    componentDidMount() {
        this.setState({
            postsAmount: POST_PER_LOAD
        })
    }

    getPosts(postsAmount) {
        let renderPosts = []
        for (let i = 1; i <= postsAmount; i++) {
            if (i > this.props.posts.posts.length) {
                return;
            }

            let post = this.props.posts.posts.find(val => val.id === i)
            let user = this.props.users.users.find(val => val.id === post.userId)
            let comments = this.props.comments.comments.filter(val => val.postId === post.id)

            renderPosts.push(
                <li key={i}>
                    <Post 
                        post={post} 
                        user={user}
                        comments={comments}
                    />
                </li>
            )
        }
        return renderPosts
    }

    onClickLoadMorePost() {
        this.setState({
            postsAmount: this.state.postsAmount + POST_PER_LOAD
        })
    }

    isStillFetching() {
        return this.props.users.fetching     
                || this.props.comments.fetching
                || this.props.posts.fetching
    }

    render() {
        return (
            <div className='posts-container'>
                {
                    this.isStillFetching() 
                    ?   <p>Loading</p> 
                    :   <div className='post-list'>
                             <ul>
                                {this.getPosts(this.state.postsAmount)}
                            </ul>
                            <button onClick={this.onClickLoadMorePost}>Load More Post</button>
                        </div>   
                   
                }
            </div>
        )
    }
}

Posts.prototypes = {
    posts: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
}

const mapStateWithProps = (state) => {
    return {
        posts: state.posts,
        users: state.users,
        comments: state.comments,
    }
}

export default connect(mapStateWithProps, null)(Posts)