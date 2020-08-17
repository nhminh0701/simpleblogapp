import React from 'react'


export function UserProfile(props) {
    console.log(props)
    let renderedComponent = props.user.email  
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