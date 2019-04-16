import {combineReducers} from 'redux'
import login from './pages/login/reducer'
import content from './pages/login/reducer2'

export default combineReducers({
    login,content
})
