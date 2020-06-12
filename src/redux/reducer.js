import { combineReducers } from 'redux'
import { data } from './index.redux.js'
import { auth } from './auth.redux.js'
export default combineReducers({ data, auth })