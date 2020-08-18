import React from 'react'
import { connect } from 'react-redux'
import Proptype from 'prop-types'

import Album from './Album'


function Albums(props) {
    let isFetching = props.albums.fetching || props.photos.fetching || props.users.fetching
    if (isFetching) {
        return (
            <p>Loading ...</p>
        )
    } else {
        if (props.user) {
            let albums = props.albums.albums.filter(
                album => album.userId === props.user.id)

            return (
                albums.map(album => (
                    <React.Fragment key={album.id}>
                        <Album 
                            album={album} 
                            photosAmount={
                                props.photos.photos.filter(photo => photo.albumId === album.id).length}
                            />
                    </React.Fragment>
                ))
            )
        } else {
            return (
                <React.Fragment></React.Fragment>
            )
        }
    }
}

Albums.prototypes = {
    user: Proptype.object.isRequired,
    albums: Proptype.object.isRequired,
    photos: Proptype.object.isRequired,
    users: Proptype.object.isRequired,
}


const mapPropsWithState = (state) => {
    return {
        users: state.users,
        photos: state.photos,
        albums: state.albums
    }
}

export default connect(mapPropsWithState, null)(Albums)