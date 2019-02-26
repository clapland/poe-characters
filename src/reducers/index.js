import {combineReducers} from 'redux';

import ladderReducer from './ladderReducer';

export default combineReducers({
    ladder: ladderReducer
})