import React from 'react'
import {
    Switch,
    Route,
} from 'react-router-dom'
import PostList from './PostList'
import PostDetail from './PostDetail'


export default function Posts() {
    return (
        <Switch>
            <Route
                exact
                path={`/posts/:postId`}
                component={PostDetail}
            />
            <Route exact path='/' component={PostList} />
        </Switch>
    )
}