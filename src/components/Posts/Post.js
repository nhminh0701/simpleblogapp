import React from 'react'
import PropTypes from 'prop-types'

import { useRouteMatch, Link } from 'react-router-dom'


export function Post(props) {
        let { path, url } = useRouteMatch()
        console.log('Post ' + path + ' ' + url)

        return (
            <div>
                <Link to={`/users/${props.user.id}`}
                >{props.user.username}</Link>

                <article>
                    <h5>{props.post.title}</h5>

                    <section className="content">
                        {props.post.body}
                    </section>
                </article>

                <Link 
                    to={`/posts/${props.post.id}`}
                >Read more</Link>

                <div>{props.comments.length} comments</div>
            </div>
        )
}

Post.prototypes = {
    post: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired
}