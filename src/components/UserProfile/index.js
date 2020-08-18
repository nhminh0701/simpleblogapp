import React, { Component } from 'react'
import {  
    useRouteMatch,
    useParams,
    NavLink
} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { UserRouter } from './UserRouter'



export default function() {
    let { userId } = useParams()
    let {path, url} = useRouteMatch()
    //console.log(path + ' ' + url)

    return (
        <React.Fragment>
            <ConnectedUser userId={parseInt(userId)} path={path} url={url}/>
        </React.Fragment>
    )
} 


class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: !this.props.users.fetching ? 
            this.props.users.users.find(val => val.id === this.props.userId) :
            {}
        }
    }
    

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.users.fetching && !this.props.users.fetching) {
            this.setState({
                user: this.props.users.users.find(val => val.id === this.props.userId)
            })
        }
    }


    render() {
        return (
            <div className="container">
                <header>
                    {
                        this.state.user ?
                        <header>
                            <h5>{this.state.user.username}</h5>
                            <h5>{this.state.user.name}</h5>
                        </header> :
                        <p>User not found</p>
                    }
                </header>
                
                <nav>
                    <ul>
                        <li><NavLink to={`${this.props.url}`}>Profile</NavLink></li>
                        <li><NavLink to={`${this.props.url}/posts`}>Posts</NavLink></li>
                        <li><NavLink to={`${this.props.url}/albums`}>Albums</NavLink></li>
                    </ul>
                </nav>
                
                <UserRouter path={this.props.path} user={this.state.user} />
            </div>
        )
    }
}

User.prototypes = {
    users: PropTypes.object.isRequired,
    userId: PropTypes.number.isRequired,   
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

const mapPropsWithState = (state) => {
    return {
        users: state.users
    }
}

const ConnectedUser = connect(mapPropsWithState, null)(User)