import React from 'react'
import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom'
import PostList from './PostList'
import PostDetail from './PostDetail'


export default function Posts() {
    let { path, url } = useRouteMatch()
    console.log(path + ' ' + url)

    return (
        <Switch>
            <Route
                exact
                path={`${path}/post/:postId`}
                component={PostDetail}
            />
            <Route exact path='' component={PostList} />
        </Switch>
    )
}