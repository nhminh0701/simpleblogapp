import React from 'react'
import {
    Link,
    useRouteMatch
} from 'react-router-dom'

export default function SearchBox() {
    let { url } = useRouteMatch()
    return (
        <div id="search-box">
            <Link to={`${url}`}>MyPage</Link>
            <input type='text' placeholder='What are you looking for?' />
        </div>
    )
}