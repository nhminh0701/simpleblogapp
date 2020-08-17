import React, { Component } from 'react'
import { 
    Route,
    Switch,
    useParams
} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { UserProfile } from './UserProfile'



export default function() {
    let { userId } = useParams()

    return (
        <React.Fragment>
            <ConnectedUser userId={parseInt(userId)}/>
        </React.Fragment>
    )
} 


class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
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
    
                <Switch>
                    <Route 
                        exact path='' 
                        render={(props) => <UserProfile {...props} user={this.state.user} />} 
                    />
                        
    
                    <Route exact path='posts' />
    
                    <Route exact path='albums' />
    
                    <Route exact path='albums/:albumId'/>
    
                </Switch>
            </div>
        )
    }
}

User.prototypes = {
    users: PropTypes.object.isRequired,
    userId: PropTypes.number.isRequired,   
}

const mapPropsWithState = (state) => {
    return {
        users: state.users
    }
}

const ConnectedUser = connect(mapPropsWithState, null)(User)