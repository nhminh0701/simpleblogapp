import React, { Component } from 'react'
import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Comment } from './Comment'
import { Link } from 'react-router-dom'


function PostDetailContainer(props) {
    let { postId } = useParams()
    return (
        <PostDetail 
            postId={parseInt(postId)}
            users={props.users}
            comments={props.comments}
            posts={props.posts}
        />
    )
}

class PostDetail extends Component {
    constructor(props) {
        super(props) 
        this.getStateFromProps = this.getStateFromProps.bind(this)

        this.state = 
            this.isFetching(props) ?
            {
                post: {},
                user: {},
                comments: [],
                found: true,
            }   : 
            this.getStateFromProps(props)

        this.getComments = this.getComments.bind(this)
        this.getMainContent = this.getMainContent.bind(this)
    }

    getStateFromProps() {
        let post = this.props.posts.posts.find(val => val.id === this.props.postId)

        if (!post) {
            
            return {
                post: {},
                user: {},
                comments: [],
                found: false,
            }
        } 

        let user = this.props.users.users.find(val => val.id === post.userId)
        let comments = this.props.comments.comments.filter(
            val => val.postId === this.props.postId)
                
        return {
            post: post,
            user: user,
            comments: comments,
            found: true
        }
    }

    getComments() {
        if (this.props.comments.fetching) {
            return (
                <div>Loading ...</div>
            )
        } else {
            let renderComments = []
            for (let i = 0; i < this.state.comments.length; i++) {
                renderComments.push(
                    <Comment 
                        key={i}
                        comment={this.state.comments[i]}
                    />
                )
            }
            return renderComments
        }
    }

    isFetching(props) {
        return props.users.fetching || props.comments.fetching || props.posts.fetching
    }

    componentDidUpdate(prevProps) {
        if (this.isFetching(prevProps) && !this.isFetching(this.props)) {
                
            this.setState(this.getStateFromProps())
        }
    }

    getMainContent() {
        return (
            <div className="content">
                <Link to={`/users/${this.state.user.id}`}>
                    {this.state.user.username}</Link>
                <h5>{this.state.post.title}</h5>
                <article>{this.state.post.body}</article>
            </div>
        )
    }

    render() {
        return (
            <div className="post-detail">
                {
                    this.isFetching(this.props) 
                    ?   <p>Loading</p>
                    :   this.state.found
                    ?   <section>
                            {this.getMainContent()}
                            <ul>
                                {this.getComments()}
                            </ul> 
                        </section>
                    :   <div>Error: not found post with id</div>
                }
            </div>
        )
    }
}

PostDetail.prototypes = {
    users: Proptypes.object.isRequired,
    posts: Proptypes.object.isRequired,
    comments: Proptypes.object.isRequired,
    postId: Proptypes.number.isRequired
}



const mapPropsWithState = (state) => {
    return {
        users: state.users,
        posts: state.posts,
        comments: state.comments,
    }
}

export default connect(mapPropsWithState, null)(PostDetailContainer)