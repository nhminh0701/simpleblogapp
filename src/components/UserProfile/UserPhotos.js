import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'


function Photos(props) {
    let { albumId } = useParams()

    if (props.albums.fetching || props.photos.fetching) {
        // Show Loading
        return (
            <div>Loading...</div>
        )
    } else {
        albumId = parseInt(albumId)
        let album = props.albums.albums.find(album => album.id === albumId)

        if (!album) {
            return (
                <p>Album not found</p>
            )
        }
        let photos = props.photos.photos.filter(photo => photo.albumId === albumId)

        return (
            <div>
                <h4>{album.title}</h4>
                <div className="container">
                    {
                        photos.length === 0 ?
                        <p>This albums is empty</p> :
                        photos.map(photo => (
                            <div key={photo.id}>
                                <a href={photo.url}>
                                    <img src={photo.thumbnailUrl} alt={photo.title}/>
                                </a>
                                
                                <p>{photo.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

Photos.prototypes = {
    albums: Proptypes.object.isRequired,
    photos: Proptypes.object.isRequired,
}

const mapPropsWithState = (state) => {
    return {
        albums: state.albums,
        photos: state.photos
    }
}

export default connect(mapPropsWithState, null)(Photos)