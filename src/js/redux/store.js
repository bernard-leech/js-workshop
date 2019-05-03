import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import asyncReducer from './foobar.redux'
import thunk from 'redux-thunk'

const allReducers = combineReducers({ asyncReducer })
const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(allReducers, composeEnhancers(applyMiddleware(...middleware)))

export default store
