import React from 'react'


export default function UserProfile(props) {
    let renderedComponent = props.user  
            ?   <ul>
                   <li>{props.user.email}</li> 
                    <ul id="address">
                        <li>{props.user.address.street}</li>
                        <li>{props.user.address.suite}</li>
                        <li>{props.user.address.city}</li>
                    </ul>
                </ul> 
            :   <p>User not found</p>

    return (
        <div>
            {renderedComponent}
        </div>
    )
}