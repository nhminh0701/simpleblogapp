import React, { Component } from 'react'
import { Post } from './Post'

const POST_PER_LOAD = 5

export default class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
        
        
    }

    componentWillMount() {
        this.loadPost()
    }

    componentDidMount() {
        console.log('called');
    }

    loadPost() {
        let promises = []
        let startPostIndex = this.state.posts.length + 1
        for (let i = startPostIndex; 
            i < startPostIndex + POST_PER_LOAD; i++) {
                promises.push(fetch(`https://jsonplaceholder.typicode.com/posts/${i}/`)
                            .then(res => res.json()))
            }
        Promise.all(promises)
        .then(values => {
            console.log(values)
        })
    }

    render() {
        return (
            <div>Hello</div>
        )
    }
}