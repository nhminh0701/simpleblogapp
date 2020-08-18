import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import Proptype from 'prop-types'


export default function Album(props) {
    let { url } = useRouteMatch()

    return (
        <NavLink to={`${url}/${props.album.id}`}>
            <h4>{props.album.title}</h4>
            <p>{props.photosAmount} photo(s)</p>
        </NavLink>
    )
}

Album.prototypes = {
    album: Proptype.object.isRequired,
    photosAmount: Proptype.number.isRequired,
}