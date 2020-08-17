import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunkmiddleware from 'redux-thunk'

export default createStore(
    reducers,
    applyMiddleware(thunkmiddleware)
)