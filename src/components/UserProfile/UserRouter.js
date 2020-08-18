import React from 'react'
import Proptypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import UserProfile from './UserProfile'
import UserPosts from './UserPosts'
import UserAlbums from './UserAlbums'
import UserPhotos from './UserPhotos'

export function UserRouter(props) {
    return (
        <Switch>
            <Route 
                exact path={`${props.path}/`} 
                render={(_props) => <UserProfile {..._props} user={props.user} />} 
                />
                            
            <Route exact path={`${props.path}/posts`}  
                render={(_props) => <UserPosts {..._props} user={props.user} />}
                />
        
            <Route exact path={`${props.path}/albums`}  
                render={(_props) => <UserAlbums {..._props} user={props.user} />}
                />
        
            <Route exact path={`${props.path}/albums/:albumId`}
                component={UserPhotos}
                />
        </Switch>
    )
}


UserRouter.prototypes = {
    user: Proptypes.object.isRequired,
    path: Proptypes.string.isRequired,
}