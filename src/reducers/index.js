import { combineReducers } from 'redux'
import prediction from './prediction.js'
import analytics from './analytics.js'

export default combineReducers({
    prediction,
    analytics
})