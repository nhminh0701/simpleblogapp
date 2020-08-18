import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'


export function Post(props) {

        return (
            <div>
                <Link to={`/users/${props.user.id}`} >{props.user.username}</Link>
                <article>
                    <Link to={`/posts/${props.post.id}`}>
                        <h5>{props.post.title}</h5></Link>
                    <section className="content">
                        {props.post.body}
                    </section>
                </article>

                <div>{props.comments.length} comments</div>
            </div>
        )
}

Post.prototypes = {
    post: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired
}