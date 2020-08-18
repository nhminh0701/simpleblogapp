import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux' 

import { Post } from '../Posts/Post'


export class UserPosts extends Component {
    constructor(props) {
        super(props)
        this.getStateFromProps = this.getStateFromProps.bind(this)
        this.state = 
            this.isFetching(props) ?
            {
                posts: []
            } : this.getStateFromProps()
        this.getRenderedComponents = this.getRenderedComponents.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (this.isFetching(prevProps) && !this.isFetching(this.props)) {
            this.setState(this.getStateFromProps())
        }
    }

    isFetching(props) {
        return props.users.fetching || props.posts.fetching || props.comments.fetching
    }

    getStateFromProps() {
        return {
            posts: this.props.posts.posts.filter(val=>val.userId===this.props.user.id)
        }
    }

    getRenderedComponents() {
        if (this.isFetching(this.props)) return

        if (this.props.user) {
            if (this.state.posts) {
                let renderedPosts = []
                for (let i = 0; i < this.state.posts.length; i++) {
                    renderedPosts.push(
                        <Post 
                            key={i}
                            post={this.state.posts[i]}
                            comments={this.props.comments.comments.filter(val=>val.postId===this.state.posts[i].id)}
                            user={this.props.user}
                            />
                    )
                }

                return renderedPosts
            } else {
                return <p>This user haven't started any post</p>
            }
        } else {
            return (
                <p>No Post Found</p>
            )
        }
    }

    render() {
        return (
            <div>
                {this.getRenderedComponents()}
            </div>
        )
    }
}


UserPosts.prototypes = {
    users: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}


const mapPropsWithState = (state) => {
    return {
        users: state.users,
        posts: state.posts,
        comments: state.comments
    }
}

export default connect(mapPropsWithState, null)(UserPosts)