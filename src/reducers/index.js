import {combineReducers} from 'redux';

import ladderReducer from './ladderReducer';
import characterReducer from './characterReducer';

export default combineReducers({
    ladder: ladderReducer,
    characterInfo: characterReducer
})