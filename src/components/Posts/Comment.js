import React from 'react'


export function Comment(props) {
    return (
        <li className="comment">
            <h5>{props.comment.email}</h5>
            <p>{props.comment.body}</p>
        </li>
    )
}